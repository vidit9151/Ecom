import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { summaryApi } from "./common";
import { Context } from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(summaryApi.current_user.url, {
      method: summaryApi.current_user.method,
      credentials: "include", //if we dont include credential it wont send stored cookie
    });
    const dataApi = await dataResponse.json();
    if (dataApi.success) {
      dispatch(setUserDetails(dataApi?.data));
    }
  };
  useEffect(() => {
    //user details
    fetchUserDetails();
  }, []);
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Context.Provider value={{ fetchUserDetails /*user details fething*/ }}>
        <ToastContainer autoClose={1500} theme="dark" />

        <Header />
        <main className="bg-[#f9f9f9] min-h-[calc(100vh-100px)] text-black font-sora">
          <Outlet />
        </main>

        <Footer />
      </Context.Provider>
    </div>
  );
};
export default App;
