import express from "express";
import { config } from "dotenv";
import { connectDB } from "./lib/mongoDB.js";

import authRoutes from "./routes/auth.route.js";

//todo: login, auth, create account
config();

const app = express();

app.use("/api/auth", authRoutes);

connectDB().then(
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT:${process.env.PORT}`);
  }),
);
