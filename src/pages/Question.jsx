import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { questionData } from "../assets/questiondata";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://img.freepik.com/premium-photo/cat-cartoon-images-background-copy-space_1179130-681134.jpg?semt=ais_hybrid&w=740")
    center/cover no-repeat;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 8px 14px;
  border-radius: 8px;
  margin-bottom: 20px;

  @media screen and (max-width: 780px) {
    font-size: 2.4rem;
    padding: 6px 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > button[type="button"] {
    width: 400px;
    height: 200px;
    font-size: 2rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    padding: 10px;
    & > button[type="button"] {
      width: 100%;
      height: 100%;
      font-size: 2.4rem;
    }
  }
`;

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  // const handleClickButtonA = (no, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };

  // const handleClickButtonB = (no, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + no;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNo(questionNo + 1);
  // };

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);
    if (questionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };
  return (
    <Container>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNo / questionData.length) * 100}
      />
      <Wrapper>
        <Title>{questionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            variant="warning"
            onClick={() => handleClickButton(1, questionData[questionNo].type)}
          >
            {questionData[questionNo].answera}
          </Button>
          <Button
            variant="warning"
            onClick={() => handleClickButton(0, questionData[questionNo].type)}
          >
            {questionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Question;
