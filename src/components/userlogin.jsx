import { Google } from "@mui/icons-material";
import React, { useState, useRef } from "react";

function UserLogin() {
  const emailRef = useRef();
  const passRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-1/3">
          <h1 className="text-3xl font-bold mb-4">Sign In!</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block">Email</label>
              <input
                className="mt-2 rounded"
                type="email"
                required
                ref={emailRef}
              />
            </div>

            <div>
              <label className="block">Password</label>
              <input
                className="mt-2 rounded"
                type="password"
                required
                ref={passRef}
              />
            </div>

            <div className="flex gap-3">
              <button className="w-1/3 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
              <button className="w-1/2 flex gap-2 justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Google />
                Login with Google
              </button>
              {/* <div>
                <a className="text-blue-400" href="#">
                  Forgot Password?
                </a>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserLogin;