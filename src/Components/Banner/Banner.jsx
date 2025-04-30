import React from "react";
import { MdWavingHand } from "react-icons/md";
const Banner = () => {
  return (
    <div className="mt-[59px] md:mt-0 rounded-lg  mx-4 md:mx-0 px-4 pt-2 relative z-1">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-200 to-transparent rounded-lg"></div>

      {/* Content */}
      <div className="text-center mb-10">
        {/* Title */}
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            I'm <span className="text-blue-600">A.Rahman</span>
          </h1>
          <MdWavingHand size={30} className="text-blue-600" />
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
