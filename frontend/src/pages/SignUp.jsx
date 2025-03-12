import { useState } from "react";
import userIcon from "../assets/userIcon.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { imageToBase64 } from "../helper/ImageToBase64";

import { toast } from "react-toastify";
import { summaryApi } from "../common";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0]; //get first file
    const imagePic = await imageToBase64(file);
    setData((prev) => {
      return { ...prev, profilePic: imagePic };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(summaryApi.signUp.url, {
        method: summaryApi.signUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();
      if (dataApi.success) {
        toast(dataApi.message);
        navigate("/login");
      }
      if (!dataApi.success) {
        toast.error(dataApi.message);
      }
      console.log(dataApi);
    } else {
      toast.error("please check password and confirm password");
    }
  };

  return (
    <section id="signup">
      <div className="container  mx-auto p-4 purp  text-white">
        <div
          className="bg-black p-5 w-full max-w-md mx-auto rounded-lg  glass
     "
        >
          <div className="w-20 h-20 mx-auto  relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || userIcon} alt="user icon" />
            </div>
            <form>
              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
                <div className="text-sm  bg-gray-800 text-center rounded-md w-full py-1 absolute bottom-0  glass hover:text-white hover:opacity-80 cursor-pointer">
                  Upload photo <br />
                </div>
              </label>
            </form>
          </div>

          <form
            className="pt-6 pb-8 flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className="grid">
              {" "}
              <label className="px-3 ">Name : </label>
              <div className="bg-gray-100 p-2 text-black rounded-full">
                {" "}
                <input
                  required
                  type="text"
                  placeholder="fullname..."
                  className="h-full w-full outline-none bg-transparent border-none rounded-md"
                  onChange={handleOnChange}
                  name="name"
                  value={data.name}
                />
              </div>
            </div>
            <div className="grid">
              {" "}
              <label className="px-3 ">Email : </label>
              <div className="bg-gray-100 p-2 text-black rounded-full">
                {" "}
                <input
                  required
                  type="email"
                  placeholder="email address..."
                  className="h-full w-full outline-none bg-transparent border-none rounded-md"
                  onChange={handleOnChange}
                  name="email"
                  value={data.email}
                />
              </div>
            </div>
            <div>
              {" "}
              <label className="px-3 mt-2">Password : </label>
              <div className="bg-gray-100 p-2 text-black  flex rounded-full ">
                {" "}
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="password..."
                  className="h-full w-full outline-none bg-transparent border-none rounded-md"
                  onChange={handleOnChange}
                  name="password"
                  value={data.password}
                />{" "}
                <div className="cursor-pointer text-xl">
                  <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <MdOutlineRemoveRedEye /> : <LuEyeClosed />}
                  </span>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <label className="px-3 mt-2">Confirm Password : </label>
              <div className="bg-gray-100 p-2 text-black  flex rounded-full ">
                {" "}
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="confirm password..."
                  className="h-full w-full outline-none bg-transparent border-none rounded-md"
                  onChange={handleOnChange}
                  name="confirmPassword"
                  value={data.confirmPassword}
                />{" "}
                <div className="cursor-pointer text-xl">
                  <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? (
                      <MdOutlineRemoveRedEye />
                    ) : (
                      <LuEyeClosed />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <button className=" bg-empressOrange w-full px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6 hover:bg-empressOrangeHover">
              Sign-up
            </button>
          </form>

          <p className="my-4 text-gray-500 hover:text-empressOrangeHover text-center hover:underline">
            <Link to={"/login"}> Already have an account? login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
