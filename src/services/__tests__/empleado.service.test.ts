import { obtenerEmpleados } from "../empleado.service";
import prisma from "../../prisma/client";

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
    jest.spyOn(prisma.empleado, "findMany").mockResolvedValue(empleadosMock);

    const empleados = await obtenerEmpleados();
    expect(empleados).toEqual(empleadosMock);

    jest.restoreAllMocks(); // Limpia los mocks para evitar interferencias en otros tests
  });
});