import { Router } from "express";
import {
  getSavedDestinations,
  saveDestination,
  deleteSavedDestination,
} from "../controllers/savedDestinations.js";
import auth from "../middlewares/auth.js";
import { validateSavedDestination } from "../middlewares/validation.js";

const savedDestinationsRouter = Router();

savedDestinationsRouter.get("/saved-destinations", auth, getSavedDestinations);
savedDestinationsRouter.post(
  "/saved-destinations",
  auth,
  validateSavedDestination,
  saveDestination,
);
savedDestinationsRouter.delete(
  "/saved-destinations/:id",
  auth,
  deleteSavedDestination,
);

export default savedDestinationsRouter;
