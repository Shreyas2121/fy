import { PermIdentityOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="fixed flex top-10 justify-between w-full ">
      <span className="text-blue-700 text-2xl font-bold px-3">Chainkart</span>
      <ul className="flex gap-5 ">
        <Link to="/">
          <li>Electronics</li>
        </Link>
        <Link to="/">
          <li>Sports</li>
        </Link>
        <Link to="/">
          <li>Fashion</li>
        </Link>
        <Link to="/">
          <li>Books</li>
        </Link>
        <Link to="/">
          <li>Home Appliances</li>
        </Link>
      </ul>
      <div className="px-3 flex gap-5">
        <PermIdentityOutlined className="bg-blue-500 rounded-xl p-1 w-8 h-8" />
        {user ? (
          <span>Log Out</span>
        ) : (
          <Link to="/login">
            <span>Log In</span>
          </Link>
        )}

        <ShoppingBagOutlined className="bg-blue-500 rounded-xl p-1 w-8 h-8" />
      </div>
    </div>
  );
};

export default Navbar;
