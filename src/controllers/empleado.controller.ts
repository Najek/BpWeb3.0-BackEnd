import type { Request, Response } from "express";
import { obtenerEmpleados } from "../services/empleado.service";

// Controlador para GET /api/empleados
export async function getEmpleados(req: Request, res: Response) {
  try {
    const empleados = await obtenerEmpleados();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: "Error al leer la información de los empleados" });
  }
}