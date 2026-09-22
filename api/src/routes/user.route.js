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

// TODO:
// GET    /me                  Get current user's profile
// POST   /sync                Create/sync Clerk user to MongoDB
// PATCH  /me                  Update profile
// PATCH  /me/avatar           Update profile image
// GET    /:username           Public profile
// POST   /follow/:id          Follow a user
// DELETE /follow/:id          Unfollow a user
// GET    /:username/followers Get followers
// GET    /:username/following Get following

router.get("/me", protectRoute, getMe);
router.post("/sync", protectRoute, syncUser);
router.patch("/me", protectRoute, updateUserInfo);
router.patch("/me/avatar", protectRoute, updateUserProfileImage);
router.get("/:username", protectRoute, getPublicProfile);
router.post("/follow/:id", protectRoute, )

export default router;
