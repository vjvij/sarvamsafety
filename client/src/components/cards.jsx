import React from "react";
import { MdLocalShipping, MdSupportAgent } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";
import { FaMoneyCheckAlt } from "react-icons/fa";
const Cards = () => {
  const card = [
    {
      name: "SHIPPING WORLDWIDE",
      icon: <MdLocalShipping />,
    },
    {
      name: "MONEY BACK GUARANTEE",
      icon: <HiCurrencyDollar />,
    },
    {
      name: "LOWEST PRICE GURANTEE",
      icon: <FaMoneyCheckAlt />,
    },
    {
      name: "ONLINE SUPPORT 8/6",
      icon: <MdSupportAgent />,
    },
  ];
  return (
    <div className="flex items-center justify-center gap-5 my-10">
      {card.map((item) => (
        <div className="flex items-center justify-center gap-5 text-lg bg-gray-50 px-7 py-4 border border-gray-200 text-gray-400 shadow-lg rounded-lg hover:bg-gray-300 hover:text-gray-50">
          <span className="text-5xl text-gray-900">{item.icon}</span>
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Cards;
