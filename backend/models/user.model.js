import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePic: String,
    role: String,
  },
  {
    timestamps: true,
  }
);

const userModel = new mongoose.model("user", userSchema);
export default userModel;
