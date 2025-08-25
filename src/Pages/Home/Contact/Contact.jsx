import React from "react";

const Contact = () => {
  return (
    <>
      {/* Title & description */}
      <div className="text-center mt-22 md:mt-14 px-4 md:px-0 mb-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 text-[#01687a]">
          Contact Me
        </h1>
        <p className="">
          consectetur adipisicing elit. Ut vitae eos aliquam quo voluptates
          magni! Amet, itaque minus! .
        </p>
      </div>

      {/* Name */}
      <div className="px-4 md:px-0 mb-10 md:mb-0">
        <div className="mb-3">
          <p className="font-semibold ">Your Name</p>
          <input
            className="border rounded-lg py-2 w-full pl-4  border-[#01687a]"
            type="text"
            name="name"
            placeholder="Write your name here.."
          />
        </div>
        {/* Email */}
        <div className="mb-3">
          <p className="font-semibold ">Your Email</p>
          <input
            className="border rounded-lg py-2 w-full pl-4  border-[#01687a]"
            type="email"
            name="email"
            placeholder="Write your email here.."
          />
        </div>
        {/* Text Area */}
        <div className="mb-3">
          <p className="font-semibold">Text Message</p>
          <textarea
            className="border rounded-lg pl-4 w-full h-30 bg-blue-100 border-blue-300"
            name="text"
            placeholder="Text here"
          ></textarea>
        </div>
        {/* Button */}
        <button className="border rounded-lg py-2 w-full bg-[#01687a] text-white font-semibold hover:bg-[#003a44] hover:border-blue-300  cursor-pointer mb-10">
          Send
        </button>
      </div>
    </>
  );
};

export default Contact;
