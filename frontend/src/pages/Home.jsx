import BannerProduct from "../components/BannerProduct";
import CategoryList from "../components/CategoryList";
import HorizontalCardProduct from "../components/HorizontalCardProduct";

const Home = () => {
  return (
    <div className="text-[#444444] ">
      <BannerProduct />
      <div className=" ">
        <CategoryList />{" "}
        <HorizontalCardProduct
          category={"prebuildpc"}
          heading={"Featured Builds"}
        />
      </div>
    </div>
  );
};
export default Home;
