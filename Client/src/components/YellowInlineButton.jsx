import styled from "@emotion/styled";
import React from "react";

const YellowInlineButton = ({ onClick, text }) => {
  return <Container onClick={onClick}>{text}</Container>;
};

export default YellowInlineButton;

const Container = styled.div`
  display: block;
  text-align: center;
  margin: 10px;
  padding: 15px;
  width: 80%;
  margin-bottom: 15px;
  height: 56px;
  border: 1px solid #fee500;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #fee500;
  }
`;
