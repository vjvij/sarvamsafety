import React from "react";
import Slider from "react-slick";

const TopCollections = () => {
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
      image:
        "https://sarvamsafety.com/image/cache/catalog/category/EYE%20PROTECT-262x230.png",
    },
    {
      name: "HAND PROTECTIONS",
      image:
        "https://sarvamsafety.com/image/cache/catalog/category/hand%20protection-262x230.png",
    },
    {
      name: "LEG PROTECTIONS",
      image:
        "https://sarvamsafety.com/image/cache/catalog/category/leg%20protection-262x230.png",
    },
    {
      name: "FIRE PROTECTIONS",
      image:
        "https://sarvamsafety.com/image/cache/catalog/category/fire%20protection%201-262x230.png",
    },
    {
      name: "EAR PROTECTION",
      image:
        "https://sarvamsafety.com/image/cache/catalog/category/ear%20protection-262x230.png",
    },
  ];

  return (
    <div className="">
      <h3 className="text-xl font-bold text-gray-500 mb-5">TOP COLLECTION</h3>
      <Slider {...settings}>
        {carouselImages.map((item) => (
          <div>
            <div className="w-80 flex flex-col items-center justify-center shadow-xl border border-gray-200">
              <div className="w-full h-72 border-b border-gray-200">
                <img src={`${item.image}`} alt="" className="w-full h-full" />
              </div>
              <h4 className="w-full h-full text-center text-lg font-semibold text-gray-400 py-4 hover:bg-green-700 hover:text-gray-50">
                {item.name}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default TopCollections;
