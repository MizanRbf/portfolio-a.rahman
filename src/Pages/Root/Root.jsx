import React from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[calc(100vh-350px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
