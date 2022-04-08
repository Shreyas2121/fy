import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, img }) => {
  return (
    // <div className="flex">
    //   <div className="">
    //     <img
    //       src={img}
    //       className="w-60 h-60 object-center object-cover group-hover:opacity-75"
    //     />
    //   </div>

    //   <div>
    //     <h1>{name}</h1>
    //     <h5>{price}</h5>
    //     <button>Add to Cart</button>
    //   </div>
    // </div>

    <Link to="/" className="group">
      <div className="w-full aspect-w-1 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={img}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
      <button>Add to Cart</button>
    </Link>
  );
};

export default ProductCard;
