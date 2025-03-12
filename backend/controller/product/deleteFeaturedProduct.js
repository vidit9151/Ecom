import uploadProductPermission from "../../helper/permission.js";
import featuredProductModel from "../../models/featuredProductsModel.js";

async function deleteFeaturedProductController(req, res) {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("Permission denied");
    }

    const { _id } = req.body;

    const deletedProduct = await featuredProductModel.findByIdAndDelete({
      _id: _id,
    });

    res.json({
      message: "Product deleted successfully",
      data: deletedProduct,
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

export default deleteFeaturedProductController;
