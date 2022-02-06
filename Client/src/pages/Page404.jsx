import styled from "@emotion/styled";
import React from "react";

const Page404 = () => {
  return (
    <Container>
      404
      <br />
      없는 페이지 입니다.
    </Container>
  );
};

export default Page404;

const Container = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 100px auto;
`;
