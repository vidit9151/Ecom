const backendDomain = "http://localhost:8080";
export const summaryApi = {
  signUp: { url: `${backendDomain}/api/signup`, method: "post" },
  signIn: { url: `${backendDomain}/api/signin`, method: "post" },
  current_user: { url: `${backendDomain}/api/user-details`, method: "get" },
  logout_user: { url: `${backendDomain}/api/user-logout`, method: "get" },
  allUser: { url: `${backendDomain}/api/all-user`, method: "get" },
  updateUser: { url: `${backendDomain}/api/update-user`, method: "post" },
  uploadProduct: { url: `${backendDomain}/api/upload-product`, method: "post" },
  uploadFeaturedProduct: {
    url: `${backendDomain}/api/upload-featured-product`,
    method: "post",
  },

  allProduct: { url: `${backendDomain}/api/get-product`, method: "get" },
  allFeaturedProduct: {
    url: `${backendDomain}/api/get-featured-product`,
    method: "get",
  },
  updateFeaturedProduct: {
    url: `${backendDomain}/api/update-featured-product`,
    method: "post",
  },
  updateProduct: {
    url: `${backendDomain}/api/update-product`,
    method: "post",
  },
  deleteProduct: {
    url: `${backendDomain}/api/delete-product`,
    method: "post",
  },
  deleteFeaturedProduct: {
    url: `${backendDomain}/api/delete-featured-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${backendDomain}/api/get-category-product`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${backendDomain}/api/category-product`,
    method: "post",
  },
};
//these are just urls and methods
