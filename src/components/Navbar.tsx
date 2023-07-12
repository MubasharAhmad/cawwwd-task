import Image from "next/image";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaAngleDown,
  FaGlobe,
  FaRegEnvelope,
  FaRegBell,
  FaShoppingCart,
  FaList,
} from "react-icons/fa";
import { navbarLinks } from "../pages/data/navbar";

const Navbar = () => {
  const [links, setLinks] = useState(navbarLinks);
  return (
    <>
      <div className="py-5 px-8 flex justify-between items-center bg-white border-b">
        {/* logo */}
        <div className="flex items-center gap-x-3 hover:cursor-pointer">
          <FaGlobe className="text-orange-600 w-10 h-10" />
          <h2 className="text-2xl font-semibold">Odaplace</h2>
        </div>

        {/* search bar */}
        <div className="hidden rounded-full border border-1 border-neutral-300 p-1 md:flex items-center justify-between">
          <div className="group text-neutral-600 hover:text-neutral-500 hover:cursor-pointer flex items-center gap-x-2 px-2 border-r">
            <FaMapMarkerAlt />
            <p>New York</p>
            <FaAngleDown className="group-hover:rotate-180 transition duration-700" />
          </div>
          <input
            type="text"
            className="w-28 md:w-40 lg:w-72 xl:w-96 px-2 outline-none border-none focus:border-0 focus:ring-0 py-0"
            placeholder="type here ..."
          />
          <button className="bg-orange-500 hover:bg-orange-400 px-3 py-1 rounded-full text-white flex items-center gap-x-2">
            <FaSearch /> Search
          </button>
        </div>

        {/* menu */}
        <div className="text-neutral-500 flex items-center">
          {/* language dropdown */}
          <div className="flex items-center gap-x-1 hover:cursor-pointer hover:text-neutral-400">
            <Image
              src={"/languages/united-kingdom.png"}
              width={26}
              height={26}
              alt="language-logo"
            />
            <p>EN</p>
            <FaAngleDown />
          </div>

          <div className="flex items-center">
            {/* others */}
            <div className="flex gap-x-3 px-3">
              <FaShoppingCart className="hover:cursor-pointer hover:text-neutral-400" />
              <div className="relative">
                <FaRegBell className="hover:cursor-pointer hover:text-neutral-400" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <FaRegEnvelope className="hover:cursor-pointer hover:text-neutral-400" />
            </div>

            {/* account */}
            <div className="px-3 border-l-2">
              <Image
                src={"/profile.png"}
                className="rounded-full object-cover object-center hover:cursor-pointer"
                alt=""
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-4 bg-white border-b flex gap-x-2 overflow-x-auto whitespace-nowrap">
        <div className="group text-neutral-600 hover:text-neutral-500 hover:cursor-pointer flex items-center gap-x-2 px-4 border-r-2 border-r-neutral-300">
          <FaList />
          <p>Categories</p>
          <FaAngleDown className="group-hover:rotate-180 transition duration-700" />
        </div>
        {links.map((link, index) => (
          <div key={index} className="group text-neutral-600 hover:text-neutral-500 hover:cursor-pointer flex items-center gap-x-2 px-2">
            <p>{link.name}</p>
            {link.isDropdown && <FaAngleDown className="group-hover:rotate-180 transition duration-700" />}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
