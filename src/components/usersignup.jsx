import React from "react";

const UserSignUp = () => {
  return (
    <>
      <div className="container flex items-center justify-center flex-col gap-5">
        <h1>Register Induvidual Account!</h1>

        <form className="space-y-6">
          <div>
            <label className="block">Name</label>
            <input type="text" />
          </div>

          <div>
            <label className="block">Email</label>
            <input type="email" />
          </div>

          <div>
            <label className="block">Password</label>
            <input type="password" />
          </div>

          <div>
            <label className="block">Confirm Password</label>
            <input type="password" />
          </div>
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default UserSignUp;
