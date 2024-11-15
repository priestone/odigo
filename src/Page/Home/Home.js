import styled from "styled-components";
import KakaoMap from "../../components/KakaoMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  padding: 13px 18px;
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

const SearchWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin: 0 auto; */
`;

const SearchBar = styled.div`
  width: 80%;
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
`;

const SearchBtn = styled.button`
  all: unset;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h3 {
    font-size: 12px;
  }
`;

const Home = () => {
  return (
    <>
      <KakaoMap></KakaoMap>

      <Container>
        <Logo>
          <h1>ㅇㄷㄱ</h1>
        </Logo>
        <SearchWrap>
          <SearchBar></SearchBar>
          <SearchBtn>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            {/* <h3>검색</h3> */}
          </SearchBtn>
        </SearchWrap>
      </Container>
    </>
  );
};

export default Home;
