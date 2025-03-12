import Logo from "./Logo";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import InputSearch from "./Header/InputSearch";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { summaryApi } from "../common";
import { setUserDetails } from "../store/userSlice";
import { useState } from "react";
import { ROLE } from "../common/role";
const Header = () => {
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);

  const user = useSelector((state) => {
    return state?.user?.user;
  });
  const handleLogout = async () => {
    const fetchData = await fetch(summaryApi.logout_user.url, {
      method: summaryApi.logout_user.method,
      credentials: "include", //token will be checked in backend
    });
    const data = await fetchData.json();
    if (data.success) {
      dispatch(setUserDetails(null));
      toast(data.message);
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <header className="h-16 shadow-md shadow-neutral-950  p-10 font-sora">
      <div className="h-full container mx-auto flex items-center px-4 justify-between ">
        {/* Logo */}
        <div>
          <Link to="/">
            <Logo w={250} h={60} />
          </Link>
        </div>
        {/* Search and User */}
        <div className="flex items-center justify-between space-x-12">
          <div className=" hidden md:flex items-center w-full justify-between max-w-sm  border-b-2 rounded-full border-gray-300 border-opacity-20 ">
            <InputSearch />
          </div>
          <div className="flex items-center gap-4">
            {/* User */}
            <div className="relative group flex justify-center ">
              {user?._id && (
                <div
                  className="text-xl cursor-pointer "
                  onClick={() => {
                    setMenuDisplay((prev) => !prev);
                  }}
                  onMouseEnter={() => {
                    setMenuDisplay(() => true);
                  }}
                >
                  {user?.profilePic ? (
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={user?.profilePic}
                        alt={user?.name || "user image"}
                      />
                    </div>
                  ) : (
                    <FaRegUser />
                  )}
                </div>
              )}

              {menuDisplay && (
                <div
                  onMouseLeave={() => {
                    setMenuDisplay((prev) => false);
                  }}
                  className="absolute bottom-0 hover:text-gray-600 z-50 top-12  h-fit rounded p-2 bg-white font-semibold border transition-all text-black "
                >
                  <nav>
                    {user?.role === ROLE.ADMIN && (
                      <Link
                        to={"/admin-panel/all-products"}
                        className="whitespace-nowrap hidden md:block "
                        onClick={() => {
                          setMenuDisplay((prev) => !prev);
                        }}
                      >
                        Admin panel
                      </Link>
                    )}
                  </nav>
                </div>
              )}
            </div>
            {/* Cart */}
            <div className="text-xl  relative">
              <span>
                <LuShoppingCart />
              </span>
              <div className="bg-empressOrange w-4 h-4 p-1 flex items-center justify-center rounded-full absolute -top-2 -right-3 hover:bg-empressOrangeHover">
                <p className="text-xs">0</p>
              </div>
            </div>
          </div>
          <div>
            {user?._id ? (
              <Link
                to="/"
                className="px-3 h-8 rounded-full py-1 bg-empressOrange hover:bg-empressOrangeHover"
                onClick={handleLogout}
              >
                logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-3 h-8 rounded-full py-1 bg-empressOrange hover:bg-empressOrangeHover"
              >
                login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
