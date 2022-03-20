import React from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";
import DashHome from "../components/Dashboard/DashHome";
import Users from "./company/Users";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashHome />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </>
  );
};

export default Dashboard;
