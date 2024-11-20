import styled from "styled-components";
import KakaoMap from "../../components/KakaoMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import View from "../View/View";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  padding: 13px 18px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 9;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  h1 {
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    line-height: 50px;
    color: #4a4a4a;
  }
`;

const SearchWrap = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  input {
    all: unset;
    width: 95%;
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
    /* margin: 0 auto; */
    padding: 0 15px;
  }
`;

const SearchButton = styled.button`
  all: unset;
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);
`;

const Home = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceClick = (place) => {
    console.log("Place clicked:", place); // 로그로 데이터 확인
    setSelectedPlace(place);
  };

  return (
    <>
      <KakaoMap onPlaceClick={handlePlaceClick}></KakaoMap>

      <Container>
        <Logo>
          <h1>ㅇㄷㄱ</h1>
        </Logo>
        <SearchWrap>
          <input placeholder="장소입력" type="text" />
          <SearchButton>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchButton>
        </SearchWrap>
      </Container>
      {selectedPlace && <View place={selectedPlace} />}
    </>
  );
};

export default Home;
