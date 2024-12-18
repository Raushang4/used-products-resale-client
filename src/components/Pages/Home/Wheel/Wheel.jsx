import React from "react";
import './Wheel.css'
import wheel from "../../../../videos/car (1).mp4";
import logo from "../../../../images/logo.png"

const Wheel = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  bg-gray-200">
      <video autoPlay loop muted playsinline className="lg:w-1/2">
        <source src={wheel} type="video/mp4" />
      </video>
      <div className="lg:w-1/2 mt-5 md:mt-0 text-left lg:ml-[150px]">
        <img src={logo} className="mb-8" alt="" />
        <h3 className="quote text-xl lg:text-5xl font-semibold mb-10">
          Take your car and, share your <br /> joy with us
        </h3>
        <button class="btn bg-blue-500 hover:bg-blue-700 border-none animate-pulse">
          <span class="mr-2">Buy Cars</span>
        </button>
      </div>
    </div>
  );
};

export default Wheel;
