import { Router } from "express";
import { getEmpleados, postEmpleado } from "../controllers/empleado.controller";
import { requireAuth, requirePermiso } from "../middlewares/auth.middleware";

const router = Router();

// Ruta para obtener lista de empleados
router.get(
  "/empleados",
  requireAuth,
  requirePermiso("ver_empleados"),
  getEmpleados
);

// Ruta para registrar empleados
router.post(
  "/empleados",
  requireAuth,
  requirePermiso("crear_empleados"),
  postEmpleado
);

export default router;