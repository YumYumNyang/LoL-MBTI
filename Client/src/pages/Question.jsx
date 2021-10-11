import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BlueButton from '../components/BlueButton';
import GoldButton from '../components/GoldButton';
import Index from '../components/Index';
import { QuestionMapper } from '../utils/QuestionMapper';

const Question = ({ index, setIndex }) => {
  const question = QuestionMapper[index];
  const sessionCheck = window.sessionStorage.getItem(index);
  
  return (
    <Container>
      
      <Index index={index} />
      <Title>{question.question}</Title>
      <BlueButton
        isChecked={sessionCheck === 1}
        text={question.firstAnswer}
        onClick={() => {
          setIndex(index + 1);
          window.sessionStorage.setItem(JSON.stringify(index), '1');
          window.sessionStorage.setItem('index', JSON.stringify(index + 1));
        }}
      />
      <GoldButton
        isChecked={sessionCheck === 2}
        text={question.secondAnswer}
        onClick={() => {
          setIndex(index + 1);
          window.sessionStorage.setItem(JSON.stringify(index), '2');
          window.sessionStorage.setItem('index', JSON.stringify(index + 1));
        }}
      />
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
