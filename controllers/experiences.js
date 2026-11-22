import Experience from "../models/experience.js";
import SavedDestination from "../models/savedDestination.js";

// Get experiences for a destination or place.
const getExperience = async (req, res, next) => {
  try {
    const { itemId, itemType } = req.params;

    const experiences = await Experience.find({ itemId, itemType })
      .populate("author", "name")
      .sort({ createdAt: -1 });

    res.json({ data: experiences });
  } catch (error) {
    next(error);
  }
};

// Create an experience.
const createExperience = async (req, res, next) => {
  try {
    const { text } = req.body;
    const { itemId, itemType } = req.params;

    const savedDestination = await SavedDestination.findOne({
      itemId,
      itemType,
      user: req.user._id,
    });

    if (!savedDestination) {
      return res.status(403).json({
        message: "You must save this item before sharing an experience",
      });
    }

    const existingExperience = await Experience.findOne({
      itemId,
      itemType,
      author: req.user._id,
    });

    if (existingExperience) {
      return res.status(409).json({
        message: "You have already shared an experience for this item.",
      });
    }

    const experience = await Experience.create({
      itemId,
      itemType,
      text,
      author: req.user._id,
    });

    await experience.populate("author", "name");

    res.status(201).json({ data: experience });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message:
          "It was not possible to create the experience. Review the data sent.",
      });
    }

    return next(error);
  }
};

// Edit an experience (author only).
const editExperience = async (req, res, next) => {
  try {
    const { text } = req.body;

    const experience = await Experience.findOneAndUpdate(
      {
        _id: req.params.id,
        author: req.user._id,
      },
      { text },
      {
        new: true,
        runValidators: true,
      },
    ).orFail();

    res.json({ data: experience });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid data to update the experience",
      });
    }

    if (error.name === "DocumentNotFoundError") {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    return next(error);
  }
};

// Delete an experience (author only).
const deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findOne({
      _id: req.params.id,
      author: req.user._id,
    }).orFail();

    await experience.deleteOne();

    res.json({ message: "Experience deleted" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid ID",
      });
    }

    if (error.name === "DocumentNotFoundError") {
      return res.status(404).json({
        message: "Experience not found",
      });
    }

    return next(error);
  }
};

export {
  getExperience, createExperience, editExperience, deleteExperience,
};
