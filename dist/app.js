"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const empleado_routes_1 = __importDefault(require("./routes/empleado.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Authorization", "Content-Type"],
}));
app.use(express_1.default.json());
app.use("/api", auth_routes_1.default);
app.use("/api", empleado_routes_1.default);
/*app.get(
  "/api/empleados",
  requireAuth,
  requirePermiso("ver_empleados"),
  (req, res) => {
    res.json({ message: "Acceso permitido a empleados" });
  }
);
*/
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
//# sourceMappingURL=app.js.map