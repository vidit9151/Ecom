import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import AdminProductEdit from "./AdminProductEdit";
import displayINRCurrency from "../helper/displayCurrency";
const AdminProductCard = ({ data, fetchData }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div>
      <div className="blackGlass p-4 rounded ">
        <div className="w-40 ">
          {" "}
          <div className="w-32 h-32 justify-center items-center flex">
            <img
              src={data?.productImage[0]}
              alt=""
              className="object-fill mx-auto h-full"
            />
          </div>
          <h1 className="text-ellipsis line-clamp-2">
            {data?.productName || (
              <p className="text-[10px]">some problem displaying name</p>
            )}
          </h1>{" "}
          <div className="flex justify-between items-center">
            <p className="font-semibold">
              {displayINRCurrency(data.sellingPrice)}
            </p>{" "}
            <div
              onClick={() => setEditProduct(true)}
              className="text-gray-500 hover:text-empressOrangeHover hover:scale-110 w-fit ml-auto p-2 bg-gray-800 rounded-lg hover:bg-gray-500 cursor-pointer"
            >
              <FaEdit />
            </div>
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminProductEdit
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};
export default AdminProductCard;
