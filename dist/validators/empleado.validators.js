"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empleadoCreateValidator = void 0;
const express_validator_1 = require("express-validator");
exports.empleadoCreateValidator = [
    (0, express_validator_1.body)("nombres").isString().notEmpty(),
    (0, express_validator_1.body)("apellidos").isString().notEmpty(),
    (0, express_validator_1.body)("cedula").isString().notEmpty(),
    (0, express_validator_1.body)("sangre").isString().notEmpty(),
    (0, express_validator_1.body)("correo").isEmail().notEmpty(),
];
//# sourceMappingURL=empleado.validators.js.map