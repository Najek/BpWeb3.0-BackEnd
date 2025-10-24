import prisma from "../prisma/client.js";

// Servicio para obtener los empleados registrados
export async function obtenerEmpleados() {
  return prisma.empleado.findMany();
}