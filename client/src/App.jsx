import React from 'react'
import HomePage from "./pages/Home/home.page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Router, Routes } from 'react-router-dom';
import Aboutpage from './pages/about/about';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
      </Routes>
    </>
  );
}

export default App