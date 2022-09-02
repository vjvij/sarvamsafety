import React from "react";
import Cards from "../../components/cards";
import CarouselComponent from "../../components/carsoules/carsoul.component";
import Products from "../../components/carsoules/products";
import TopCollections from "../../components/carsoules/topCollections";
import LgNavbar from "../../components/Navbar/navbar";
import Aboutpage from "../about/about";

const HomePage = () => {
  return (
    <div className="relative">
      <LgNavbar />
      <CarouselComponent />
      <div className="px-20 flex flex-col gap-20">
        <Cards />
        <TopCollections />
        <Products name={"Leg Protection"} />
        <Products name="Hand Protection" />
        <Products name="New Arrivals" />
      </div>
    </div>
  );
};

export default HomePage;
