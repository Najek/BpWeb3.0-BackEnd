"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = requireAuth;
exports.requirePermiso = requirePermiso;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Token requerido" });
    }
    const split = authHeader.split(" ");
    if (split.length !== 2 || split[0] !== "Bearer") {
        const authHeader = req.headers.authorization;
        console.log("HEADER RECIBIDO EN BACKEND:", authHeader);
        return res.status(401).json({ message: "Formato de token inválido" });
    }
    const token = split[1];
    if (!token) {
        return res.status(401).json({ message: "Token no encontrado" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch {
        return res.status(401).json({ message: "Token inválido" });
    }
}
function requirePermiso(permiso) {
    return (req, res, next) => {
        if (!req.user || !req.user.permisos.includes(permiso)) {
            return res.status(403).json({ message: "Permiso denegado" });
        }
        next();
    };
}
//# sourceMappingURL=auth.middleware.js.map