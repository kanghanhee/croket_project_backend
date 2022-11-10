import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isSeller: {
    type: Boolean,
    default: false,
  },
});
