import express from "express";
import { config } from "dotenv";
import { connectDB } from "./lib/mongoDB.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import path from "path";

import userRoutes from "./routes/user.route.js";
import exerciseRoutes from "./routes/exercise.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";

config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(clerkMiddleware());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(
  "/exercise-images",
  express.static(path.resolve("data/exercises-dataset/images")),
);

app.use(
  "/exercise-videos",
  express.static(path.resolve("data/exercises-dataset/videos")),
);

app.use("/api/user", userRoutes);
app.use("/api/exercise", exerciseRoutes);

app.use(errorHandler);

connectDB().then(
  app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
  }),
);
