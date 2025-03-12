import { useEffect, useState } from "react";
import { Card } from "antd";
import Slider from "react-slick";
import fetchCategoryWiseProduct from "../helper/fetchCategoryWiseProduct";
import { GrFormNext } from "react-icons/gr";

import { GrFormPrevious } from "react-icons/gr";
import { summaryApi } from "../common";
const HorizontalCardProduct = ({ category, heading }) => {
  const { Meta } = Card;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingList = new Array(18).fill(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    lazyLoad: true,
    nextArrow: <GrFormNext />,
    prevArrow: <GrFormPrevious />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetch(summaryApi.allFeaturedProduct.url).then(
      (res) => {
        return res.json();
      }
    );
    console.log(categoryProduct);

    setLoading(false);
    setData(categoryProduct?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mx-auto lg:px-20 md:px-20  px-6 max-w-[100vw]   my-20 ">
      <h6 className="text-[#444444] md:text-[48px] text-4xl font-bold  text-center mb-12">
        {heading}
      </h6>

      <div className="slider-container">
        <Slider {...settings}>
          {data.map((product, index) => {
            return (
              <div>
                <a href={product.url} target="_blank">
                  <Card
                    key={"sdsdspre pres" + index}
                    className="min-w-[85vw] max-w-[85vw] md:min-w-[320px] md:max-w-[320px] rounded-lg overflow-hidden shadow-lg"
                    cover={
                      <img
                        alt="example"
                        src={product.productImage[0]}
                        className=" hover:scale-105 transition-all"
                      />
                    }
                  >
                    <Meta
                      title={product?.productName}
                      description="This is the description"
                    />
                  </Card>
                </a>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default HorizontalCardProduct;
