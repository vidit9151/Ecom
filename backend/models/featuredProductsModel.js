import mongoose from "mongoose";

const featuredProduct = mongoose.Schema({
  productName: String,
  description: String,
  price: Number,
  productImage: [],
  url: String,
});
const featuredProductModel = mongoose.model("featuredProduct", featuredProduct);
export default featuredProductModel;
