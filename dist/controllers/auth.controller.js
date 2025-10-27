"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const auth_service_js_1 = require("../services/auth.service.js");
const jwt_js_1 = require("../utils/jwt.js");
async function login(req, res) {
    const { username, password } = req.body;
    try {
        const user = await (0, auth_service_js_1.authenticateUser)(username, password);
        if (!user) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }
        const token = (0, jwt_js_1.signJwt)({
            userId: user.id,
            permisos: user.permisos,
        });
        res.json({ token, user: { ...user, passwordHash: undefined } });
    }
    catch (error) {
        res.status(401).json({ message: error.message });
    }
}
//# sourceMappingURL=auth.controller.js.map