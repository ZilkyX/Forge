import User from "../models/user.model.js";
import { generateVerificationCode } from "../utils/generateVerificationCode.js";
import { generateToken } from "../utils/generateTokenAndSetCookie.js";

export const checkAuth = async (req, res) => {};
export const signIn = async (req, res) => {};

export const signUp = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({
        success: false,
        message: "Username already exists.",
      });
    }

    const { code, hashedCode } = generateVerificationCode();

    const newUser = new User({
      fullName,
      username,
      email,
      password,
      verificationToken: hashedCode,
      verificationTokenExpiresAt: new Date(Date.now() + 10 * 60 * 1000),
    });

    await newUser.save();

    generateToken(res, newUser._id);
    // await sendVerificationEmail(user.email, code);

    return res.status(201).json({
      success: true,
      message: "Account created. Check your email for the verification code.",
    });
  } catch (error) {
    console.error("Error in signUp controller:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const signOut = async (req, res) => {};
