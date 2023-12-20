import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

const Model = ({ title, description, leftBtn, rightBtn, bgImage }) => {
  const [snapped, setSnapped] = useState(false);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const snapThreshold = 100;

      if (!snapped && scrollPosition >= snapThreshold) {
        setSnapped(true);
        // Update the background image URL dynamically
        // setBgImage("new-image-url-after-scroll.jpg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [snapped]);

  return (
    <div
      ref={headerRef}
      className={`relative flex flex-col justify-between items-center h-screen bg-cover bg-center snap-start snap-always shrink-0`}
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : null,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="absolute inset-x-0 top-[15%] text-center" ref={titleRef}>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="p-2 text-sm">{description}</p>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]" ref={buttonRef}>
        {leftBtn && (
          <a href="https://www.tesla.com/en_CA/inventory/new/my">
            <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2">
              {leftBtn}
            </button>
          </a>
        )}
        {rightBtn && (
          <a href="https://www.tesla.com/en_ca/drive">
            <button className="bg-[#171a20]/90 rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
              {rightBtn}
            </button>
          </a>
        )}
      </div>

      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown />
      </div>
    </div>
  );
};

export default Model;
