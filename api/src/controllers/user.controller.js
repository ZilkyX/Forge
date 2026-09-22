import { clerkClient } from "@clerk/express";
import User from "../models/user.model.js";
import { AppError } from "../utils/app-error.js";

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
      });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const { clerkId } = req.user;

    const user = await User.find({ clerkId });

    if (!user) throw new AppError("User not found.", 404);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUserInfo = async (req, res, next) => {
  try {
    const { clerkId } = req.user;

    const user = await User.findOne({ clerkId });

    if (!user) throw new AppError("User not found.", 404);

    Object.assign(user, req.body);

    await user.save();

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

export const updateUserProfileImage = async (req, res, next) => {
  try {
    const { imgFile } = req.files;
    const { clerkId } = req.user;

    const user = await User.find({ clerkId });

    if (!user) throw new AppError("User not found.", 404);

    //todo: upload to cloudinary
  } catch (error) {
    next(error);
  }
};

export const getPublicProfile = async (req, res, next) => {
  try {
    const { username } = req.params;

    const user = await User.find({ username });

    if (!user) throw new AppError("User not found.", 404);

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

export const toggleFollow = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { clerkId } = req.user;

    const user = await User.find({ clerkId });

    if (!user) throw new AppError("User not found.", 404);

    
  } catch (error) {
    next(error);
  }
};
