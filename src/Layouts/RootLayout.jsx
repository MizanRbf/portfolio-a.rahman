import React from "react";
import HomePage from "../Pages/Home/HomePage";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router";
import Banner from "../Pages/Home/Banner/Banner";

const RootLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
