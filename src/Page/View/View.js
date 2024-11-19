import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 330px;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  box-shadow: 0px -2px 8px 4px rgba(0, 0, 0, 0.07);
  padding: 3% 5%;
  /* display: none; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */

  h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 374px;
    position: unset;
    /* height: 80vh; */
    box-shadow: none;
    border-radius: 0;
    padding: 3% 0%;

    h4 {
      display: none;
    }
  }
`;

const Con = styled.div`
  margin-top: 30px;
  h1 {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 900;

    span {
      font-size: 14px;
      opacity: 0.7;
      margin-left: 10px;
    }
  }

  h2 {
    margin-top: 10px;
    font-size: 18px;
  }
`;

const Con2 = styled.div`
  margin-top: 30px;
  display: none;
  h1 {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 900;

    span {
      font-size: 14px;
      opacity: 0.7;
      margin-left: 10px;
    }
  }

  h2 {
    margin-top: 10px;
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Conimg = styled.div`
  width: 100%;
  height: 180px;
  background-color: lightgreen;
  margin: 0 auto;
  border-radius: 10px;
`;

const ICON = styled.div`
  position: absolute;
  bottom: 360px;
  right: 18px;
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);

  svg {
    height: 28px;
  }

  @media screen and (min-width: 768px) {
    bottom: 30px;
    left: 430px;
  }
`;

const View = () => {
  return (
    <Container>
      <Link to={"/thema"}>
        <ICON>
          <FontAwesomeIcon icon={faLayerGroup} />
        </ICON>
      </Link>
      <h4>"00"에 대한 검색 결과</h4>
      <Con>
        <Link to={"/detail"}>
          <Conimg></Conimg>
        </Link>
        <h1>
          00식당 <span>식당</span>
        </h1>
        <h2>작품명 : "더 킹 : 영원의 군주"</h2>
      </Con>
      <Con2>
        <Conimg></Conimg>
        <h1>
          00카페 <span>카페</span>
        </h1>
        <h2>작품명 : "도깨비"</h2>
      </Con2>
    </Container>
  );
};

export default View;
