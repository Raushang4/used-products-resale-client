import React from "react";
import banner3 from "../../../../images/banner-3.jpg";
import banner4 from "../../../../images/banner-4.jpg";
import banner5 from "../../../../images/banner-5.jpg";

const DiscountProducts = () => {
  return (
    <div className="w-9/12 mt-[10%] mx-auto">
      <h1 className="font-bold text-3xl uppercase text-center mt-[10%] mb-8">
        Our <span className="text-blue-500">Discount</span> Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img
          src={banner3}
          className="transition duration-300 transform hover:scale-105"
          alt=""
        />
        <img
          src={banner4}
          className="transition duration-300 transform hover:scale-105"
          alt=""
        />
        <img
          src={banner5}
          className="transition duration-300 transform hover:scale-105"
          alt=""
        />
      </div>
    </div>
  );
};

export default DiscountProducts;
