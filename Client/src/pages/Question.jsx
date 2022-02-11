import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import BlueButton from "../components/BlueButton";
import GoldButton from "../components/GoldButton";
import Index from "../components/Index";
import { QuestionMapper } from "../utils/QuestionMapper";
import { useNavigate } from "react-router-dom";
import { MBTIMapper } from "../utils/MBTIMapper";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";



const Question = ({ index, setIndex }) => {
  const question = QuestionMapper[index];
  
  const sessionCheck = window.sessionStorage.getItem(index);
  const [pick, setPick] = useState(sessionCheck);
  const navigate = useNavigate();

  function findResult() {
    let ansArr = [];
    let line = window.sessionStorage.getItem("line");
    for (let i = 0; i < 12; i++) {
      ansArr.push(window.sessionStorage.getItem(i));
    }
    let mbti = MBTIMapper(ansArr);
    navigate(`/result/${mbti}-${line}`);
  }

  const onNext = () => {
    if (pick) {
      if (index === 11) findResult();
      else setIndex(index + 1);
    }else{
      alert('답변을 선택해주세요!');
    }
   
  };
  const onBack = () => {
    if (index === 0) {
      navigate(-1);
      window.sessionStorage.clear();
    } else setIndex(index - 1);
  };
  
  useEffect(() => {
    if (index >= 12) findResult();
    setPick(sessionCheck);
  }, [index]);
  
  return (
    index < 12 && (
      <Container>
        <Content>
          <Title>{question.question}</Title>
          <BlueButton
            isChecked={pick === "1"}
            text={question.firstAnswer}
            onClick={() => {
              setPick("1");
              window.sessionStorage.setItem(JSON.stringify(index), 1);
              window.sessionStorage.setItem("index", JSON.stringify(index + 1));
              if (index === 11) {
                findResult();
              }
            }}
          />
          <GoldButton
            isChecked={pick === "2"}
            text={question.secondAnswer}
            onClick={() => {
              setPick("2");
              window.sessionStorage.setItem(JSON.stringify(index), 2);
              window.sessionStorage.setItem("index", JSON.stringify(index + 1));
              if (index === 11) {
                findResult();
              }
            }}
          />
          <Router>
            <BackButton onBack={onBack} />
            <NextButton onNext={onNext} />
          </Router>
        </Content>

        <Index index={index} setIndex={setIndex} />
      </Container>
    )
  );
};

export default Question;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  margin: 0 auto;
`;
const Router = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  div {
    cursor: pointer;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    color: #ffffff;
    padding: 20px 40px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin: 80px 0;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  padding: 0 50px;
`;
