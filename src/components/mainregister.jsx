import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosBusiness } from "react-icons/io";
import usersignup from "./usersignup";
import UserSignUp from "./usersignup";

const MainRegister = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-1/3">
          <h1 className="text-3xl font-bold mb-4">Join Us!</h1>

          <p>
            To begin this journey, tell us what type of account you'd be
            opening?
          </p>

          <div className=" mt-3 flex justify-between">
            <button className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Business
            </button>
            <button className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Individual
            </button>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="flex items-center justify-center gap-2 flex-col  ">
    //     <h1 className="font-bold text-left">Join Us!</h1>

    //     <p>
    //       To begin this journey, tell us what type of account you'd be opening.
    //     </p>

    //     <div className="flex gap-4 border-2 p-4 rounded-lg w-96 place-content-between ">
    //       <FaHouseUser className="h-12 w-10" />
    //       <div className=" flex flex-col">
    //         <h2 className="font-bold">User</h2>
    //         <p>Account only to purchase products.</p>
    //       </div>

    //       <AiOutlineArrowRight
    //         className="mt-4 "
    //         onClick={() => <UserSignUp />}
    //       />
    //     </div>

    //     <div className="flex gap-4 border-2 p-4 rounded-lg w-96 place-content-between">
    //       <IoIosBusiness className="h-12 w-10" />
    //       <div className=" flex flex-col">
    //         <h2 className="font-bold">Business</h2>
    //         <p>Account for sellers</p>
    //       </div>

    //       <AiOutlineArrowRight className="mt-4 mx-13" />
    //     </div>
    //   </div>
    // </>
  );
};

export default MainRegister;
