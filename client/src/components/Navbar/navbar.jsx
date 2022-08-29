import React from "react";
import { RiSearchLine } from "react-icons/ri";

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
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex items-end justify-between gap-10 px-12 pb-4">
          <div className="flex items-end gap-5 w-full">
            <img
              src="https://sarvamsafety.com/image/catalog/logo1.png"
              alt=""
              className="w-96 h-20"
            />
            <div className="flex items-center gap-2 w-5/12 border border-gray-200 h-10 bg-gray-50 rounded-sm shadow-md">
              <input type="text" className=" w-full h-8" />
              <span className="bg-yellow-400 p-2.5">
                <RiSearchLine className="font-bold text-xl" />
              </span>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-green-600 rounded-sm text-gray-50 font-semibold">
              Login
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-12 bg-green-500 py-2 font-bold text-gray-50">
          <div className="flex items-center justify-center gap-5 list-none">
            {navItems.map((item) => (
              <li>{item.name}</li>
            ))}
          </div>
          <div className="flex items-center justify-center gap-5 list-none">
            {navItems.map((item) => (
              <li>{item.name}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LgNavbar;
