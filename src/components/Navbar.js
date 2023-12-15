import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center px-12 p-4 text-sm font-bold">

      {/* Logo */}

      <div>
        <a href="https://tesla.com">
          <img
            className="h-3 filter brightness-0 invert cursor-pointer"
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            alt="Tesla logo"
          />
        </a>
      </div>

      {/* Desktop navigation */}

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 text-white hover:text-black hover:rounded hover:bg-black/5 hover:brightness-0 transition duration-10000 ease-in-out">
            <a href="https://www.tesla.com/en_ca/models">Model S</a>
          </li>
          <li className="py-1 px-3 text-white hover:text-black hover:rounded hover:bg-black/5 hover:brightness-0 transition duration-10000 ease-in-out">
            <a href="https://www.tesla.com/en_ca/model3">Model 3</a>
          </li>
          <li className="py-1 px-3 text-white hover:text-black hover:rounded hover:bg-black/5 hover:brightness-0 transition duration-10000 ease-in-out">
            <a href="https://www.tesla.com/en_ca/modelx">Model X</a>
          </li>
          <li className="py-1 px-3 text-white hover:text-black hover:rounded hover:bg-black/5 hover:brightness-0 transition duration-10000 ease-in-out">
            <a href="https://www.tesla.com/en_ca/modely">Model Y</a>
          </li>
          <li className="py-1 px-3 text-white hover:text-black hover:rounded hover:bg-black/5 hover:brightness-0 transition duration-10000 ease-in-out">
            <a href="https://www.tesla.com/en_ca/energy">Solar</a>
          </li>
          <li className="py-1 px-3 text-white hover:text-black hover:rounded hover:bg-black/5 hover:brightness-0 transition duration-10000 ease-in-out">
            <a href="https://www.tesla.com/en_ca/powerwall">Powerwall</a>
          </li>
        </ul>
      </div>

      {/* Mobile navigation button */}

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 text-white hover:rounded hover:bg-black/5 transition duration-300 ease-in-out">
            Shop
          </li>
          <li className="py-1 px-3 text-white hover:rounded hover:bg-black/5 transition duration-300 ease-in-out">
            Account
          </li>
          <li
            onClick={handleNav}
            className="py-1 px-3 text-white hover:rounded hover:bg-black/5 transition duration-300 ease-in-out"
          >
            Menu
          </li>
        </ul>
      </div>

      {/* Mobile menu button */}

      <div className="lg:hidden text-white">
        <button
          onClick={handleNav}
          className="inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10 transition duration-300 ease-in-out"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}

      <div
        className={
          nav
            ? "bg-white fixed top-0 right-0 w-80 h-full z-10"
            : "fixed right-[100%]"
        }
      >
        <div className="flex justify-end pr-8 pt-8">
          <TfiClose
            onClick={handleNav}
            className="rounded p-1 hover:bg-black/5 cursor-pointer"
            size={24}
          />
        </div>

        <ul className="pt-8 px-6 cursor-pointer transition ease-in-out duration-100">
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/en_ca/models">Model S</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/en_ca/model3">Model 3</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/en_ca/modelx">Model X</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/en_ca/modely">Model Y</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/en_ca/energy">Solar and Powerwall</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/en_CA/inventory/new/my">
              Existing invetory
            </a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/en_ca/powerwall">Powerwall</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/en_ca/drive">Demo Drive</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
