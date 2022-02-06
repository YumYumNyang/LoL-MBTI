import React from "react";
import styled from "@emotion/styled";
import { ResultMapper } from "../utils/ResultMapper";
import ChampButton from "../components/ChampButton.jsx";
import { useNavigate } from "react-router-dom";
import BlueButton from "../components/BlueButton";
const All = () => {
  const sets = new Set(
    ResultMapper.sort((a, b) => a.champ - b.champ).map((result) => result.champ)
  );
  const navigate = useNavigate();
  return (
    <Container>
      <SubTitle>다른 챔피언 구경하기</SubTitle>
      <Content>
        {Array.from(sets).map((champ) => {
          let item = ResultMapper.find((el) => el.champ === champ);
          return (
            <ChampButton
              onClick={() => navigate(`/champ/${item.mbti}-${item.line}`)}
              src={`./champ/${item.eng}.jpg`}
              name={item.champ}
            />
          );
        })}
      </Content>
      <BlueButton
        onClick={() => {
          window.sessionStorage.clear();
          navigate("/");
        }}
        text="지금 테스트하기"
      />
    </Container>
  );
};

export default All;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 100px 0;
`;
const Content = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  margin: 30px auto;
  gap: 20px 7px;
`;
const SubTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;