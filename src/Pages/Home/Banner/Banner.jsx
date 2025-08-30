import React from "react";
import { MdWavingHand } from "react-icons/md";
const Banner = () => {
  return (
    <div className="mt-25 pt-2 relative z-1">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-200 to-transparent"></div>

      {/* Content */}
      <div className="text-center mb-10">
        <span className="bg-blue-500 text-white px-3 rounded-xs">
          Assalamu Alaikum !
        </span>
        {/* Title */}
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            I'm <span className="text-[#023ca8]">A.Rahman</span>
          </h1>
          <MdWavingHand size={30} className="text-[#023ca8]" />
        </div>
        <p className="text-xl md:text-2xl font-semibold mt-4">
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
