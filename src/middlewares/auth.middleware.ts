import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { Secret } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET || "default_secret";

export interface AuthRequest extends Request {
  user?: any;
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token requerido" });
  }
  
  const split = authHeader.split(" ");
  if (split.length !== 2 || split[0] !== "Bearer") {
    return res.status(401).json({ message: "Formato de token inválido" });
  }

  const token = split[1];
  if (!token) {
    return res.status(401).json({ message: "Token no encontrado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Token inválido" });
  }
}

export function requirePermiso(permiso: string) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.permisos.includes(permiso)) {
      return res.status(403).json({ message: "Permiso denegado" });
    }
    next();
  };
}