import { Router } from "express";
import { getEmpleados } from "../controllers/empleado.controller.js";
import { requireAuth, requirePermiso } from "../middlewares/auth.middleware.js";

const router = Router();

router.get(
  "/empleados",
  requireAuth,
  requirePermiso("ver_empleados"),
  getEmpleados
);

export default router;