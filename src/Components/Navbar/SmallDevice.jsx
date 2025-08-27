import React from "react";

const SmallDevice = ({ setOpen }) => {
  return (
    <nav
      className={`top-18 lg:hidden right-0 left-0 absolute py-6 shadow bg-[rgba(0,0,0,0.81)]  text-lg font-bold text-white transform transition-all ease-in-out duration-300 z-50 ${
        open
          ? "opacity-100 translate-y-2 visible"
          : "opacity-0 -translate-y-5 invisible"
      }`}
    >
      <ul className="px-10 *:hover:bg-white *:hover:text-black  *:hover:duration-300 space-y-2">
        <li>
          <a
            href="#home"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">Home</button>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">About</button>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">Skills</button>
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">Education</button>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">Projects</button>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="w-full text-left cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <button className="w-full text-left">Contact Me</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SmallDevice;
