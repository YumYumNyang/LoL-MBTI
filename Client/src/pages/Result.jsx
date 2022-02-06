import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { ResultMapper } from "../utils/ResultMapper";
import GoldCircle from "../components/GoldCircle";
import MovingCircle from "../components/MovingCircle";
import ImageCircle from "../components/ImageCircle";
import { MBTIdescMapper } from "../utils/MBTIdescMapper";
import GoldButton from "../components/GoldButton";
import { useNavigate, useParams } from "react-router-dom";
import BlueButton from "../components/BlueButton";
import BlueInlineButton from "../components/BlueInlineButton";
import YellowInlineButton from "../components/YellowInlineButton";

const { Kakao } = window;
const onKakaoShare = (answer) => {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: `나와 비슷한 성격의 리그오브레전드 챔피언은...?`,
      imageUrl: `http://localhost:3000/champ/${answer.name}.jpg`,
      description: `${answer.champ}!`,
      link: {
        mobileWebUrl: "http://localhost:3000/",
        webUrl: "http://localhost:3000/",
      },
    },
    buttons: [
      {
        title: "자세히 보기",
        link: {
          mobileWebUrl: `${window.location.href}`,
          webUrl: `${window.location.href}`,
        },
      },
      {
        title: "테스트 하러가기",
        link: {
          mobileWebUrl: "http://localhost:3000/",
          webUrl: "http://localhost:3000/",
        },
      },
    ],
  });
};
const Result = () => {
  const [answer, setAnswer] = useState({});
  const [desc, setDesc] = useState({title: '', desc: ''});
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    let [mbti, line] = params.resultId.split("-");
    setAnswer(ResultMapper.find((el) => el.mbti === mbti && el.line === line));
    setDesc({ title: MBTIdescMapper[mbti][0], desc: MBTIdescMapper[mbti][1] });
  }, [params.resultId]);
  
  const onCopy = () => {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert('링크 복사됨');
  }

  
  return (
    <Container>
      <Helmet>
        <title>나와 비슷한 성격의 리그오브레전드 챔피언은...?</title>
        <meta
          name="description"
          content={answer.champ}
          data-react-helmet="true"
        />
        <meta
          name="og:description"
          content={answer.champ}
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content={"나와 비슷한 성격의 리그오브레전드 챔피언은...?"}
          data-react-helmet="true"
        />
        <meta
          property="og:image"
          content={`http://8363-222-97-240-97.ngrok.io/result/${answer.eng}.jpg`}
          data-react-helmet="true"
        />
        <meta
          property="og:site_name"
          content="롤 MBTI 테스트"
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={answer.champ}
          data-react-helmet="true"
        />
      </Helmet>
      <SubTitle>
        나와 비슷한 성격의
        <br /> 리그오브레전드 챔피언은..?
      </SubTitle>
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
      <Share>
        테스트 결과가 마음에 드셨나요?
        <br /> 친구에게 결과를 공유해보세요!
      </Share>
      <BlueInlineButton onClick={onCopy} text="링크 공유하기" />
      <YellowInlineButton
        onClick={() => onKakaoShare(answer)}
        text="카카오톡 공유하기"
      />
      <BlueButton
        onClick={() => {
          window.sessionStorage.clear();
          navigate("/");
        }}
        text="테스트 다시하기"
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

export default Result;

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