"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmpleados = getEmpleados;
const empleado_service_1 = require("../services/empleado.service");
// Controlador para GET /api/empleados
async function getEmpleados(req, res) {
    try {
        const empleados = await (0, empleado_service_1.obtenerEmpleados)();
        res.json(empleados);
    }
    catch (error) {
        res.status(500).json({ message: "Error al leer la información de los empleados" });
    }
}
//# sourceMappingURL=empleado.controller.js.map