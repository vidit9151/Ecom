import bcrypt from "bcryptjs";
import userModel from "../../models/user.model.js";

const userSignUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExistence = await userModel.findOne({ email });
    if (userExistence) {
      throw new Error("User already exists");
    }
    //no need to return with trowing error
    if (!name) {
      throw new Error("please provide name");
    }
    if (!email) {
      throw new Error("please provide email");
    }
    if (!password) {
      throw new Error("please provide password");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    if (!hashPassword) {
      throw new Error("password hashing failed");
    }
    const userData = new userModel({
      ...req.body,
      password: hashPassword,
      role: "GENERAL",
    });
    const saveData = await userData.save();
    res.status(201).json({
      data: saveData,
      success: true,
      error: false,
      message: "user created successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error?.message, error: true, success: false });
  }
};
export default userSignUpController;
