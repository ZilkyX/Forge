import { clerkClient, getAuth } from "@clerk/express";
import User from "../models/user.model.js";
import { AppError } from "../utils/app-error.js";

export const syncUser = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      const clerkUser = await clerkClient.users.getUser(userId);

      user = await User.create({
        clerkId: clerkUser.id,
        fullName: clerkUser.fullName || "",
        username: clerkUser.username || `user_${clerkUser.id.slice(-6)}`,
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserInfo = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user) throw new AppError("User not found.", 404);

    const allowedUpdates = [
      "fullName",
      "username",
      "height",
      "currentWeight",
      "measurementPreference",
    ];

    allowedUpdates.forEach((field) => {
      if (req.body[field] !== undefined) {
        user[field] = req.body[field];
      }
    });

    await user.save();

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

export const updateUserProfileImage = async (req, res, next) => {
  try {
    const imgFile = req.files?.imgFile;
    const user = req.user;

    if (!user) throw new AppError("User not found.", 404);

    if (!imgFile) {
      throw new AppError("Profile image is required.", 400);
    }

    //todo: upload to cloudinary
  } catch (error) {
    next(error);
  }
};

export const getPublicProfile = async (req, res, next) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username }).select("-clerkId").lean();

    if (!user) throw new AppError("User not found.", 404);

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

export const toggleFollow = async (req, res, next) => {
  try {
    const { id } = req.params;

    const currentUser = req.user;
    const targetUser = await User.findById(id);

    if (!targetUser) throw new AppError("User not found.", 404);

    if (currentUser._id === targetUser._id)
      throw new AppError("You can't follow yourself.", 400);

    const isFollowing = currentUser.following.includes(targetUser._id);

    if (isFollowing) {
      currentUser.following.pull(targetUser._id);
      targetUser.followers.pull(currentUser._id);
    } else {
      currentUser.following.push(targetUser._id);
      targetUser.followers.push(currentUser._id);
    }

    await Promise.all([currentUser.save(), targetUser.save()]);

    return res.status(200).json({ success: true, following: !isFollowing });
  } catch (error) {
    next(error);
  }
};
