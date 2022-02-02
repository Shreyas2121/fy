import React from "react";

const CompanyRegDash = () => {
  return (
    <div>
      <div>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Register</h1>

          <form className="space-y-6">
            <div className="flex">
              <div>
                <div>
                  <label className="block">Company Name</label>
                  <input className="mt-2 rounded" type="text" />
                </div>

                <div className="mt-3">
                  <label className="block">Email</label>
                  <input className="mt-2 rounded" type="email" />
                </div>

                <div className="mt-3">
                  <label className="block">Pan Card</label>
                  <input className="mt-2 block" type="file" />
                </div>

                <div className="mt-3">
                  <label className="block">Blank Cheque</label>
                  <input className="mt-2" type="file" />
                </div>
              </div>

              <div>
                <div>
                  <label className="block">CIN Number</label>
                  <input className="mt-2 rounded" type="number" />
                </div>

                <div className="mt-3">
                  <label className="block">City</label>
                  <input className="mt-2 rounded" type="text" />
                </div>

                <div className="mt-3">
                  <label className="block">Postal Code</label>
                  <input className="mt-2 rounded" type="number" />
                </div>
              </div>
            </div>

            <button className="ml-[155px] w-1/3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegDash;
