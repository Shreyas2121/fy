import React from "react";

const CompanyRegDash = () => {
  return (
    <div className="flex-grow">
      <h2
        className="mt-10 text-xl ml-6 p-4  "
        style={{ boxShadow: "0 0 15px -10px rgba(0,0,0,0.75)" }}
      >
        Please Register Your Business Here
      </h2>
      <div
        className="p-4 ml-6"
        style={{ boxShadow: "0 0 15px -10px rgba(0,0,0,0.75)" }}
      >
        <form>
          <div className="flex ">
            <div className="flex-1">
              <label>Business Name: </label>
              <input className="w-72 ml-2" type="text" />
            </div>
            <div className="flex-1">
              <label>Business E-mail: </label>
              <input className="w-72 ml-2" type="email" />
            </div>
          </div>
          <div className="flex mt-4">
            <div className="flex-1">
              <label>City: </label>
              <input className="w-72 ml-2" type="text" />
            </div>
            <div className="flex-1">
              <label>Postal Code: </label>
              <input className="w-72 ml-2" type="number" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegDash;
