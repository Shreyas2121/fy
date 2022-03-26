import React from "react";
import SideBar from "./sidebar";
import TitleBar from "./titlebar";
import styled from "styled-components";
import List from "./List";

const Container = styled.div`
  display: flex;
`;
const Container2 = styled.div`
  flex: 6;
`;

const ListContainer = styled.div`
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
`;

const ListTitle = styled.div`
  font-weight: 500;
  color: gray;
  margin-bottom: 15px;
`;

const Transaction = () => {
  return (
    <Container>
      <SideBar />
      <Container2>
        <TitleBar />
        <ListContainer>
          <ListTitle>All Transactions</ListTitle>
          <List />
        </ListContainer>
      </Container2>
    </Container>
  );
};

export default Transaction;
