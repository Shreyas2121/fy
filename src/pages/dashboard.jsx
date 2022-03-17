import React from "react";
import CompanyRegDash from "../components/Dashboard/CompanyRegDash";
import SideBar from "../components/Dashboard/sidebar";
import TitleBar from "../components/Dashboard/titlebar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Container2 = styled.div`
  flex: 6;
`;

const Dashboard = () => {
  return (
    <Container>
      <SideBar />
      <Container2>
        <TitleBar />
      </Container2>
    </Container>
  );
};

export default Dashboard;
