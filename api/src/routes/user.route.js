import { Router } from "express";
import {
  getMe,
  getPublicProfile,
  syncUser,
  updateUserInfo,
  updateUserProfileImage,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/sync", syncUser);
router.get("/me", protectRoute, getMe);
router.patch("/me", protectRoute, updateUserInfo);
router.patch("/me/avatar", protectRoute, updateUserProfileImage);
router.get("/:username", protectRoute, getPublicProfile);
router.post("/follow/:id", protectRoute);

export default router;
