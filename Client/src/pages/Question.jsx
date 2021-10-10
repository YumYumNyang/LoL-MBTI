import React from 'react';
import styled from 'styled-components';
import Index from '../components/Index';
import LineButton from '../components/LineButton';

const Question = ({ number, img, question, firstAns, secondAns }) => {
  return (
    <Container>
      <Index number={number} />
      <Title>?/</Title>
    </Container>
  );
};

export default Question;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 411px;
  min-width: 360px;
  height: 100%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-family: Source Han Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;
