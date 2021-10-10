import React from 'react';
import styled from 'styled-components';

const LineButton = ({ onClick, src, title }) => {
  return (
    <Container onClick={onClick}>
      <Circle>
        <img src={src} alt={title} />
      </Circle>
      <span>{title}</span>
    </Container>
  );
};

export default LineButton;

const Container = styled.div`
  margin: 20px 15px;
  display: flex;
  flex-direction: column;
  span {
    font-family: Source Han Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height */
    text-align: center;
    color: #ffffff;
  }
  &:hover {
    span {
      text-shadow: 4px 4px 8px rgba(208, 168, 92, 0.3);
    }
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;
  border-radius: 100%;
  background: #172228;
  border: 1px solid #d0a85c;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0px 4px 4px rgba(208, 168, 92, 0.3);
  }
  img {
    width: 60px;
    height: 60px;
  }
`;
