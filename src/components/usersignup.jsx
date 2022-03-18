import React, { useRef } from "react";

const UserSignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const cPassRef = useRef();

  const handleSubmit = (e) => {};
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-1/3">
          <h1 className="text-2xl font-bold mb-4">
            Register Individual Account!
          </h1>

          <form className="space-y-6" onClick={handleSubmit}>
            <div>
              <label className="block">Name</label>
              <input
                ref={nameRef}
                className="mt-2 rounded"
                type="text"
                required
              />
            </div>

            <div>
              <label className="block">Email</label>
              <input
                ref={emailRef}
                className="mt-2 rounded"
                type="email"
                required
              />
            </div>

            <div>
              <label className="block">Password</label>
              <input
                ref={passRef}
                className="mt-2 rounded"
                type="password"
                required
              />
            </div>

            <div>
              <label className="block">Confirm Password</label>
              <input
                ref={cPassRef}
                className="mt-2 rounded"
                type="password"
                required
              />
            </div>

            <button className="w-1/3 flex justify-center  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
