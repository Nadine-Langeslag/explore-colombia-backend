import { Router } from "express";
import {
  getExperience,
  createExperience,
  editExperience,
  deleteExperience,
} from "../controllers/experiences.js";
import auth from "../middlewares/auth.js";
import {
  validateExperience,
  validateExperienceItem,
  validateExperienceId,
} from "../middlewares/validation.js";

const experienceRouter = Router();

experienceRouter.get(
  "/experiences/:itemType/:itemId",
  auth,
  validateExperienceItem,
  getExperience,
);
experienceRouter.post(
  "/experiences/:itemType/:itemId",
  auth,
  validateExperienceItem,
  validateExperience,
  createExperience,
);
experienceRouter.patch(
  "/experiences/:id",
  auth,
  validateExperienceId,
  validateExperience,
  editExperience,
);
experienceRouter.delete(
  "/experiences/:id",
  auth,
  validateExperienceId,
  deleteExperience,
);

export default experienceRouter;
