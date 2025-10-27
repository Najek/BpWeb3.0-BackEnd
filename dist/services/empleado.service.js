"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerEmpleados = obtenerEmpleados;
const client_1 = __importDefault(require("../prisma/client"));
// Servicio para obtener los empleados registrados
async function obtenerEmpleados() {
    return client_1.default.empleado.findMany();
}
//# sourceMappingURL=empleado.service.js.map