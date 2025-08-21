import prisma from "../prisma/client.js";
import bcrypt from "bcryptjs";

export async function authenticateUser(username: string, password: string) {
  const user = await prisma.usuario.findUnique({
    where: { username },
    include: {
      permisos: { include: { permiso: true } },
      empleado: true,
    },
  });

  if (!user || !user.activo) return null;

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return null;

  const permisos = user.permisos.map((p) => p.permiso.nombre);

  return {
    id: user.id,
    username: user.username,
    permisos,
    empleado: user.empleado,
  };
}