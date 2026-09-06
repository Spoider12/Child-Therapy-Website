import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { errorHandler } from "./middleware/errorHandler.js";
import { protect, requireAdmin } from "./middleware/auth.js";

import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";

dotenv.config();

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
  })
);

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/auth", authRoutes);
app.use("/api/admin", authRoutes);
app.use("/api", publicRoutes);
app.use("/api/dashboard", protect, requireAdmin, dashboardRoutes);
app.use("/api/admin", protect, requireAdmin, adminRoutes);
app.use("/api/settings", protect, requireAdmin, settingsRoutes);

app.use(errorHandler);

export default app;
