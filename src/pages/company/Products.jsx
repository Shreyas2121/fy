import React from "react";
import { Route, Routes } from "react-router-dom";

import SideBar from "../../components/Dashboard/sidebar";
import TitleBar from "../../components/Dashboard/titlebar";
import styled from "styled-components";
import ProductTable from "../../components/Dashboard/ProductTable";

const Users1 = styled.div`
  display: flex;
  width: 100%;
`;

const UsersContainer = styled.div`
  flex: 6;
`;

const Products = () => {
  return (
    <Users1>
      <SideBar />
      <UsersContainer>
        <TitleBar />
        <ProductTable />
      </UsersContainer>
    </Users1>
  );
};

export default Products;
