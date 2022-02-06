import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { ResultMapper } from "../utils/ResultMapper";
import GoldCircle from "../components/GoldCircle";
import MovingCircle from "../components/MovingCircle";
import ImageCircle from "../components/ImageCircle";
import { MBTIdescMapper } from "../utils/MBTIdescMapper";
import GoldButton from "../components/GoldButton";
import { useNavigate, useParams } from "react-router-dom";
import BlueButton from "../components/BlueButton";

const Champ = () => {
  const [answer, setAnswer] = useState({});
  const [desc, setDesc] = useState({ title: "", desc: "" });
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    let [mbti, line] = params.champId.split("-");
    setAnswer(ResultMapper.find((el) => el.mbti === mbti && el.line === line));
    setDesc({ title: MBTIdescMapper[mbti][0], desc: MBTIdescMapper[mbti][1] });
  }, [params.champId]);

  return (
    <Container>
      <ImageWrapper>
        <GoldCircle />
        <MovingCircle />
        <ImageCircle src={`/champ/${answer.eng}.jpg`} />
      </ImageWrapper>
      <Content>
        <div className="mbti">{desc.title}</div>
        <div className="name">{answer.champ}</div>
        <div className="desc">{desc.desc}</div>
        <div className="desc">{answer.description}</div>
      </Content>
      <BlueButton
        onClick={() => {
          window.sessionStorage.clear();
          navigate("/");
        }}
        text="지금 테스트하기"
      />
      <GoldButton
        onClick={() => {
          window.sessionStorage.clear();
          navigate("/all");
        }}
        text="다른 챔피언 구경하기"
      />
    </Container>
  );
};

export default Champ;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  padding-top: 30px;
`;

const ImageWrapper = styled.div`
  display: block;
  margin-top: 35px;
  position: relative;
  height: 350px;
  width: 350px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: fit-content;
  margin: -175px 15px 30px 15px;
  padding: 200px 30px 40px 30px;
  border: 0.5px solid #d0a85c;
  color: #ffffff;

  .mbti {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0px 4px 4px rgba(208, 168, 92, 0.3);
    margin-bottom: 20px;
  }
  .desc {
    margin-bottom: 20px;
  }
`;

const Share = styled.div`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  padding: 30px 0;
`;
