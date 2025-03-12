import { useContext, useState } from "react";
import userIcon from "../assets/userIcon.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { summaryApi } from "../common";
import { toast } from "react-toastify";
import { Context } from "../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const { fetchUserDetails } = useContext(Context);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataResponse = await fetch(summaryApi.signIn.url, {
      method: summaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataApi = await dataResponse.json();
    if (dataApi.success) {
      toast(dataApi.message);
      navigate("/");
      fetchUserDetails();
    }
    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  return (
    <section id="login">
      <div className="container  mx-auto p-4 purp min-h-[calc(100vh-100px)]  text-white ">
        <div
          className="bg-black p-5 w-full max-w-md mx-auto rounded-lg shadow-md shadow-inner shadow-gray-800 glass 
         "
        >
          <div className="w-20 h-20 mx-auto ">
            <img src={userIcon} alt="user icon" />
          </div>

          <form
            className="pt-6 pb-8 flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className="grid">
              {" "}
              <label className="px-3 ">Email : </label>
              <div className="bg-gray-100 p-2 text-black rounded-full">
                {" "}
                <input
                  type="email"
                  placeholder="email address..."
                  className="h-full w-full outline-none bg-transparent border-none rounded-md"
                  onChange={handleOnChange}
                  name="email"
                  value={data.email}
                  required
                />
              </div>
            </div>
            <div>
              {" "}
              <label className="px-3 mt-2">Password : </label>
              <div className="bg-gray-100 p-2 text-black  flex rounded-full ">
                {" "}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password..."
                  className="h-full w-full outline-none bg-transparent border-none rounded-md"
                  onChange={handleOnChange}
                  name="password"
                  value={data.password}
                  required
                />{" "}
                <div className="cursor-pointer text-xl">
                  <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <MdOutlineRemoveRedEye /> : <LuEyeClosed />}
                  </span>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="w-fit ml-auto block hover:underline py-1 hover:text-empressOrangeHover pr-2"
              >
                forgot password ?
              </Link>
            </div>
            <button className=" bg-empressOrange w-full px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-6 hover:bg-empressOrangeHover">
              Login
            </button>
          </form>

          <p className="my-4 text-gray-500 hover:text-empressOrangeHover text-center hover:underline">
            <Link to={"/sign-up"}>Don't have account? sign-up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
