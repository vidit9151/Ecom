import userModel from "../../models/user.model.js";
export const allUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();

    return res.json({
      message: "all user details",
      data: allUsers,
      success: true,
      error: false,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error?.message, error: true, success: false });
  }
};
