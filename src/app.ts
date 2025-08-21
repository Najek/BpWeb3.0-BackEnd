import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { requireAuth, requirePermiso } from "./middlewares/auth.middleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.get(
  "/api/empleados",
  requireAuth,
  requirePermiso("ver_empleados"),
  (req, res) => {
    res.json({ message: "Acceso permitido a empleados" });
  }
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));