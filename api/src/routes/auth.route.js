import { Router } from "express";
import { protectRoutes } from "../middlewares/auth.middleware.js";
import {
  checkAuth,
  signIn,
  signOut,
  signUp,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../validations/auth.validation.js";

const router = Router();

router.get("/check-auth", protectRoutes, checkAuth);
router.post("/sign-in", validate(loginSchema), signIn);
router.post("/sign-up", validate(registerSchema), signUp);
router.post("/sign-out", signOut);

export default router;
