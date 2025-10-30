import prisma from "../prisma/client";

// Servicio para obtener los empleados registrados
export async function obtenerEmpleados() {
  //Consulta tipo SELECT
  return prisma.empleado.findMany();
}

//Servicio para agregar un nuevo empleado
export async function crearEmpleados(data: any) {
  //Validación de los campos UNIQUE
  const existe = await prisma.empleado.findFirst({
    where: {
      OR: [
        { cedula: data.cedula },
        { correo: data.correo }
      ]
    }
  });
  if (existe) throw new Error("Cédula o correo ya registrados");

  return prisma.empleado.create({
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