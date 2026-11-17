import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    destinationId: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 300,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Experience", experienceSchema);
