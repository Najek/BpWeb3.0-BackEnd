"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerEmpleados = obtenerEmpleados;
exports.crearEmpleados = crearEmpleados;
const client_1 = __importDefault(require("../prisma/client"));
// Servicio para obtener los empleados registrados
async function obtenerEmpleados() {
    //Consulta tipo SELECT
    return client_1.default.empleado.findMany();
}
//Servicio para agregar un nuevo empleado
async function crearEmpleados(data) {
    //Validación de los campos UNIQUE
    const existe = await client_1.default.empleado.findFirst({
        where: {
            OR: [
                { cedula: data.cedula },
                { correo: data.correo }
            ]
        }
    });
    if (existe)
        throw new Error("Cédula o correo ya registrados");
    return client_1.default.empleado.create({
        data: {
            nombres: data.nombres,
            apellidos: data.apellidos,
            cedula: data.cedula,
            nacimiento: data.nacimiento,
            sangre: data.sangre,
            correo: data.correo,
            celular: data.celular,
            direccion: data.direccion,
            cargo: data.cargo,
            contactoEmergencia: data.contactoEmergencia,
            numeroEmergencia: data.numeroEmergencia,
            eps: data.eps,
            pensiones: data.pensiones,
            arl: data.arl,
            salario: data.salario,
            fechaIngreso: data.fechaIngreso,
            fechaTermino: data.fechaTermino,
            fotoUrl: data.fotoUrl,
            cesantias: data.cesantias,
        }
    });
}
//# sourceMappingURL=empleado.service.js.map