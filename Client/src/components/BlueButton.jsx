import React from 'react';
import styled from "@emotion/styled";

const BlueButton = ({ isChecked, text, onClick }) => {
  return (
    <ButtonBorder onClick={onClick}>
      <Border isChecked={isChecked} />
      <Button isChecked={isChecked}>{text}</Button>
    </ButtonBorder>
  );
};

export default BlueButton;
const ButtonBorder = styled.div`
  cursor: pointer;
  display: flex;
  margin: 10px;
  width: 80%;
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
  ${(props) =>
    props.isChecked &&
    `top: 0px;
    left: 0px;`}
  &:hover,
  &:active {
    animation-name: border;
    animation-duration: 0.5s;
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
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  padding: 15px;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  background-color: rgba(9, 198, 227, 1);
  ${(props) =>
    props.isChecked && `background-color: #0097ae;`}/* animation-name: poly;
  @keyframes poly {
    0% {
      clip-path: polygon(100% 100%, 100% 100%, 100% 100%);
    }
    100% {
      clip-path: polygon(100% 100%, -200% 100%, 100% -200%);
    }
  } */
`;
