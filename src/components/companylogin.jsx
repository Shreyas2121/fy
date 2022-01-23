import React from "react";

function CompanyLogin() {
  return (
    <>
      <div className="container flex items-center justify-center flex-col gap-5">
        <h1>Sign In!</h1>

        <form className="space-y-6">
          <div>
            <label className="block">Company ID</label>
            <input type="text" />
          </div>

          <div>
            <label className="block">Password</label>
            <input type="password" />
          </div>

          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default CompanyLogin;
