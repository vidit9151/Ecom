import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import productCategory from "../helper/productCategoty";
import { GiCloudUpload } from "react-icons/gi";
import uploadImage from "../helper/uploadImage";
import DisplayImage from "./DisplayImage";
import { IoTrashBinSharp } from "react-icons/io5";
import { summaryApi } from "../common";
import { toast } from "react-toastify";
const AdminProductEdit = ({ onClose, productData, fetchData }) => {
  const [data, setData] = useState({
    ...productData,
    productName: productData?.productName,
    brandName: productData?.brandName,
    category: productData?.category,
    productImage: productData?.productImage || [],
    description: productData?.description,
    price: productData?.price,
    sellingPrice: productData?.sellingPrice,
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        productImage: [...preve.productImage, uploadImageCloudinary.url],
      };
    });
  };

  const handleDeleteProductImage = async (index) => {
    console.log("image index", index);

    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);

    setData((prev) => {
      return {
        ...prev,
        productImage: [...newProductImage],
      };
    });
  };

  {
    /**upload product */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(summaryApi.updateProduct.url, {
      method: summaryApi.updateProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData?.message);
      onClose();
      fetchData();
    }

    if (responseData.error) {
      toast.error(responseData?.message);
    }
  };
  const handleDelete = async () => {
    console.log(data);

    const response = await fetch(summaryApi.deleteProduct.url, {
      method: summaryApi.deleteProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (responseData.success) {
      toast.success(responseData?.message);
      onClose();
      fetchData();
    }

    if (responseData.error) {
      toast.error(responseData?.message);
    }
  };

  return (
    <div className=" fullScreenGlass ">
      <div className="box p-4 max-w-2xl h-full max-h-[75vh] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="pb-4 text-lg font-bold"> Edit Product</h2>
          <div
            className="text-empressOrange hover:text-empressOrangeHover hover:scale-125 w-fit ml-auto"
            onClick={() => onClose((prev) => (prev = false))}
          >
            <RiCloseCircleFill />
          </div>
        </div>
        <form
          className="grid p-4 gap-2 overflow-y-scroll h-full pb-20 relative "
          onSubmit={handleSubmit}
        >
          {" "}
          <div
            onClick={() => {
              const sign = window
                .prompt(`Type "y" to delete and "n" if you dont wanna`)
                .trim();
              if (sign === "y" || sign === "Y") {
                handleDelete();
              } else {
                return;
              }
            }}
            className="absolute cursor-pointer text-sm top-0 right-2 text-gray-500 underline p-1 hover:text-empressOrangeHover hover:scale-110 rounded-full "
          >
            delete product
          </div>
          <label htmlFor="productName">Product Name :</label>
          <input
            required
            type="text"
            id="productName"
            name="productName"
            placeholder="enter product name.."
            value={data.productName}
            onChange={handleOnChange}
            className="glass p-1 outline-none border rounded"
          />
          <label htmlFor="brandName" className="mt-3">
            Brand Name :
          </label>
          <input
            required
            type="text"
            id="brandName"
            name="brandName"
            placeholder="enter brand name.."
            value={data.brandName}
            onChange={handleOnChange}
            className="glass p-1 outline-none border rounded"
          />
          <label htmlFor="category" className="mt-3">
            Category :
          </label>
          <select
            required
            value={data.category}
            name="category"
            onChange={handleOnChange}
            id="category"
            className="glass outline-none p-1"
          >
            {productCategory.map((el, index) => {
              return (
                <option key={el.value + index} value={el.value}>
                  {el.label}
                </option>
              );
            })}
          </select>
          <label htmlFor="productImage" className="mt-3">
            Product Image :
          </label>
          <label htmlFor="uploadImage">
            <div className="p-2 glass min-h-48 w-full flex justify-center items-center cursor-pointer  bg-gray-200">
              {" "}
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2 ">
                {" "}
                <span className="text-5xl hover:text-empressOrange ">
                  <GiCloudUpload />
                </span>
                <p className="text-sm text-slate-500 capitalize ">
                  upload product images
                </p>
                <input
                  required
                  type="file"
                  id="uploadImage"
                  className="invisible"
                  onChange={handleUploadProduct}
                />
              </div>{" "}
            </div>{" "}
          </label>
          <div>
            {data?.productImage[0] ? (
              <div className="flex gap-2">
                {data.productImage.map((el, index) => {
                  return (
                    <div className="relative group" key={index}>
                      <img
                        key={index}
                        alt={el}
                        src={el}
                        width={80}
                        height={80}
                        className=" bg-slate-100 border rounded cursor-pointer"
                        onClick={() => {
                          setOpenFullScreenImage(true);
                          setFullScreenImage(el);
                        }}
                      />
                      <div
                        onClick={() => {
                          handleDeleteProductImage(index);
                        }}
                        className="absolute cursor-pointer hidden group-hover:block right-0 bottom-0 text-empressOrange p-1 hover:text-empressOrangeHover hover:scale-110 rounded-full"
                      >
                        <IoTrashBinSharp />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-red-600 text-xs">
                * Please upload product image
              </p>
            )}
          </div>
          <label htmlFor="price" className="mt-3">
            Price :
          </label>
          <input
            required
            type="number"
            id="price"
            name="price"
            placeholder="enter price.."
            value={data.price}
            onChange={handleOnChange}
            className="glass p-1 outline-none border rounded"
          />
          <label htmlFor="sellingPrice" className="mt-3">
            Selling Price :
          </label>
          <input
            required
            type="number"
            id="sellingPrice"
            name="sellingPrice"
            placeholder="enter selling price.."
            value={data.sellingPrice}
            onChange={handleOnChange}
            className="glass p-1 outline-none border rounded"
          />
          <label htmlFor="description" className="mt-3">
            Description :
          </label>
          <textarea
            id="description"
            className="h-28 glass outline-none border resize-none p-1"
            placeholder="description of product.."
            rows={3}
            onChange={handleOnChange}
            name="description"
            value={data.description}
          ></textarea>
          <button
            type="submit"
            className="btn px-3 py-2 mb-10 hover:bg-empressOrangeHover"
            onClick={handleSubmit}
          >
            Update Product
          </button>{" "}
        </form>
      </div>
      {/* display image full screen  */}
      {openFullScreenImage && (
        <DisplayImage
          onClose={() => setOpenFullScreenImage(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
};
export default AdminProductEdit;
