import React from "react";
import SideBar from "../components/Dashboard/sidebar";
import TitleBar from "../components/Dashboard/titlebar";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import AddNew from "../components/Dashboard/AddNew";

const AddProducts = () => {
  //   const nameRef = useRef();
  //   const priceRef = useRef();
  //   const imgRef = useRef();
  //   const dspRef = useRef();
  //   const catRef = useRef();
  //   const subRef = useRef();

  const Container = styled.div`
    display: flex;
  `;
  const Container2 = styled.div`
    flex: 6;
  `;

  return (
    <>
      <Container>
        <SideBar />
        <Container2>
          <TitleBar />
          <AddNew />
        </Container2>
      </Container>
    </>
  );
};

export default AddProducts;
