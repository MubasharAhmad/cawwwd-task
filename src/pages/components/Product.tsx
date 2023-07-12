import Image from "next/image";
import React from "react";
import { FaCartPlus, FaStar } from "react-icons/fa";

const Product = ({
  data: { price, previousPrice, name, specs, rating, sold, imageUrl },
}: any) => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg border">
      <div className="p-3 bg-neutral-200 rounded-t-lg">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt="laptop"
          className="w-32 h-32 mx-auto object-contain"
        />
      </div>
      <div className="p-3">
        <div className="flex gap-x-2">
          <p className="font-semibold text-lg">{price}</p>
          <p className="text-lg text-neutral-400 line-through">
            {previousPrice}
          </p>
        </div>
        <p className="font-semibold">{name}</p>
        <p className="font-semibold">{specs}</p>
        <div className="my-2 flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <button className="bg-yellow-400 text-white px-3 py-1 flex gap-x-1 items-center rounded-full">
              <FaStar />
              {rating}
            </button>
            <div className="border-l px-2">Sold {sold}</div>
          </div>
          <button className="text-white bg-orange-500 rounded-full p-2"><FaCartPlus /></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
