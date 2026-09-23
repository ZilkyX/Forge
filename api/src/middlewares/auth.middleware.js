import { getAuth } from "@clerk/express";
import User from "../models/user.model.js";
import { AppError } from "../utils/app-error.js";

export const protectRoute = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) throw new AppError("Unauthorized", 401);

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new AppError("User not found.", 404);

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};
