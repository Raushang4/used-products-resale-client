import React from "react";
import "./TopTrendingProducts.css";

const TopTrendingProducts = () => {
  const products = [
    {
      img: "https://movic.b-cdn.net/at_edmart/c/24-small_default/chrome-trim.jpg",
      name: "Ark Performance",
      purpose: "SXY Wheels",
      price: 700,
      oldPrice: 1000,
    },
    {
      img: "https://movic.b-cdn.net/at_edmart/32-small_default/brown-bear-printed-sweater.jpg",
      name: "Sparta",
      purpose: "Custom Headlights",
      price: 700,
      oldPrice: 1000,
    },
    {
      img: "https://movic.b-cdn.net/at_edmart/34-small_default/the-best-is-yet-to-come-framed-poster.jpg",
      name: "PowerStop",
      purpose: "Power Stop High Performance",
      price: 700,
      oldPrice: 1000,
    },
    {
      img: "https://movic.b-cdn.net/at_edmart/36-small_default/the-adventure-begins-framed-poster.jpg",
      name: "Dynamics",
      purpose: "17 5 Split Spokes Chrome Wheel Covers",
      price: 700,
      oldPrice: 1000,
    },
  ];
  return (
    <div className="mt-[10%]">
      <h1 className="font-bold text-3xl uppercase text-center mb-8">Our <span className="text-blue-500">Popular</span> Products</h1>
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {products.map((product) => (
          <div className="w-64 h-[358px] bg-white border border-gray-400 rounded-md card">
            <img src={product.img} className="w-full h-52 rounded-md" alt="" />
            <div className="mx-4">
              <p className="font-semibold">{product.name}</p>
              <p className="text-blue-500 font-semibold">{product.purpose}</p>
              <p className="font-semibold">
                <del className="text-gray-400">${product.oldPrice}</del>
                <span> ${product.price}</span>
              </p>

              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
              </div>
            </div>
            <button className="btn btn-sm btn-primary info hover:bg-blue-400 rounded-b-md rounded-t-none">
              Add Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingProducts;
