import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 73px 18px;
  flex-direction: column;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Logo = styled.div`
  width: 100px;
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  position: fixed;
  top: 13px;
  left: 18px;
  h1 {
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    line-height: 50px;
    color: #4a4a4a;
  }
`;

const Conimg = styled.div`
  width: 400px;
  height: 170px;
  background-color: royalblue;
  border-radius: 4px;
`;

const TextWrap = styled.div`
  width: 100%;

  h2 {
    margin-top: 10px;
    font-size: 14px;
  }

  h3 {
    font-size: 12px;
    margin-top: 10px;
    opacity: 0.7;
  }

  h4 {
    font-size: 14px;
    margin-top: 10px;
  }

  span {
    margin-top: 10px;
    opacity: 0.7;
    font-size: 14px;
  }
`;

const MainText = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: end;
  h1 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
    margin-left: 10px;
  }
`;

const Detail = () => {
  return (
    <Container>
      <Logo>
        <h1>ㅇㄷㄱ</h1>
      </Logo>

      <Conimg>
        <img src="" alt="" />
      </Conimg>

      <TextWrap>
        <MainText>
          <h1>내 주변 촬영지</h1>
          <p>식당</p>
        </MainText>
        <h2>작품명 : "더 킹 : 영원의 군주"</h2>
        <h3>"매일 00시 ~ 24시(휴무일 : 연중무휴)"</h3>
        <h4>주소 : "(49527)부산광역시 사하구 몰운대1길 14"</h4>
        <br />
        <h4>전화번호 : "051-220-5331"</h4>
        <h4>상황설명</h4>
        <span>
          "1회에서 이 해변을 처음으로 보게 되는데, 이 해변은 왕 이곤(이민호)이
          말 막시무스를 타고 모래 위를 질주한다."
        </span>
      </TextWrap>
      <Map
        center={{ lat: 35.579236, lng: 126.96867 }}
        style={{
          width: `400px`,
          height: `350px`,
          position: `fixed`,
          bottom: `0`,
          zIndex: `-1`,
          boxShadow: `0px 0px 4px 1px rgba(0,0,0,0.3)`,
        }}
        level={6}
      ></Map>
    </Container>
  );
};

export default Detail;
