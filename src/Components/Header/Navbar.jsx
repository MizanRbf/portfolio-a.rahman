import React, { useState } from "react";
import { NavLink } from "react-router";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const handleMenuBar = () => {
    setMenuBar(!menuBar);
  };
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );

  return (
    <div className="flex justify-between items-center py-4 bg-blue-100 border border-x-0 border-t-0 border-b-blue-300 px-4 md:px-10 relative">
      {/* Responsive MenuBar */}

      <div
        className={`flex flex-col absolute top-20 border rounded-sm bg-blue-500 text-white py-3 text-lg font-semibold ${
          menuBar ? "block" : "hidden"
        }`}
      >
        <NavLink
          onClick={handleMenuBar}
          className="hover:bg-blue-100 hover:text-blue-500 px-3"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={handleMenuBar}
          className="hover:bg-blue-100 hover:text-blue-500 px-3"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={handleMenuBar}
          className="hover:bg-blue-100 hover:text-blue-500 px-3"
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
          {menuBar ? <RxCross1 size={25} /> : <MdMenu size={25} />}
        </div>

        {/* Name */}

        <h2 className="text-base md:text-2xl font-bold text-blue-500">
          MD Abdur Rahman
        </h2>
      </div>
      <div className="hidden md:flex gap-6">{links}</div>

      {/* Button */}
      <div>
        <button className="font-semibold text-xs md:text-lg border px-4 md:px-6 py-1 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-500 md:py-2 rounded-md md:rounded-lg bg-blue-500 text-white cursor-pointer">
          Button
        </button>
      </div>
    </div>
  );
};

export default Navbar;
