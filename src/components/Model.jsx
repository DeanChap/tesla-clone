// Model.js
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Model = ({ title, description, leftBtn, rightBtn }) => {
  return (
    <div 
      className="relative flex flex-col justify-between items-center h-screen bg-cover bg-center 
      bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg')] 
      lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg')]" 
    >
      <div className="absolute inset-x-0 top-[15%] text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="p-2 text-sm">{description}</p>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
        {leftBtn && (
          <a href="https://www.tesla.com/en_CA/inventory/new/my">
            <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2">
              {leftBtn}
            </button>
          </a>
        )}
        {rightBtn && (
          <a href="https://www.tesla.com/en_ca/drive">
            <button className="bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
              {rightBtn}
            </button>
          </a>
        )}
      </div>

      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown className="text-white" />
      </div>
    </div>
  );
};

export default Model;
