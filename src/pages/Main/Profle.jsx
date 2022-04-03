import React from "react";
import { Route, Routes } from "react-router-dom";
import BasicInfo from "../../components/E-Commerce/BasicInfo";

const Profile = () => {
  return (
    <>
      <Routes>
        <Route path="/basicInfo" />
        <Route path="/orders" />
        <Route path="/address" />
      </Routes>
    </>
  );
};

export default Profile;
