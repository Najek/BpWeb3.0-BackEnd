import jwt from "jsonwebtoken";
import type { SignOptions, Secret } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET || "default_secret";

export function signJwt(payload: object, expiresIn: number | string = "1h") {
  const options: SignOptions = { expiresIn: expiresIn as any };
  return jwt.sign(payload, JWT_SECRET, options);
}

export function verifyJwt(token: string) {
  return jwt.verify(token, JWT_SECRET);
}