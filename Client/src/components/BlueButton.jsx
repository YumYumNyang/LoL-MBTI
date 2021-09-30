import React from 'react';
import styled from 'styled-components';

const BlueButton = ({ onClick, text }) => {
  return (
    <ButtonBorder>
      <Button onClick={onClick}>{text}</Button>
    </ButtonBorder>
  );
};

export default BlueButton;
const ButtonBorder = styled.div`
  display: flex;
  padding: 5px;
  width: 256px;
  border: 1px solid #ffecc9;
  margin-bottom: 14px;
  clip-path: polygon(0% 0%, 200% 0%, 0% 200%);
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
