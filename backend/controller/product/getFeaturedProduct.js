import featuredProductModel from "../../models/featuredProductsModel.js";

const getFeaturedProduct = async (req, res) => {
  try {
    const allProduct = await featuredProductModel
      .find()
      .sort({ createdAt: -1 });

    res.json({
      message: "All Featured Product",
      success: true,
      error: false,
      data: allProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
export default getFeaturedProduct;
