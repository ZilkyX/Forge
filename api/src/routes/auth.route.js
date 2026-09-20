import { Router } from "express";
import { protectRoutes } from "../middlewares/auth.middleware.js";
import {
  checkAuth,
  signIn,
  signOut,
  signUp,
} from "../controllers/auth.controller.js";

const router = Router();

router.get("/check-auth", protectRoutes, checkAuth);
router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/sign-out", signOut);

export default router;
