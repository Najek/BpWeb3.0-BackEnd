"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empleado_service_1 = require("../empleado.service");
const client_1 = __importDefault(require("../../prisma/client"));
describe("obtenerEmpleados", () => {
    it("Si ves esto, entonces la consulta funciona ok", async () => {
        const empleadosMock = [
            {
                id: 1,
                nombres: "Empleado",
                apellidos: "De Prueba",
                cedula: "123",
                nacimiento: null,
                sangre: "O+",
                correo: "SoyUnaPrueba@email.com",
                celular: null,
                direccion: null,
                cargo: null,
                contactoEmergencia: null,
                numeroEmergencia: null,
                eps: null,
                pensiones: null,
                cesantias: null,
                arl: null,
                salario: null,
                fechaIngreso: null,
                fechaTermino: null,
                fotoUrl: null,
                usuario: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        jest.spyOn(client_1.default.empleado, "findMany").mockResolvedValue(empleadosMock);
        const empleados = await (0, empleado_service_1.obtenerEmpleados)();
        expect(empleados).toEqual(empleadosMock);
        jest.restoreAllMocks(); // Limpia los mocks para evitar interferencias en otros tests
    });
});
//# sourceMappingURL=empleado.service.test.js.map