import express from "express";
import { config } from "dotenv";
import { connectDB } from "./lib/mongoDB.js";
import { clerkMiddleware } from "@clerk/express";

import userRoutes from "./routes/user.route.js";

config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/user", userRoutes);

connectDB().then(
  app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
  }),
);
