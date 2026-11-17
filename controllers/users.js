import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import secret from "../utils/config.js";

// Create user
const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (typeof password !== "string" || password.length < 8) {
      return res.status(400).json({
        message: "Password should be at least 8 characters long",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      name,
    });
    res.status(201).json({
      data: {
        _id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid data provided for user creation",
      });
    }
    if (error.code === 11000) {
      return res.status(409).json({
        message: "This email is already registered",
      });
    }
    next(error);
  }
};

// Sign in — request the JWT
const login = async (req, res, next) => {
  try {
    const { password } = req.body;
    const email = String(req.body.email).toLowerCase().trim();
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Incorrect email or password",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: String(user._id) }, secret, {
      expiresIn: "7d",
    });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

// Get the currently authenticated user
const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.json({ data: user });
  } catch (error) {
    next(error);
  }
};

export { createUser, login, getCurrentUser };
