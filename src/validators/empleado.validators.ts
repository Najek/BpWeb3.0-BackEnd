import { body } from 'express-validator';

export const empleadoCreateValidator = [
  body("nombres").isString().notEmpty(),
  body("apellidos").isString().notEmpty(),
  body("cedula").isString().notEmpty(),
  body("sangre").isString().notEmpty(),
  body("correo").isEmail().notEmpty(),
];