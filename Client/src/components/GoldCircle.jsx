import React from 'react';
import styled from 'styled-components';

const GoldCircle = () => {
  return (
    <Circle
      width="324"
      height="324"
      viewBox="0 0 324 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.3658 162.308L19.8486 161.978L19.3658 161.647L0.417637 148.69C3.75326 108.319 22.1889 70.667 52.0756 43.1992C82.0193 15.6789 121.263 0.399095 162 0.4C202.737 0.399095 241.981 15.6789 271.924 43.1992C301.811 70.667 320.247 108.319 323.582 148.69L304.634 161.647L304.151 161.978L304.634 162.308L323.582 175.266C320.257 215.644 301.826 253.307 271.939 280.784C241.994 308.314 202.744 323.6 162 323.6C121.256 323.6 82.0062 308.314 52.0613 280.784C22.1735 253.307 3.74254 215.644 0.417574 175.266L19.3658 162.308Z"
        stroke="#FFECC9"
        strokeWidth="0.8"
      />
    </Circle>
  );
};

export default GoldCircle;

const Circle = styled.svg`
  z-index: 2;
  position: absolute;
  top: 13px;
  left: 13px;
`;
