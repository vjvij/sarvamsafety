import React from "react";
import { RiSearchLine } from "react-icons/ri";
import Navbar from "./navbar1";






const LgNavbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    // {
    //   name: "About us",
    //   link: "/",
    // },
    // {
    //   name: "Products",
    //   link: "/",
    // },
    // {
    //   name: "Business Partners",
    //   link: "/",
    // },
    {
      name: "Training",
      link: "/",
    },
    {
      name: "Careers",
      link: "/",
    },
    {
      name: "Contact us",
      link: "/",
    },
    {
      name: "Videos",
      link: "/",
    },
  ];
  const navItems1 = [
    {
      name: "Wish List",
      link: "/",
    },
    {
      name: "Cart",
      link: "/",
    },
    {
      name: "Home",
      link: "/",
    },
  ];
  return (
    <>
    <Navbar/>
      <div className="fixed z-50 flex flex-col items-center justify-center w-full bg-gray-50">
        <div className="flex items-end justify-between w-full gap-10 px-12 pb-4">
          <div className="flex items-end w-full gap-5">
            <img
              src="https://sarvamsafety.com/image/catalog/logo1.png"
              alt=""
              className="h-20 w-96"
            />
            <div className="flex items-center w-5/12 h-10 gap-2 border border-gray-200 rounded-sm shadow-md bg-gray-50">
              <input type="text" className="w-full h-8 " />
              <span className="bg-yellow-400 p-2.5">
                <RiSearchLine className="text-xl font-bold" />
              </span>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 font-semibold bg-green-600 rounded-sm text-gray-50">
              Login
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-12 py-2 font-bold bg-green-500 text-gray-50">
          <div className="flex items-center justify-center gap-5 list-none">
            {navItems.map((item) => (
              <li>{item.name}</li>
            ))}
          </div>
          <div className="flex items-center justify-center gap-5 list-none">
            {navItems1.map((item) => (
              <li>{item.name}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LgNavbar;