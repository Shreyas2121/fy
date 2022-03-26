import axios from "axios";
import React, { useState } from "react";

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pass !== cPass) {
      alert("Passwords do not match");
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-1/3">
          <h1 className="text-2xl font-bold mb-4">
            Register Individual Account!
          </h1>

          <form className="space-y-6">
            <div>
              <label className="block">Name</label>
              <input
                className="mt-2 rounded"
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block">Email</label>
              <input
                className="mt-2 rounded"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block">Password</label>
              <input
                className="mt-2 rounded"
                type="password"
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block">Confirm Password</label>
              <input
                className="mt-2 rounded"
                type="password"
                onChange={(e) => setCPass(e.target.value)}
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-1/3 flex justify-center  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
