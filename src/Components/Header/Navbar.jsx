import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );

  return (
    <div className="flex justify-between items-center py-6 bg-amber-50 border border-x-0 border-t-0 border-b-amber-200 px-20">
      <div>
        <h2 className="text-2xl font-bold text-amber-500">A.Rahman</h2>
      </div>
      <div className="hidden md:flex gap-6">{links}</div>
      <div>
        <button className="border px-6 py-2 rounded-lg font-semibold bg-amber-500 text-white">
          Button
        </button>
      </div>
    </div>
  );
};

export default Navbar;
