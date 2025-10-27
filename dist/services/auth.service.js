"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = authenticateUser;
const client_js_1 = __importDefault(require("../prisma/client.js"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
async function authenticateUser(username, password) {
    const user = await client_js_1.default.usuario.findUnique({
        where: { username },
        include: {
            permisos: { include: { permiso: true } },
            empleado: true,
        },
    });
    if (!user || !user.activo)
        return null;
    const valid = await bcryptjs_1.default.compare(password, user.passwordHash);
    if (!valid)
        return null;
    const permisos = user.permisos.map((p) => p.permiso.nombre);
    return {
        id: user.id,
        username: user.username,
        permisos,
        empleado: user.empleado,
    };
}
//# sourceMappingURL=auth.service.js.map