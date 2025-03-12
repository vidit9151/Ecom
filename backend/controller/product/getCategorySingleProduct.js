import productModel from "../../models/product.model.js";

const getCategoryProduct = async (req, res) => {
  try {
    const productCategory = await productModel.distinct("category"); //it will give all the category that are unique

    //array to store one product form ech category
    const productByCategory = [];
    for (const category of productCategory) {
      const product = await productModel.findOne({ category });
      if (product) {
        productByCategory.push(product);
      }
    }
    res.json({
      message: "category product",
      data: productByCategory,
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
};

export default getCategoryProduct;
