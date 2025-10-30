"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmpleados = getEmpleados;
exports.postEmpleado = postEmpleado;
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
// Controlador para POST /api/empleados
async function postEmpleado(req, res) {
    try {
        const data = req.body;
        // Asegurar que los campos obligatorios existan
        if (!data.nombres || !data.apellidos || !data.cedula || !data.sangre || !data.correo) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const empleado = await (0, empleado_service_1.crearEmpleados)(data);
        res.status(201).json(empleado);
    }
    catch (error) {
        if (error.message == "Cédula o correo ya registrados") { //Se verifica la coincidencia del mensaje de error registrado
            return res.status(409).json({ message: error.message });
        }
        res.status(500).json({ message: "Error al crear al empleado" });
    }
}
//# sourceMappingURL=empleado.controller.js.map