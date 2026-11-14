import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: "Formato de correo electrónico incorrecto",
    },
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
});
export default mongoose.model("User", userSchema);
