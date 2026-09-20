import User from "../models/user.model.js";

export const checkAuth = async (req, res) => {};
export const signIn = async (req, res) => {};

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.find({ email });

    if (user)
      return res.status(400).json({ error: "Error - Email already exists." });

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();

    console.log("Account successfully created.");
  } catch (error) {
    console.log("Error in signUp controller.", error);
  }
};

export const signOut = async (req, res) => {};
