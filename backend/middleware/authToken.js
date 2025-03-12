import jwt from "jsonwebtoken";

export const authToken = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(200).json({
        message: "user not logged-in",
        error: true,
        success: false,
      });
    }
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log("Error auth ", err);
      }
      req.userId = decoded?._id;
      next();
    });
  } catch (error) {
    res.status(400).json({
      message: error?.message,
      data: [],
      error: true,
      success: false,
    });
  }
};
