import { Folder } from "@mui/icons-material";
import React, { useRef, useState } from "react";

const CompanyRegister = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const panRef = useRef();
  const cinRef = useRef();
  const cityRef = useRef();
  const posRef = useRef();

  const [card, setCard] = useState();
  const [cheque, setCheque] = useState();
  console.log(card, cheque);

  const handleSubmit = (e) => {};
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-500   ">
        <div className="bg-white p-16 rounded shadow-2xl w-1/2 flex items-center justify-center flex-col ">
          <h1 className="text-2xl font-bold mb-4">
            Register your Company Now!
          </h1>

          <form className="space-y-6">
            <div className="flex">
              <div>
                <div>
                  <label className="block">Company Name</label>
                  <input ref={nameRef} className="mt-2 rounded" type="text" />
                </div>

                <div className="mt-3">
                  <label className="block">Email</label>
                  <input ref={emailRef} className="mt-2 rounded" type="email" />
                </div>

                <div className="mt-3">
                  <label className="block">Pan Card</label>
                  {/* <Folder /> */}
                  <input
                    id="file1"
                    onChange={(e) => setCard(e.target.files[0])}
                    className="mt-2  "
                    type="file"
                  />
                </div>

                <div className="mt-3">
                  <label className="block">Blank Cheque</label>
                  {/* <Folder /> */}
                  <input
                    id="file2"
                    onChange={(e) => setCheque(e.target.files[0])}
                    className="mt-2"
                    type="file"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label className="block">CIN Number</label>
                  <input ref={cinRef} className="mt-2 rounded" type="number" />
                </div>

                <div className="mt-3">
                  <label className="block">City</label>
                  <input ref={cityRef} className="mt-2 rounded" type="text" />
                </div>

                <div className="mt-3">
                  <label className="block">Postal Code</label>
                  <input ref={posRef} className="mt-2 rounded" type="number" />
                </div>
              </div>
            </div>

            <button className="ml-[155px] w-1/3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyRegister;
