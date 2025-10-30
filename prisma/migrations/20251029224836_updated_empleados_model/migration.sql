-- AlterTable
ALTER TABLE "Empleado" ADD COLUMN     "cesantias" TEXT;

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "refreshTokenHash" TEXT NOT NULL,
    "jti" TEXT NOT NULL,
    "familyId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userAgent" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "lastUsedAt" TIMESTAMP(3),

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_usuarioId_key" ON "Session"("usuarioId");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
