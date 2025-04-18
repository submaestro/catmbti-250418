import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  console.log(data);

  const url = "https://dogmbti-cat.netlify.app/";
  const resultURL = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("47087443b486b60aa18487a0f86ecf53");
    Kakao.isInitialized();
  }, []);

  const sharekakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비집사님이 고양이를 키운다면 잘 맞는 고양이는 ${data.name}입니다.`,
        imageUrl: `${url}${data.image}`,
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button variant="warning" onClick={sharekakao}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
