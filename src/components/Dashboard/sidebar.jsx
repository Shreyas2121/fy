import React from "react";
import product from "../../assets/Product.svg";
import customer from "../../assets/Customer.svg";
import { IoMdLogOut } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { RiUserSharedLine } from "react-icons/ri";
import { GrProductHunt } from "react-icons/gr";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col justify-between  w-12 h-96 mt-10  ">
        <div className="flex flex-col gap-6">
          <Tippy
            content={<span className="p-2 bg-yellow-300">Dashboard</span>}
            placement="right"
            theme="light"
          >
            <div>
              <MdSpaceDashboard className="side-bar" />
            </div>
          </Tippy>
          <Tippy
            content={<span className="p-2 bg-yellow-300">Customer</span>}
            placement="right"
            theme="light"
          >
            <div>
              <RiUserSharedLine className="side-bar" id="cust" />
            </div>
          </Tippy>
          <Tippy
            content={<span className="p-2 bg-yellow-300">Products</span>}
            placement="right"
            theme="light"
          >
            <div>
              <GrProductHunt className="side-bar" />
            </div>
          </Tippy>
        </div>

        <Tippy
          content={<span className="p-2 bg-yellow-300">Sign Out</span>}
          placement="right"
          theme="light"
        >
          <div>
            <IoMdLogOut className="side-bar" />
          </div>
        </Tippy>
      </div>
    </>
  );
};

export default SideBar;
