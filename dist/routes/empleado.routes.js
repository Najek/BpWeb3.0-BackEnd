"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleado_controller_1 = require("../controllers/empleado.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.get("/empleados", auth_middleware_1.requireAuth, (0, auth_middleware_1.requirePermiso)("ver_empleados"), empleado_controller_1.getEmpleados);
exports.default = router;
//# sourceMappingURL=empleado.routes.js.map