import React from 'react';
import styled from "@emotion/styled";



const ImageCircle = ({ src }) => {
  return (
    <Circle>
      <img src={src ? src : "Yumi.jpeg"} alt={src} />
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
