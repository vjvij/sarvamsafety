import React from 'react'
import HomePage from "./pages/Home/home.page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Router, Routes } from 'react-router-dom';
import Aboutpage from './pages/about/about';
import LgNavbar from "./components/Navbar/navbar";
const App = () => {
  return (
    <>
      <div>
        <LgNavbar />
        <div className="relative top-36">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<Aboutpage />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App