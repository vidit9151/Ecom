import uploadProductPermission from "../../helper/permission.js";
import featuredProductModel from "../../models/featuredProductsModel.js";

const uploadFeaturedProduct = async (req, res) => {
  try {
    const sessionUserID = req.userId;
    if (!uploadProductPermission(sessionUserID)) {
      throw new Error("Permission denied");
    }
    const uploadProduct = new featuredProductModel(req.body);
    const saveProduct = await uploadProduct.save();
    res.status(201).json({
      message: "Featured Product uploaded successfully",
      error: false,
      success: true,
      date: saveProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error?.message || error,
      error: true,
      success: false,
    });
  }
};

export default uploadFeaturedProduct;
