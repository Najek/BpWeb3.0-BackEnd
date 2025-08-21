import type { Request, Response } from "express";
import { authenticateUser } from "../services/auth.service.js";
import { signJwt } from "../utils/jwt.js";

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  try {
    const user = await authenticateUser(username, password);
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    const token = signJwt({
      userId: user.id,
      permisos: user.permisos,
    });
    res.json({ token, user: { ...user, passwordHash: undefined } });
  } catch (error) {
    res.status(401).json({ message: (error as Error).message });
  }
}