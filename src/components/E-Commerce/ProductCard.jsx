import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, img }) => {
  return (
    // <Link to="/">
    //   <div className=" aspect-w-1 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
    //     <img
    //       src={img}
    //       className=" object-center object-cover group-hover:opacity-75"
    //     />
    //   </div>
    //   <h3 className="mt-4 text-sm text-black">{name}</h3>
    //   <p className="mt-1 text-lg font-medium text-gray-900">₹{price}</p>
    //   <button className="bg-indigo-600 p-2 rounded-lg text-white">
    //     Add to Cart
    //   </button>
    // </Link>
    <div className="flex flex-col w-full h-[350px] items-center">
      <img src={img} className="w-full h-full object-cover mb-[5px]" />
      <div className="flex flex-col">
        <span>{name}</span>
        <span>{price}</span>
        <button className="bg-indigo-600 p-2 rounded-lg text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
