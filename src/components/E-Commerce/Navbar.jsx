import { PermIdentityOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  const [isOpenE, setIsOpenE] = useState(false);
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenF, setIsOpenF] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const [isOpenH, setIsOpenH] = useState(false);
  return (
    <div className="flex justify-between w-full mt-9 ">
      <span className="text-blue-700 text-2xl font-bold px-3 ">Chainkart</span>
      <ul className="flex gap-5 ">
        <li className="hover relative" onClick={() => setIsOpenE(!isOpenE)}>
          Electronics
        </li>
        {isOpenE && (
          <div className=" top-16 absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/">Laptop</Link>
            <Link to="/">Headphones</Link>
            <Link to="/">Smartphones</Link>
          </div>
        )}

        <li className="hover relative" onClick={() => setIsOpenS(!isOpenS)}>
          Sports
        </li>

        {isOpenS && (
          <div className=" top-16 left-[610px] absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/">Cricket Equipments</Link>
            <Link to="/">Football</Link>
            <Link to="/">Badminton</Link>
          </div>
        )}

        <li className="hover relative" onClick={() => setIsOpenF(!isOpenF)}>
          Fashion
        </li>
        {isOpenF && (
          <div className=" top-16 left-[675px] absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/">Shirts</Link>
            <Link to="/">Shoes</Link>
            <Link to="/">Watches</Link>
          </div>
        )}

        <li className="hover relative" onClick={() => setIsOpenB(!isOpenB)}>
          Books
        </li>
        {isOpenB && (
          <div className=" top-16 left-[750px] absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/">Autobiography</Link>
            <Link to="/">Textbooks</Link>
            <Link to="/">Fiction</Link>
          </div>
        )}

        <li className="hover relative" onClick={() => setIsOpenH(!isOpenH)}>
          Home Appliances
        </li>
        {isOpenH && (
          <div className=" top-16 left-[815px] absolute bg-[#f0f8ff] p-3 z-50 flex flex-col gap-2 hover:text-black">
            <Link to="/">Television</Link>
            <Link to="/">Washing Machine</Link>
            <Link to="/">AC</Link>
          </div>
        )}
      </ul>
      <div className="px-3 flex gap-5">
        <div className="bg-[#F0F8FF] rounded-full p-1 w-9 h-9 text-gray-500 flex items-center justify-center">
          <Link to="/profile">
            <PermIdentityOutlined />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          {user ? (
            <span className="hover mt-2">Log Out</span>
          ) : (
            <Link to="/login">
              <span className="hover mt-2">Log In</span>
            </Link>
          )}
        </div>

        <div className="bg-[#F0F8FF] rounded-full p-1 w-9 h-9 text-gray-500 flex items-center justify-center mr-2">
          <Badge badgeContent={2} color="primary">
            <ShoppingBagOutlined />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
