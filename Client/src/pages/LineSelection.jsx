import React from 'react';
import styled from "@emotion/styled";
import LineButton from '../components/LineButton';

const lineMapper = [
  { type: "TOP", title: "상단(탑)", src: "top.png" },
  { type: "MID", title: "중단(미드)", src: "mid.png" },
  { type: "BOT", title: "하단(봇)", src: "bot.png" },
  { type: "JGL", title: "정글", src: "jgl.png" },
  { type: "SPT", title: "서포터", src: "spt.png" },
];

const LineSelection = ({ line, setLine }) => {
  return (
    <Container>
      <Img src="line.png"></Img>
      <Title>주로 가는 라인이 어디인가요?</Title>
      <LineContainer>
        {lineMapper.map((line) => (
          <LineButton
            key={line.type}
            onClick={() => {
              setLine(line.type);
              window.sessionStorage.setItem("line", line.type);
            }}
            title={line.title}
            src={line.src}
          ></LineButton>
        ))}
      </LineContainer>
    </Container>
  );
};

export default LineSelection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const Img = styled.img`
  width: 100%;
  margin: 30px 0;
`;
const Title = styled.div`
  position: fixed;
  top: 350px;
  font-family: Source Han Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
`;
const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
