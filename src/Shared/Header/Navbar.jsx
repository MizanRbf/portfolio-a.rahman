import React, { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuBar, setMenuBar] = useState(false);
  const handleMenuBar = () => {
    setMenuBar(!menuBar);
  };
  const links = (
    <>
      <NavLink className="hover:underline" to="/">
        Home
      </NavLink>
      <NavLink className="hover:underline" to="/about">
        About
      </NavLink>
      <NavLink className="hover:underline" to="/contact">
        Contact
      </NavLink>
    </>
  );

  return (
    <div className=" fixed top-0 right-0 left-0 md:mx-0  z-10 bg-[#001735]">
      <div className="flex justify-between items-center py-4  max-w-[1300px] mx-auto px-4">
        {!isHome && (
          <div className="absolute border-b border-blue-200 w-full top-[59px] md:top-[80px] left-0 right-0"></div>
        )}
        {/* Responsive MenuBar */}

        <div
          className={`z-10 flex flex-col absolute top-14.5 border rounded-sm bg-blue-500 text-white py-3 text-lg font-semibold ${
            menuBar ? "block" : "hidden"
          }`}
        >
          <NavLink
            onClick={handleMenuBar}
            className="hover:bg-blue-100 px-3 text-white"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={handleMenuBar}
            className="hover:bg-blue-100 px-3 text-white"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={handleMenuBar}
            className="hover:bg-blue-100 px-3 text-white"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        <div className="flex justify-center items-center gap-1">
          {/* Menu Icons */}

          <div
            onClick={handleMenuBar}
            className="md:hidden text-blue-500 cursor-pointer"
          >
            {menuBar ? <RxCross1 size={20} /> : <MdMenu size={22} />}
          </div>

          {/* Name */}

          <h2 className="text-base md:text-2xl font-bold text-[#023ca8]">
            MD Abdur Rahman
          </h2>
        </div>
        <div className="hidden md:flex gap-6 font-semibold text-white">
          {links}
        </div>

        {/* Button */}
        <div>
          <button className="font-semibold text-xs md:text-lg border px-4 md:px-6 py-1 hover:bg-blue-100 hover:border-blue-400 hover:text-[#012b7a] md:py-2 rounded-md md:rounded-lg bg-[#023ca8] text-white cursor-pointer">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
