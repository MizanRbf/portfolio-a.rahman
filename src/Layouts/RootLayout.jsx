import React from "react";
import HomePage from "../Pages/Home/HomePage";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router";
import Banner from "../Pages/Home/Banner/Banner";

const RootLayout = () => {
  return (
    <div className="">
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="max-w-[1300px] mx-auto px-4">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
