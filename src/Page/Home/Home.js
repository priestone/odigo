import styled from "styled-components";
import KakaoMap from "../../components/KakaoMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import View from "../View/View";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useText } from "../TextContext";
import Loading from "../../components/Loading";

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
  cursor: pointer;
`;

const ICON = styled.div`
  position: absolute;
  z-index: 1;
  top: 140px;
  right: 20px;
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
    top: unset;
    bottom: 30px;
    left: 430px;
  }
`;

const Home = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태
  const [keyword, setKeyword] = useState(["카페", "식당"]); // 초기 디폴트 키워드 설정
  const { inputText, setInputText } = useText(); // Context에서 상태와 업데이트 함수 가져오기
  const [localInput, setLocalInput] = useState(""); // 로컬 입력 상태 관리
  // const [isLoading, setIsLoading] = useState(true);

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalInput(value); // 입력 창 상태 업데이트
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword([localInput]); // 입력된 키워드로 마커 갱신
  };

  useEffect(() => {
    if (inputText) {
      setLocalInput(inputText); // 입력 창에 반영
      setKeyword([inputText]); // 마커 갱신
      setInputText(""); // Context 값 초기화
    }

    // const timer = setTimeout(() => {
    //   setIsLoading(false); // 로딩 해제
    // }, 2000); // 2초 동안 로딩 표시

    // return () => clearTimeout(timer); // 타이머 클린업
  }, [inputText, setInputText]);

  // setIsLoading(false);
  return (
    <>
      <Link to={"/thema"}>
        <ICON>
          <FontAwesomeIcon icon={faLayerGroup} />
        </ICON>
      </Link>

      <Container>
        <Logo>
          <h1>ㅇㄷㄱ</h1>
        </Logo>
        <SearchWrap onSubmit={handleSearchSubmit}>
          <input
            placeholder="장소입력"
            type="text"
            value={localInput}
            onChange={handleInputChange}
          />
          <SearchButton type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchButton>
        </SearchWrap>
      </Container>
      <View selectedPlace={selectedPlace} />

      <KakaoMap onMarkerClick={handlePlaceClick} keyword={keyword}></KakaoMap>
    </>
  );
};

export default Home;

{
  /* <>
<Link to={"/thema"}>
  <ICON>
    <FontAwesomeIcon icon={faLayerGroup} />
  </ICON>
</Link>

<Container>
  <Logo>
    <h1>ㅇㄷㄱ</h1>
  </Logo>
  <SearchWrap onSubmit={handleSearchSubmit}>
    <input
      placeholder="장소입력"
      type="text"
      value={localInput}
      onChange={handleInputChange}
    />
    <SearchButton type="submit">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </SearchButton>
  </SearchWrap>
</Container>
<View selectedPlace={selectedPlace} />

<KakaoMap
  onMarkerClick={handlePlaceClick}
  keyword={keyword}
></KakaoMap>
</> */
}
