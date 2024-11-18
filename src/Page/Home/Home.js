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
    margin: 0 auto;
    padding: 0 15px;
  }
`;

const SearchButton = styled.button`
  all: unset;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
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
          <input placeholder="장소입력" type="text" />
          <SearchButton>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchButton>
        </SearchWrap>
      </Container>
    </>
  );
};

export default Home;
