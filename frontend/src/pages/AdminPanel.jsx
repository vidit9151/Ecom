import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROLE } from "../common/role";

const AdminPanel = () => {
  const user = useSelector((state) => {
    return state?.user?.user;
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="min-h-[calc(100vh)] md:flex  hidden paperEffect text-black ">
      <aside className="blackGlass  min-h-full w-full max-w-52 ">
        <div className="  flex  flex-col  ">
          <div className="text-5xl  flex justify-center  items-center h-32 flex-col my-4 ">
            {user?.profilePic ? (
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src={user?.profilePic} alt={user?.name || "user image"} />
              </div>
            ) : (
              <FaRegUser />
            )}
            <p className="capitalize text-xl font-semibold   "> {user?.name}</p>
            <p className="text-[10px]">{user?.role}</p>
          </div>

          {/*navigation */}
          <div>
            <nav className="grid p-4">
              <Link
                to={"all-users"}
                className="px-2  py-1 hover:bg-black rounded hover:bg-opacity-25 font-bold"
              >
                All Users
              </Link>
              <Link
                to={"all-products"}
                className="px-2 py-1 hover:bg-black rounded hover:bg-opacity-25 font-bold "
              >
                All Products
              </Link>
              <Link
                to={"all-featured-products"}
                className="px-2 py-1 hover:bg-black rounded hover:bg-opacity-25 font-bold "
              >
                Featured Builds
              </Link>
            </nav>
          </div>
        </div>
      </aside>
      <main className="w-full h-full p-4">
        <Outlet />
      </main>
    </div>
  );
};
export default AdminPanel;
