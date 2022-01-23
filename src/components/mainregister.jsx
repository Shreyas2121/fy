import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosBusiness } from "react-icons/io";
import usersignup from "./usersignup";
import UserSignUp from "./usersignup";

const MainRegister = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-2 flex-col  ">
        <h1 className="font-bold text-left">Join Us!</h1>

        <p>
          To begin this journey, tell us what type of account you'd be opening.
        </p>

        <div className="flex gap-4 border-2 p-4 rounded-lg w-96 place-content-between ">
          <FaHouseUser className="h-12 w-10" />
          <div className=" flex flex-col">
            <h2 className="font-bold">User</h2>
            <p>Account only to purchase products.</p>
          </div>

          <AiOutlineArrowRight
            className="mt-4 "
            onClick={() => <UserSignUp />}
          />
        </div>

        <div className="flex gap-4 border-2 p-4 rounded-lg w-96 place-content-between">
          <IoIosBusiness className="h-12 w-10" />
          <div className=" flex flex-col">
            <h2 className="font-bold">Business</h2>
            <p>Account for sellers</p>
          </div>

          <AiOutlineArrowRight className="mt-4 mx-13" />
        </div>
      </div>
    </>
  );
};

export default MainRegister;
