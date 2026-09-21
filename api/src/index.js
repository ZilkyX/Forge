import express from "express";
import { config } from "dotenv";
import { connectDB } from "./lib/mongoDB.js";

import authRoutes from "./routes/auth.route.js";

//todo: login, auth, create account
config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);

connectDB().then(
  app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
  }),
);
