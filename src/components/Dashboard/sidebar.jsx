import React from "react";
import logo from "../../assets/Logo.svg";
import styled from "styled-components";
import {
  AccountCircleOutlined,
  Dashboard,
  ExitToApp,
  PersonOutline,
  Store,
} from "@mui/icons-material";

const Top = styled.div`
  height: 50px;
  border-right: 0.5px solid rgb(230, 227, 227);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
`;

const Image = styled.img``;

const Center = styled.div`
  padding-left: 10px;
  margin-top: 50px;
`;

const Lists = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ece8ff;
  }
`;

const Text = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
`;

const SideBar = () => {
  return (
    <Container>
      <Top>
        <Image src={logo} />
      </Top>
      <hr />
      <Center>
        <Lists>
          <List>
            <Dashboard style={{ fontSize: "24px", color: "#7451f8" }} />
            <Text>Dashboard</Text>
          </List>
          <List>
            <Store style={{ fontSize: "24px", color: "#7451f8" }} />
            <Text>Products</Text>
          </List>
          <List>
            <PersonOutline style={{ fontSize: "24px", color: "#7451f8" }} />
            <Text>Users</Text>
          </List>
          <List>
            <AccountCircleOutlined
              style={{ fontSize: "24px", color: "#7451f8" }}
            />
            <Text>Profile</Text>
          </List>
          <List>
            <ExitToApp style={{ fontSize: "24px", color: "#7451f8" }} />
            <Text>LogOut</Text>
          </List>
        </Lists>
      </Center>
    </Container>
  );
};

export default SideBar;
