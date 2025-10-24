import { Router } from "express";
import { getEmpleados } from "../controllers/empleado.controller";
import { requireAuth, requirePermiso } from "../middlewares/auth.middleware";

const router = Router();

router.get(
  "/empleados",
  requireAuth,
  requirePermiso("ver_empleados"),
  getEmpleados
);

export default router;