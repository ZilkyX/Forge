import { Router } from "express";
import { syncUser } from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/sync", protectRoute, syncUser);

export default router;
