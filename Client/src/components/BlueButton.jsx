import React from 'react';
import styled from 'styled-components';

const BlueButton = ({ onClick, text }) => {
  return (
    <ButtonBorder>
      <Border />
      <Button onClick={onClick}>{text}</Button>
    </ButtonBorder>
  );
};

export default BlueButton;
const ButtonBorder = styled.div`
  display: flex;
  margin: 10px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`;
const Border = styled.div`
  position: absolute;
  top: -7px;
  left: 7px;
  width: 100%;
  height: 100%;
  border: 1px solid #ffecc9;
  transition: all 0.3s;
  &:hover,
  &:active {
    animation-name: border;
    animation-duration: 1s;
    top: 0px;
    left: 0px;
  }
  @keyframes border {
    0% {
      top: -7px;
      left: 7px;
    }
    30% {
      top: -9px;
      left: 9px;
    }
    100% {
      top: 0px;
      left: 0px;
    }
  }
`;
const Button = styled.div`
  cursor: pointer;
  width: 100%;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  padding: 15px 0;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background-color: rgba(9, 198, 227, 1);
  /* animation-name: poly;
  @keyframes poly {
    0% {
      clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
    }
    100% {
      clip-path: polygon(100% 100%, -200% 100%, 100% -200%);
    }
  } */
`;
