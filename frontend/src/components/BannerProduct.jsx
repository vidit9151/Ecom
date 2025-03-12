import banner1 from "../assets/banner1.png";
import banner2 from "../assets/Deal-Of-the-Day-300x130.png";
import bannermob from "../assets/bannermob.png";
import bannermob1 from "../assets/bannermob1.png";
import { Carousel } from "antd";

const BannerProduct = () => {
  const contentStyle = {
    color: "#000000",
    lineHeight: "160px",
    textAlign: "center",
  };
  const desktopImages = [banner1, banner2, banner1];
  const mobImages = [bannermob, bannermob1];
  return (
    <div className="overflow-hidden rounded-b-xl">
      {" "}
      <div className="hidden md:block">
        <Carousel arrows infinite={true} pauseOnFocus={true} autoplay>
          {desktopImages.map((el, index) => {
            return (
              <div key={"dskds" + index}>
                <img
                  className="object-fill h-full w-full  "
                  style={contentStyle}
                  src={el}
                  alt={"banner"}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* mob */}
      <div className=" md:hidden">
        <Carousel arrows infinite={true} autoplay pauseOnHover={true}>
          {mobImages.map((el, index) => {
            return (
              <div key={"mskdds" + index}>
                <img
                  className="object-fill h-full w-full  "
                  style={contentStyle}
                  src={el}
                  alt={"banner"}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );

  // <div className=" w-full rounded-b-2xl overflow-hidden">
  //   <div className="h-[70vh] w-full  bg-black">
  //     <div className="w-full">
  //       <img src={banner1} alt="" />
  //     </div>
  //   </div>
  // </div>
};
export default BannerProduct;
