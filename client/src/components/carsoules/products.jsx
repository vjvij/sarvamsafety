import React from "react";
import Slider from "react-slick";
import { MdShoppingCart, MdOutlineFavorite } from "react-icons/md";

const Products = (props) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  const carouselImages = [
    {
      name: "EYE PROTECTIONS",
      image: "https://sarvamsafety.com/image/cache/catalog/tusker-270x270.jpeg",
      price: "11.50",
    },
    {
      name: "HAND PROTECTIONS",
      image:
        "https://sarvamsafety.com/image/cache/catalog/category/hand%20protection-262x230.png",
      price: "11.50",
    },
    {
      name: "LEG PROTECTIONS",
      image:
        "https://sarvamsafety.com/image/cache/catalog/32%20Gloves%20Cotton%20Knitted%2090%20gms%20-%207%20Gauge%20-%20Blue-270x270.jpg",
      price: "11.50",
    },
    {
      name: "FIRE PROTECTIONS",
      image:
        "https://sarvamsafety.com/image/cache/catalog/products/IMG-20200428-WA0012-150x150.jpg",
      price: "11.50",
    },
    {
      name: "EAR PROTECTION",
      image:
        "https://sarvamsafety.com/image/cache/catalog/category/ear%20protection-262x230.png",
      price: "11.50",
    },
  ];

  return (
    <div className="">
      <h3 className="text-2xl font-bold text-gray-700 mb-5">{props.name}</h3>
      <Slider {...settings}>
        {carouselImages.map((item) => (
          <div>
            <div className="w-80 flex flex-col items-center justify-center gap-8 shadow-xl rounded-lg hover:bg-gray-100">
              <div className="w-full h-72 border border-gray-200 rounded-t-lg">
                <img src={`${item.image}`} alt="" className="w-full h-full" />
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-3 px-3">
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>
                <div className="w-full flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-4">
                  <h4 className="text-xl font-bold">₹ {item.price}</h4>
                  <span className="flex items-center gap-6">
                    <MdShoppingCart className="text-2xl text-blue-900" />
                    <MdOutlineFavorite className="text-2xl text-rose-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Products;
