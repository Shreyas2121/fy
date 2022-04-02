import { PermIdentityOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex justify-between w-full mt-9 ">
      <span className="text-blue-700 text-2xl font-bold px-3 ">Chainkart</span>
      <ul className="flex gap-5 ">
        <Link to="/">
          <li className="hover">Electronics</li>
        </Link>
        <Link to="/">
          <li className="hover">Sports</li>
        </Link>
        <Link to="/">
          <li className="hover">Fashion</li>
        </Link>
        <Link to="/">
          <li className="hover">Books</li>
        </Link>
        <Link to="/">
          <li className="hover">Home Appliances</li>
        </Link>
      </ul>
      <div className="px-3 flex gap-5">
        <div className="bg-[#F0F8FF] rounded-full p-1 w-9 h-9 text-gray-500 flex items-center justify-center">
          <PermIdentityOutlined />
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
