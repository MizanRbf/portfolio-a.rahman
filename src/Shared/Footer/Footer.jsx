import React from "react";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-100 py-10 border border-x-0 border-b-0 border-t-blue-300">
      <div className="flex-col md:flex-row  md:justify-between px-4 md:px-10 space-y-4">
        {/* Name */}
        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold text-[#023ca8] text-center">
            MD Abdur Rahman
          </h1>
        </div>
        {/* Social Icons */}
        <div className="flex gap-3 text-2xl md:text-4xl justify-center">
          <a className="hover:text-[#023ca8]" href="https://www.facebook.com/">
            <FaFacebook />
          </a>

          <a className="hover:text-[#023ca8]" href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>

          <a className="hover:text-[#023ca8]" href="https://x.com/">
            <FaXTwitter />
          </a>

          <a className="hover:text-[#023ca8]" href="https://www.whatsapp.com/">
            <FaWhatsappSquare />
          </a>

          <a className="hover:text-[#023ca8]" href="https://www.instagram.com/">
            <FaInstagramSquare />
          </a>
        </div>
        <hr className="border-dashed text-blue-300" />

        {/* Copy Right */}
        <div class="text-center text-sm">
          &copy; 2025 <span class="font-semibold">MD Abdur Rahman</span>. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
