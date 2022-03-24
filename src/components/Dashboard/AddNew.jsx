import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";

const AddNew = () => {
  const [catergory, setCatergory] = useState("");

  const handleChange = (event) => {
    setCatergory(event.target.value);
  };
  return (
    <>
      <h1 className="text-center text-lg">Add Product Details:</h1>
      <div className="flex items-center justify-center">
        <form className="flex flex-col gap-3 mt-7">
          <div className="flex flex-col">
            <label>Product Name:</label>
            <input type="text" className="rounded inline-block w-96" />
          </div>

          <div className="flex flex-col">
            <label>Price:</label>
            <input type="number" className="rounded" />
          </div>

          <div className="flex flex-col">
            <label>Product Image:</label>
            <input
              type="file"
              className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
            />
          </div>

          <div className="flex flex-col">
            <label>Product Description:</label>
            <textarea rows="3" cols="10" className="rounded"></textarea>
          </div>

          <div className="flex flex-col">
            <label>Catergory:</label>
            <input type="text" className="rounded" />
          </div>

          <div className="flex flex-col">
            <label> Sub-Catergory:</label>
            <input type="text" className="rounded" />
          </div>
          <div className="flex flex-col">
            <button
              style={{
                backgroundColor: "#7451f8",
                border: "none",
                padding: "10px",
                textAlign: "center",
                fontSize: "16px",
                margin: "4px 2px",
                borderRadius: "12px",
                color: "white",
              }}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNew;
