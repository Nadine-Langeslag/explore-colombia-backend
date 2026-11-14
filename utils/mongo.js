import mongoose from "mongoose";
import { mongoUri } from "./config.js";

const connectToDatabase = async () => {
  await mongoose.connect(mongoUri);
  console.log("Database connected");
};

export default connectToDatabase;
