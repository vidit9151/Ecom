import { useEffect, useState } from "react";
import { summaryApi } from "../common/index";
import categoryImagery from "../helper/categoryImagery";
import { Link } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const CategoryList = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(summaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setLoading(false);

    setCategoryProduct(dataResponse.data);
  };
  const categoryLoading = new Array(18).fill(null);
  // flex items-center gap-4 justify-between overflow-scroll hideScroll
  useEffect(() => {
    fetchCategoryProduct();
  }, []);
  return (
    <div className="container lg:px-20 md:px-20  px-6 max-w-[100vw] relative my-10 md:my-12  ">
      <h6 className="text-[#444444] md:text-[48px] text-4xl font-bold  text-center mb-5">
        Components
      </h6>
      <div className="grid auto-rows-max grid-cols-3 md:gap-0 sm:grid-cols-3 sm:gap-0 pt-5 md:grid-cols-5  lg:grid-cols-9 items-center justify-center">
        {loading
          ? categoryLoading.map((el, index) => {
              return (
                <div
                  key={"loadinghadkds" + index}
                  className="md:w-20 md:h-20 w-24 h-24 cursor-pointer flex items-center justify-center flex-col mx-auto my-2 "
                >
                  <Spin indicator={antIcon} className="text-empressOrange" />
                </div>
              );
            })
          : categoryProduct.map((product, index) => {
              return (
                <Link
                  to={"/product-category/" + product?.category}
                  key={"product.category" + index}
                  className="cursor-pointer flex items-center flex-col mx-auto my-2 hover:text-empressOrange relative"
                >
                  <div className="md:w-20 md:h-20 w-24 h-24  ">
                    <img
                      src={categoryImagery(product?.category, 1)}
                      alt={product?.category}
                      className="h-full object-scale-down hover:scale-110   bg-transparent rounded-lg overflow-hidden hover:grayscale-[0.3] p-1"
                    />
                  </div>
                  <p className="md:text-[10px] text-sm  text-center uppercase md:-bottom-5  md:absolute mb-2 transition-all">
                    {categoryImagery(product?.category, 2)}
                  </p>
                </Link>
              );
            })}
      </div>
    </div>
  );
};
export default CategoryList;
