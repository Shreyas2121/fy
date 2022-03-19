import React from "react";
import CompanyRegDash from "../components/Dashboard/CompanyRegDash";
import SideBar from "../components/Dashboard/sidebar";
import TitleBar from "../components/Dashboard/titlebar";
import styled from "styled-components";
import Widget from "../components/widget/Widget";
import Featured from "../components/Dashboard/Featured";
import Chart from "../components/Dashboard/Chart";

const Container = styled.div`
  display: flex;
`;
const Container2 = styled.div`
  flex: 6;
`;
const Widgets = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const Charts = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

const Dashboard = () => {
  return (
    <Container>
      <SideBar />
      <Container2>
        <TitleBar />
        <Widgets>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="products" />
        </Widgets>
        <Charts>
          <Featured />
          <Chart />
        </Charts>
      </Container2>
    </Container>
  );
};

export default Dashboard;
