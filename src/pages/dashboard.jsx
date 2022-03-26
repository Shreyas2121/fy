import React from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";
import CProfile from "../components/Dashboard/cprofile";
import DashHome from "../components/Dashboard/DashHome";
import Transaction from "../components/Dashboard/Transaction";
import AddProducts from "./AddProducts";
import Products from "./company/Products";

import Users from "./company/Users";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashHome />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="addNew" element={<AddProducts />} />
        <Route path="cprofile" element={<CProfile />} />
        <Route path="transactions" element={<Transaction />} />
      </Routes>
    </>
  );
};

export default Dashboard;
