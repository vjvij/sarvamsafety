import React from "react";
import Slider from "react-slick";

const CarouselComponent = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carouselImages = [
    "https://sarvamsafety.com/image/cache/catalog/banner/Banner1-1170x500.jpg",
    "https://sarvamsafety.com/image/cache/catalog/banner/Banner1-1170x500.jpg",
    "https://sarvamsafety.com/image/cache/catalog/banner/Banner2-1170x500.jpg",
    "https://sarvamsafety.com/image/cache/catalog/banner/Banner4-1170x500.jpg",
    "",
  ];
  return (
    <div className="z-0">
      <Slider {...settings}>
        {carouselImages.map((image) => (
          <img
            src={`${image}`}
            alt=""
            className="w-full"
            style={{ height: "100px" }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
