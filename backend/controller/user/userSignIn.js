import bcrypt from "bcryptjs";
import userModel from "../../models/user.model.js";
import jwt from "jsonwebtoken";

export const userSignInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("please provide email");
    }
    if (!password) {
      throw new Error("please provide password");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User dont exists");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      //genrating jwt token
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 8,
      });

      const tokenOption = { httpOnly: true, secure: true };
      //sending token to user
      res.cookie("token", token, tokenOption).json({
        message: "logged-in successfully",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Please check the password");
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: error?.message, error: true, success: false });
  }
};
