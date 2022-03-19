import {
  KeyboardArrowDown,
  KeyboardArrowUpOutlined,
  MoreVert,
} from "@mui/icons-material";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
`;
const top = styled.div``;
const title1 = styled.div``;
const bottom = styled.div``;
const featuredChart = styled.div``;
const title2 = styled.div``;
const amount = styled.div``;
const desc = styled.div``;
const summary = styled.div``;
const item = styled.div``;
const itemTitle = styled.div``;
const itemResult = styled.div``;
const resultAmount = styled.div``;

const Featured = () => {
  return (
    <Container>
      <top>
        <title1>Total Revenue</title1>
        <MoreVert fontSize="small" />
      </top>
      <bottom>
        <featuredChart>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </featuredChart>
        <title2>Total sales made today</title2>
        <amount>$420</amount>
        <desc>
          Previous transaction processing. Last payments may not be included.
        </desc>
        <summary>
          <item>
            <itemTitle>Target</itemTitle>
            <itemResult>
              <KeyboardArrowDown fontSize="small" />
              <resultAmount>$12.4k</resultAmount>
            </itemResult>
          </item>
          <item>
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <resultAmount>$12.4k</resultAmount>
            </div>
          </item>
          <item>
            <itemTitle>Last Month</itemTitle>
            <itemResult>
              <KeyboardArrowUpOutlined fontSize="small" />
              <resultAmount>$12.4k</resultAmount>
            </itemResult>
          </item>
        </summary>
      </bottom>
    </Container>
  );
};

export default Featured;
