import React from "react";
import dashboard from "../../assets/Dashboard.svg";
import product from "../../assets/Product.svg";
import customer from "../../assets/Customer.svg";
import { IoMdLogOut } from "react-icons/io";
const SideBar = () => {
  return (
    <>
      <div className="  w-12 h-auto mt-10 border-r-2">
        <img src={dashboard} />
        <img src={customer} />
        <img src={product} />
        <IoMdLogOut
          className=" w-4 h-4 ml-4   text-gray-400"
          style={{ marginTop: "340px" }}
        />
      </div>
    </>
  );
};

export default SideBar;
