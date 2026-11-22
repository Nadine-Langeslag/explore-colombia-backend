import { Router } from "express";
import { createUser, login, getCurrentUser } from "../controllers/users.js";

import auth from "../middlewares/auth.js";
import { validateSignup, validateSignin } from "../middlewares/validation.js";

const userRouter = Router();

userRouter.post("/signup", validateSignup, createUser);
userRouter.post("/signin", validateSignin, login);
userRouter.get("/users/me", auth, getCurrentUser);

export default userRouter;
