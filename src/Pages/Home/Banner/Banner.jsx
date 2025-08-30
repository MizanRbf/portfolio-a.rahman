import React from "react";
import { MdWavingHand } from "react-icons/md";
const Banner = () => {
  return (
    <div className="mt-18 pt-10 relative z-1 bg-gradient-to-b from-[#092d55] to-[#000000]">
      {/* Gradient */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="text-center mb-10">
        <span className="bg-white  px-3 rounded-xs ">Assalamu Alaikum !</span>
        {/* Title */}
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            I'm <span className="text-primary">A.Rahman</span>
          </h1>
          <MdWavingHand size={30} className="text-white" />
        </div>
        <p className="text-xl md:text-2xl font-semibold mt-4 text-white">
          A Brand & Marketing Specialist
        </p>
      </div>
      {/* Banner Image */}
      <div className="flex justify-center">
        <img className="w-[500px] relative" src="/assets/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
