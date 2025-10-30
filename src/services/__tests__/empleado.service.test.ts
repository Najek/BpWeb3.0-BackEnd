import { obtenerEmpleados, crearEmpleados } from "../empleado.service";
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

describe("crearEmpleados", () => {
  it("Crea un empleado correctamente si no existe duplicado", async () => {
    // Mock para no crear realmente en la base de datos
    jest.spyOn(prisma.empleado, "findFirst").mockResolvedValue(null);
    jest.spyOn(prisma.empleado, "create").mockResolvedValue({
      id: 999,
      nombres: "Nuevo",
      apellidos: "Empleado",
      cedula: "987654",
      nacimiento: null,
      sangre: "O+",
      correo: "nuevo@email.com",
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
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const empleado = await crearEmpleados({
      nombres: "Nuevo",
      apellidos: "Empleado",
      cedula: "987654",
      sangre: "O+",
      correo: "nuevo@email.com",
    });
    expect(empleado.nombres).toBe("Nuevo");
    expect(empleado.cedula).toBe("987654");

    jest.restoreAllMocks();
  });

  it("Lanza error si ya existe cédula/correo", async () => {
    jest.spyOn(prisma.empleado, "findFirst").mockResolvedValue({
      id: 1,
      nombres: "Repetido",
      apellidos: "Empleado",
      cedula: "123456",
      nacimiento: null,
      sangre: "A+",
      correo: "repetido@email.com",
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
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await expect(
      crearEmpleados({
        nombres: "Repetido",
        apellidos: "Empleado",
        cedula: "123456",
        sangre: "A+",
        correo: "repetido@email.com",
      })
    ).rejects.toThrow("Cédula o correo ya registrados");
    jest.restoreAllMocks();
  });
});