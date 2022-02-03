import React from "react";
import logo from "../../assets/Logo.svg";

const TitleBar = () => {
  return (
    <>
      <div className="flex justify-between h-10  bg-blue-400  border-b-2  sticky top-0 z-10">
        <img className="ml-4 p-1" src={logo} />
        <h2 className="mr-4 mt-2">Welcome,Company</h2>
      </div>
    </>
  );
};
export default TitleBar;
