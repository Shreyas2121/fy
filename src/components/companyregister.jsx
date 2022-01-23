import React from "react";

function CompanyRegister() {
  return (
    <>
      <div className="container flex items-center justify-center flex-col gap-5">
        <h1>Register Your Company Now!</h1>

        <form className="space-y-6">
          <div>
            <label className="block">Company Name</label>
            <input type="text" />
          </div>

          <div>
            <label className="block"> Email</label>
            <input type="email" />
          </div>

          <div>
            <label className="block">CIN Number</label>
            <input type="number" required />
          </div>

          <div>
            <label className="block">Blank cheque</label>
            <input type="file" required />
          </div>

          <div>
            <label className="block">PAN card</label>
            <input type="file" required />
          </div>

          <div>
            <label className="block">City</label>
            <input type="text" />
          </div>

          <div>
            <label className="block">Postal Code</label>
            <input type="number" />
          </div>
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default CompanyRegister;
