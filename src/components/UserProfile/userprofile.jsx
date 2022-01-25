import React from "react";

function UserProfile() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-400">
        <div className="bg-white p-16 rounded shadow-2xl w-1/3">
          <h1 className="text-3xl font-bold mb-4">Hello</h1>

          <form className="space-y-6">
            <div>
              <label className="block">Name</label>
              <input className="mt-2 rounded" type="text" required />
            </div>

            <div>
              <label className="block">Email</label>
              <input className="mt-2 rounded" type="email" required />
            </div>

            <div>
              <label className="block">Phone Number</label>
              <input className="mt-2 rounded" type="number" required />
            </div>

            <div>
              <label className="block">Address</label>
              <textarea className="mt-2 rounded" required />
            </div>

            <div>
              <label className="block">City</label>
              <input className="mt-2 rounded" type="text" required />
            </div>

            <div>
              <label className="block">Postal Code</label>
              <input className="mt-2 rounded" type="number" required />
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-1/3 flex justify-center align-middle py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Update
              </button>
              <div>
                <a className="text-blue-400" href="#">
                  Want to change password? Click here.
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
