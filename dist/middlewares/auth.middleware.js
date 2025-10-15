import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
export function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Token requerido" });
    }
    const split = authHeader.split(" ");
    if (split.length !== 2 || split[0] !== "Bearer") {
        return res.status(401).json({ message: "Formato de token inválido" });
    }
    const token = split[1];
    if (!token) {
        return res.status(401).json({ message: "Token no encontrado" });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch {
        return res.status(401).json({ message: "Token inválido" });
    }
}
export function requirePermiso(permiso) {
    return (req, res, next) => {
        if (!req.user || !req.user.permisos.includes(permiso)) {
            return res.status(403).json({ message: "Permiso denegado" });
        }
        next();
    };
}
//# sourceMappingURL=auth.middleware.js.map