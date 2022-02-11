import React from 'react';
import styled from "@emotion/styled";
const circles = Array.from(new Array(12), (_, index) => index);

const Index = ({ index, setIndex }) => {
  return (
    <Container>
      {circles.map((circle, i) => (
        <Circle
          onClick={() =>  {
            if(circle <= index)  setIndex(i);
          }}
          key={circle}
          isDone={circle <= index}
        />
      ))}
      <Line />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 ;
  position: relative;
  
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${(props) => (props.isDone ? '#C8AA6E' : '#604b28')};
`;

const Line = styled.div`
  position: absolute;
  z-index: -1;
  width: 99%;
  box-sizing: border-box;
  border: 1px solid #d0a85c;
`;
