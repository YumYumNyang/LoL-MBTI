import styled from "@emotion/styled";
import React from "react";

const ChampButton = ({ onClick, src, name }) => {
  return (
    <Container onClick={onClick}>
      <div
        dangerouslySetInnerHTML={{
          __html: `<svg width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
    <pattern
      id="pattern${src}"
      patternContentUnits="objectBoundingBox"
      width="100%"
      height="100%"
    >
      <image
        object-fit="cover"
        height="1.2"
        xlink:href="${src}"/>
    </pattern>
  </defs>
<path d="M25 102.6H0.4V53V28V3.4H25H50H99.6V102.6H75H62.5H56H55.8249L55.7061 102.729L49.9941 108.917L44.0383 102.723L43.9203 102.6H43.75H37.5H25Z" fill="url(#pattern${src})" stroke="#D0A85C" stroke-width="0.8" />
<path d="M23 102.5L25 105H37.5H43.75H46.875H48.4375L50 107L51.5625 105H53.125H56.25H62.5H75L77 102.5" stroke="#D0A85C" stroke-width="0.5" />
<path d="M10 3.5L13 1H50H86.5L89.5 3.5" stroke="#D0A85C" stroke-width="0.5"/>
</svg>
`,
        }}
      ></div>
      <span>{name}</span>
    </Container>
  );
};

export default ChampButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    color: #ffffff;
  }
`;
