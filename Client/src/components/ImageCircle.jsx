import React from 'react';
import styled from 'styled-components';

const ImageCircle = () => {
  return (
    <Circle>
      <img src="Yumi.jpeg" alt="yumi" />
    </Circle>
  );
};

export default ImageCircle;

const Circle = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  width: 300px;
  height: 300px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  border-radius: 100%;
  border: 0.5px solid #ffd78b;
`;
