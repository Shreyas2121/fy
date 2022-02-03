import React from "react";
import CompanyRegDash from "../components/Dashboard/CompanyRegDash";
import SideBar from "../components/Dashboard/sidebar";
import TitleBar from "../components/Dashboard/titlebar";

const Dashboard = () => {
  return (
    <>
      <TitleBar />
      <div className="flex">
        <SideBar />
        <CompanyRegDash />
      </div>
    </>
  );
};

export default Dashboard;
