import express from "express";

import userRouter from "./users.js";
import savedDestinationsRouter from "./savedDestinations.js";
import experienceRouter from "./experiences.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Explore Colombia!");
});

router.use(userRouter);
router.use(savedDestinationsRouter);
router.use(experienceRouter);

export default router;
