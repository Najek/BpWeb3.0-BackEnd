import prisma from "../prisma/client";

// Servicio para obtener los empleados registrados
export async function obtenerEmpleados() {
  return prisma.empleado.findMany();
}