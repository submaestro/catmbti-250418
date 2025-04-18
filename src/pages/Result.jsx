import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { resultdata } from "../assets/resultdata";
import KakaoShareButton from "../components/KakaoShareButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--light-color);
  background: url("https://img95.lovepik.com/photo/40108/4584.gif_wh860.gif")
    center/cover no-repeat;
`;

const Header = styled.div`
  background: var(--accent-color);
  color: var(--light-color);
  font-size: 4rem;
  margin-bottom: 20px;
  padding: 8px 14px;
  border-radius: 8px;
`;

const Contents = styled.div`
  color: var(--dark-color);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  & > button[type="button"] {
    font-size: 2rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  background: var(--accent-color);
  color: var(--light-color);

  margin-bottom: 20px;
  padding: 8px 14px;
  border-radius: 8px;
`;

const LogoImg = styled.div`
  width: 350px;
  height: 350px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 4px solid var(--border-color);
    border-radius: 50%;
  }
`;

const Desc = styled.div`
  font-size: 2rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 8px 14px;
  border-radius: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
  & > button[type="button"] {
    font-size: 2rem;
  }
`;

const Result = () => {
  const [resultData, setResultData] = useState();

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/");
  };

  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  useEffect(() => {
    const result = resultdata.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기😁</Title>
        <LogoImg>
          <img src={resultData?.image} alt="mainCat" />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는
          <br /> {resultData?.best}형 {resultData?.name} 입니다.
        </Desc>
        <ButtonGroup>
          <Button variant="warning" onClick={handleClickButton}>
            테스트 다시 시작하기
          </Button>
          <KakaoShareButton data={resultData} />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
