import type { Request, Response } from "express";
import { obtenerEmpleados, crearEmpleados } from "../services/empleado.service";

// Controlador para GET /api/empleados
export async function getEmpleados(req: Request, res: Response) {
  try {
    const empleados = await obtenerEmpleados();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: "Error al leer la información de los empleados" });
  }
}

// Controlador para POST /api/empleados
export async function postEmpleado(req: Request, res: Response) {
  try {
    const data = req.body;
    // Asegurar que los campos obligatorios existan
    if (!data.nombres || !data.apellidos || !data.cedula || !data.sangre || !data.correo) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }
    const empleado = await crearEmpleados(data);
    res.status(201).json(empleado);
  } catch (error: any) {
    if (error.message == "Cédula o correo ya registrados") { //Se verifica la coincidencia del mensaje de error registrado
      return res.status(409).json({ message: error.message });
    }
    res.status(500).json({ message: "Error al crear al empleado" });
  }
}