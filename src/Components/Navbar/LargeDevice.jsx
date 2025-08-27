import React from "react";
import { FaDownload } from "react-icons/fa";

const LargeDevice = () => {
  return (
    <div
      className={`lg:flex *:px-3 gap-4 transition-all duration-500 ease-in-out font-bold hidden items-center text-white`}
    >
      <ul className="flex gap-8">
        <li className="hover:text-primary">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-primary">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-primary">
          <a href="#education">Education</a>
        </li>

        <li className="hover:text-primary">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-primary">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-primary">
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <a
        href="https://drive.google.com/file/d/1L-R_ksEAxTKKe-oNtp9MLtd8iSFhb2ga/view?usp=drive_link"
        target="blank"
        className="bg-primary px-4 py-2 rounded-xs hover:bg-[#4c8626] cursor-pointer flex items-center gap-1"
      >
        Resume
        <FaDownload size={14} />
      </a>
    </div>
  );
};

export default LargeDevice;
