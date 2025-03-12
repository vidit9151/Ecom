import uploadProductPermission from "../../helper/permission.js";
import featuredProductModel from "../../models/featuredProductsModel.js";

async function updateFeaturedProductController(req, res) {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("Permission denied");
    }

    const { _id, ...resBody } = req.body;

    const updateProduct = await featuredProductModel.findByIdAndUpdate(
      _id,
      resBody
    );

    res.json({
      message: "Product update successfully",
      data: updateProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

export default updateFeaturedProductController;
