import SavedDestination from "../models/savedDestination.js";

// Get all saved destinations belonging to the authenticated user
const getSavedDestinations = async (req, res, next) => {
  try {
    const savedDestinations = await SavedDestination.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });
    res.json({ data: savedDestinations });
  } catch (error) {
    next(error);
  }
};

// Save a destination to a user
const saveDestination = async (req, res, next) => {
  try {
    const { itemId, itemType } = req.body;
    const savedDestination = await SavedDestination.create({
      itemId,
      itemType,
      user: req.user._id,
    });
    res.status(201).json({ data: savedDestination });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid saved item data",
      });
    }

    if (error.code === 11000) {
      return res.status(409).json({
        message: "This item is already saved",
      });
    }
    return next(error);
  }
};

// Delete a saved destination
const deleteSavedDestination = async (req, res, next) => {
  try {
    const savedDestination = await SavedDestination.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!savedDestination) {
      return res.status(404).json({
        message: "Saved item not found",
      });
    }

    await savedDestination.deleteOne();

    res.json({ message: "Saved item deleted" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid item ID",
      });
    }

    return next(error);
  }
};

export { getSavedDestinations, saveDestination, deleteSavedDestination };
