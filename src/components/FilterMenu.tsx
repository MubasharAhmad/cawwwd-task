import React, { useState } from "react";
import { filters } from "../pages/data/filterMenu";
import { FaDollarSign } from "react-icons/fa";

const FilterMenu = () => {
  const [flters, setFilters] = useState(filters);
  const [minOrder, setMinOrder] = useState("5000");
  return (
    <div className="hidden lg:block border w-72 p-4 bg-white rounded-lg">
      <h2 className="text-lg font-bold mb-4">Filter</h2>
      {flters.map((filter, index) => (
        <div key={index} className="my-2">
          <h2 className="text-lg font-semibold">{filter.name}</h2>
          {filter.childs.map((child, i) => (
            <div key={index.toString() + i.toString()} className="flex gap-x-2 items-center my-1">
              <input type="checkbox" id={`${index}${i}`} checked={child.isChecked} onChange={()=> {child.isChecked=!child.isChecked; setFilters([...filters])}} className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2" />
              {child.icon && <div className={`${child.icon.color}`}> {child.icon.element} </div>}
              <label htmlFor={`${index}${i}`} className="text-neutral-400">{child.name}</label>
            </div>
          ))}
        </div>
      ))}

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Min Order</h2>
        <p>${minOrder}</p>
      </div>
      <input id="default-range" type="range" min="10" max="10000" value={minOrder} onChange={(e)=> setMinOrder(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
      <div className="flex justify-between">
        <p>10</p>
        <p>10000</p>
      </div>

      <h2 className="text-lg font-semibold mt-5">Price</h2>
      <div className="border flex items-center rounded-md my-2">
        <div className="text-neutral-500 p-2 bg-neutral-200 rounded-l-md">
          <FaDollarSign className="w-6 h-6 p-1 rounded-full border-2 border-neutral-500" />
        </div>
        <p className="font-semibold px-2">100</p>
      </div>
      <div className="border flex items-center rounded-md my-2">
        <div className="text-neutral-500 p-2 bg-neutral-200 rounded-l-md">
          <FaDollarSign className="w-6 h-6 p-1 rounded-full border-2 border-neutral-500" />
        </div>
        <p className="font-semibold px-2">6000</p>
      </div>
      <div className="border flex items-center rounded-md my-2 p-2">
        Under $500
      </div>
      <div className="border flex items-center rounded-md my-2 p-2">
        $500 - $1000
      </div>
      <div className="border flex items-center rounded-md my-2 p-2">
        $1000 - $1500
      </div>
    </div>
  );
};

export default FilterMenu;
