import express from "express";
import userSignUpController from "../controller/user/userSignUp.js";
import { userSignInController } from "../controller/user/userSignIn.js";
import { userDetailsController } from "../controller/user/userDetail.js";
import { authToken } from "../middleware/authToken.js";
import { userLogout } from "../controller/user/userLogout.js";
import { allUsers } from "../controller/user/allUsers.js";
import { updateUser } from "../controller/user/updateUser.js";
import uploadProduct from "../controller/product/uploadProduct.js";
import getProductController from "../controller/product/getProduct.js";
import updateProductController from "../controller/product/updateProduct.js";
import deleteProductController from "../controller/product/deleteProduct.js";
import getCategorySingleProduct from "../controller/product/getCategorySingleProduct.js";
import getCategoryWiseProduct from "../controller/product/getCategoryWiseProduct.js";
import uploadFeaturedProduct from "../controller/product/uploadFeaturedProducts.js";
import getFeaturedProduct from "../controller/product/getFeaturedProduct.js";
import deleteFeaturedProductController from "../controller/product/deleteFeaturedProduct.js";
import updateFeaturedProductController from "../controller/product/updateFeaturesProduct.js";

const router = express.Router();
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/user-logout", userLogout);

//admin panel
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//products
router.post("/upload-product", authToken, uploadProduct);
router.post("/update-product", authToken, updateProductController);
router.post(
  "/update-featured-product",
  authToken,
  updateFeaturedProductController
);

router.get("/get-product", getProductController);
router.post("/delete-product", authToken, deleteProductController);

router.get("/get-category-product", getCategorySingleProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/upload-featured-product", authToken, uploadFeaturedProduct);
router.get("/get-featured-product", getFeaturedProduct);
router.post(
  "/delete-featured-product",
  authToken,
  deleteFeaturedProductController
);

export default router;
