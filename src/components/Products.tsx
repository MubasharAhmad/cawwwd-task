import React from "react";
import { FaAngleDown, FaThLarge, FaTimes } from "react-icons/fa";
import { laptops } from "../data/products";
import Product from "./Product";

const Products = () => {
  const filters = [
    "Ready to Ship",
    "Paid Samples",
    "Price Minimum",
    "Price Maximum",
    "Minimal Order",
  ];
  return (
    <div className="flex-1">
      <div className="md:flex justify-between items-center">
        <p className="text-lg font-semibold">
          1-16 over 7,000 result for{" "}
          <span className="text-orange-500">&quot;Asus&quot;</span>
        </p>
        <div className="flex items-center gap-x-3">
          <p className="text-lg">Sort By:</p>
          <button className="border px-4 py-2 text-lg rounded-lg bg-white flex items-center gap-x-1">
            Best Match <FaAngleDown />
          </button>
          <button className="border px-4 py-3 text-xl rounded-lg bg-white flex items-center gap-x-1">
            <FaThLarge />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 my-5 items-center">
        {filters.map((filter, index)=>(
            <div key={index} className="border rounded-full py-2 px-4 flex items-center gap-x-2 bg-white">
            <p>{filter}</p>
            <FaTimes className="text-white rounded-full bg-neutral-400 p-1 w-5 h-5" />
          </div>
        ))}
        <p className="text-orange-500 font-semibold hover:cursor-pointer">Clear All Filters</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {laptops.map((laptop, index)=>(
            <div key={index}>
                <Product data={laptop} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
