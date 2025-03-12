import { useEffect, useState } from "react";
import UploadProduct from "../components/UploadProduct";
import { summaryApi } from "../common";

import AdminProductCard from "../components/AdminProductCard";

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const fetchAllProduct = async () => {
    const response = await fetch(summaryApi.allProduct.url);
    const dataResponse = await response.json();

    setAllProduct(dataResponse?.data || []);
  };
  useEffect(() => {
    fetchAllProduct();
  }, []);
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="py-2 px-4 blackGlass flex justify-between items-center">
        <h2 className="font-bold text-lg  ">All product</h2>
        <div></div>
        <button
          className="btn border-2 py-1 px-3"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>

      {/* all product */}
      <div className="flex items-center gap-4 flex-wrap py-4 h-[calc(100vh-100px)] overflow-y-scroll">
        {allProduct.map((product, index) => {
          return (
            <AdminProductCard
              data={product}
              key={index + "allProduct"}
              fetchData={fetchAllProduct}
            />
          );
        })}
      </div>

      {/* product upload popup component */}
      {openUploadProduct && (
        <UploadProduct
          onClose={setOpenUploadProduct}
          fetchData={fetchAllProduct}
        />
      )}
    </div>
  );
};
export default AllProducts;
