import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import BlueButton from "../components/BlueButton";
import GoldButton from "../components/GoldButton";
import GoldCircle from "../components/GoldCircle";
import ImageCircle from "../components/ImageCircle";
import MovingCircle from "../components/MovingCircle";

const Start = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <SubTitle>
        나와 비슷한 성격의
        <br /> 리그오브레전드 챔피언이 궁금하다면?
      </SubTitle>
      <ImageWrapper>
        <GoldCircle />
        <MovingCircle />
        <ImageCircle />
      </ImageWrapper>
      <Title>
        League of Legends <br />
        MBTI 테스트
      </Title>
      <BlueButton
        onClick={() => navigate("/test")}
        text="지금 테스트 시작하기"
      />
      <GoldButton
        onClick={() => navigate("/all")}
        text="모든 챔피언 구경하기"
      />
    </Container>
  );
};

export default Start;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;

const SubTitle = styled.div`
  margin-top: 30px;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

const ImageWrapper = styled.div`
  display: block;
  margin-top: 35px;
  position: relative;
  height: 350px;
  width: 350px;
`;

const Title = styled.div`
  margin: 30px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  text-align: center;

  color: #ffffff;

  /* border: 1px solid #493000; */
  text-shadow: 0px 4px 4px rgba(208, 168, 92, 0.3);
`;
