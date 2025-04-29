import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
  return (
    <div className="bg-amber-50 py-20 border border-x-0 border-b-0 border-t-amber-200">
      <div className="flex justify-between px-20">
        <div>
          <h1 className="text-2xl font-bold">A.Rahman</h1>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Links</span>
          {links}
        </div>
        <div>
          <button className="font-bold text-lg border px-6 py-2 rounded-lg bg-amber-500 text-white">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
