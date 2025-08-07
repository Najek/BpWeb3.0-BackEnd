-- CreateTable
CREATE TABLE "public"."Empleado" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "nacimiento" TIMESTAMP(3),
    "sangre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "celular" TEXT,
    "direccion" TEXT,
    "cargo" TEXT,
    "contactoEmergencia" TEXT,
    "numeroEmergencia" TEXT,
    "eps" TEXT,
    "pensiones" TEXT,
    "arl" TEXT,
    "salario" INTEGER,
    "fechaIngreso" TIMESTAMP(3),
    "fechaTermino" TIMESTAMP(3),
    "fotoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "rol" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "empleadoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Permiso" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Permiso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PermisoUsuario" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "permisoId" INTEGER NOT NULL,

    CONSTRAINT "PermisoUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_cedula_key" ON "public"."Empleado"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_correo_key" ON "public"."Empleado"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "public"."Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_empleadoId_key" ON "public"."Usuario"("empleadoId");

-- CreateIndex
CREATE UNIQUE INDEX "Permiso_nombre_key" ON "public"."Permiso"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "PermisoUsuario_usuarioId_permisoId_key" ON "public"."PermisoUsuario"("usuarioId", "permisoId");

-- AddForeignKey
ALTER TABLE "public"."Usuario" ADD CONSTRAINT "Usuario_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "public"."Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PermisoUsuario" ADD CONSTRAINT "PermisoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PermisoUsuario" ADD CONSTRAINT "PermisoUsuario_permisoId_fkey" FOREIGN KEY ("permisoId") REFERENCES "public"."Permiso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
