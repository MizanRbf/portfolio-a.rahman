import React, { useEffect, useState } from "react";
import LargeDevice from "../../Components/Navbar/LargeDevice";
import ResponsiveIcon from "../../Components/Navbar/ResponsiveIcon";
import SmallDevice from "../../Components/Navbar/SmallDevice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` text-black bg-[#012741] fixed right-0 top-0 left-0 z-999 transform transition-all duration-300 ease-in-out ${
        isScrolled
          ? "py-3 shadow-xl"
          : "py-4 border border-t-0 border-x-0 border-primary"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1500px] mx-auto px-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center">
            <img className="w-14" src="/assets/logo.png" alt="" />
            <p className="text-4xl font-bold text-primary">
              A<span className="text-white">.</span>
              Rahman
            </p>
          </div>
        </div>

        {/* Menubar for Large Device */}
        <LargeDevice></LargeDevice>

        {/* Responsive Icon */}
        <ResponsiveIcon setOpen={setOpen} open={open}></ResponsiveIcon>
        {/* Menubar for Small Device */}
        <SmallDevice setOpen={setOpen} open={open}></SmallDevice>
      </div>
    </div>
  );
};

export default Navbar;
