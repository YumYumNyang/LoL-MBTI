import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import BlueButton from "../components/BlueButton";
import GoldButton from "../components/GoldButton";
import Index from "../components/Index";
import { QuestionMapper } from "../utils/QuestionMapper";
import { useNavigate } from "react-router-dom";
import { MBTIMapper } from "../utils/MBTIMapper";

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

  useEffect(() => {
    if (index >= 12) findResult();
  }, [index]);
  
  return (
    index < 12 && (
      <Container>
        <Title>{question.question}</Title>
        <BlueButton
          isChecked={pick === '1'}
          text={question.firstAnswer}
          onClick={() => {
            setIndex(index + 1);
            setPick('1');
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
            setIndex(index + 1);
            setPick("2");
            window.sessionStorage.setItem(JSON.stringify(index), 2);
            window.sessionStorage.setItem("index", JSON.stringify(index + 1));
            if (index === 11) {
              findResult();
            }
          }}
        />

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
  height: 100vh;
  margin: 0 auto;
`;

const Title = styled.div`
  margin: 50px 0;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  padding: 0 50px;
`;
