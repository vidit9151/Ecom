import userModel from "../../models/user.model.js";

export const userDetailsController = async (req, res) => {
  try {
    // console.log("user login id ", req.userId); working
    const user = await userModel.findById(req.userId);
    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "user details",
    });
  } catch (error) {
    res.status(400).json({
      message: error?.message,
      error: true,
      success: false,
    });
  }
};
