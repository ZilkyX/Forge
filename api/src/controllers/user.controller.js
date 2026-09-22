import { clerkClient } from "@clerk/express";
import User from "../models/user.model.js";

export const syncUser = async (req, res, next) => {
  try {
    const { userId } = req.auth;

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      const clerkUser = await clerkClient.users.getUser(userId);

      user = await User.create({
        clerkId: clerkUser.id,
        fullName: clerkUser.fullName || "",
        username: clerkUser.username || `user_${clerkUser.id.slice(-6)}`,
        profileImg: {
          url: clerkUser.imageUrl,
        },
      });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
