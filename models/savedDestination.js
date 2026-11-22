import mongoose from "mongoose";

const savedDestinationSchema = new mongoose.Schema({
  itemId: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    enum: ["destination", "place"],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent duplicate saves by the same user
savedDestinationSchema.index(
  { itemId: 1, itemType: 1, user: 1 },
  { unique: true },
);

export default mongoose.model("SavedDestination", savedDestinationSchema);
