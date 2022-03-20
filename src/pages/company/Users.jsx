import React from "react";
import { Route, Routes } from "react-router-dom";
import Datatable from "../../components/Dashboard/Datatable";
import SideBar from "../../components/Dashboard/sidebar";
import TitleBar from "../../components/Dashboard/titlebar";
import styled from "styled-components";

const Users1 = styled.div`
  display: flex;
  width: 100%;
`;

const UsersContainer = styled.div`
  flex: 6;
`;

const Users = () => {
  return (
    <Users1>
      <SideBar />
      <UsersContainer>
        <TitleBar />
        <Datatable />
      </UsersContainer>
    </Users1>
  );
};

export default Users;
