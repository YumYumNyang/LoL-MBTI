import React from 'react';
import styled from 'styled-components';

const GoldButton = ({ onClick, text }) => {
  return (
    <ButtonBorder>
      <Button onClick={onClick}>{text}</Button>
    </ButtonBorder>
  );
};

export default GoldButton;
const ButtonBorder = styled.div`
  display: flex;
  padding: 5px;
  width: 256px;
  border: 1px solid #ffecc9;
  margin-bottom: 14px;
  transition: clip-path 1.5s;
  &:hover {
    clip-path: polygon(0 24px, 24px 0, 100% 0, 100% 35px, 232px 100%, 0 100%);
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
