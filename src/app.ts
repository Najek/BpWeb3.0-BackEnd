import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import empleadoRoutes from "./routes/empleado.routes";
//import { requireAuth, requirePermiso } from "./middlewares/auth.middleware.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  allowedHeaders: ["Authorization", "Content-Type"],
}));
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", empleadoRoutes);

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