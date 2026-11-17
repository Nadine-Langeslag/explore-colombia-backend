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
  validateDestinationId,
  validateExperienceId,
} from "../middlewares/validation.js";

const experienceRouter = Router();

experienceRouter.get(
  "/experiences/:destinationId",
  auth,
  validateDestinationId,
  getExperience,
);
experienceRouter.post(
  "/experiences/:destinationId",
  auth,
  validateDestinationId,
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
