import React from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";
const Root = () => {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto m">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-265px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
