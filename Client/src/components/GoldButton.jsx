import React from 'react';
import styled from 'styled-components';

const GoldButton = ({ isChecked, onClick, text }) => {
  return (
    <ButtonBorder onClick={() => onClick()}>
      <Border isChecked={isChecked} />
      <Button>{text}</Button>
    </ButtonBorder>
  );
};

export default GoldButton;
const ButtonBorder = styled.div`
  display: flex;
  width: 80%;
  cursor: pointer;
  margin-bottom: 14px;
  position: relative;
  /* transition: clip-path 1.5s;
  &:hover {
    clip-path: polygon(0 24px, 24px 0, 100% 0, 100% 35px, 232px 100%, 0 100%);
  } */
`;
const Border = styled.div`
  position: absolute;
  top: -7px;
  left: 7px;
  width: 100%;
  height: 100%;
  border: 1px solid #ffecc9;
  transition: all 0.3s;
  ${(props) =>
    props.isChecked &&
    `top: 0px;
    left: 0px;`}
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

  width: 100%;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  padding: 15px;
  display: flex;
  font-weight: bold;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #d0a85c;
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
