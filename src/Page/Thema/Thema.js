import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 73px 18px;
  /* flex-direction: column; */
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

const ThemaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ConWrap = styled.div`
  min-width: 410px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Con = styled.div`
  min-width: 100px;
  width: 100%;
  height: 200px;
  background-color: lightskyblue;
  border-radius: 4px;
  text-align: center;
  line-height: 200px;
  font-size: 24px;
  font-weight: 900;
`;

const Thema = () => {
  return (
    <Container>
      <Logo>
        <Link to={"/"}>
          <h1>ㅇㄷㄱ</h1>
        </Link>
      </Logo>

      <ThemaWrap>
        <ConWrap>
          <Con>카페</Con>
          <Con>식당</Con>
        </ConWrap>
        <ConWrap>
          <Con>숙소</Con>
          <Con>공원</Con>
        </ConWrap>
        <ConWrap>
          <Con>전시관</Con>
          <Con>관광지</Con>
        </ConWrap>
      </ThemaWrap>
    </Container>
  );
};

export default Thema;
