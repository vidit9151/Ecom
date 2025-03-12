export const userLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({
      message: "logged-out successfully",
      error: false,
      success: true,
      data: [],
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error?.message, error: true, success: false });
  }
};
