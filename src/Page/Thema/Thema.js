import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useText } from "../TextContext";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 73px 18px;
  /* flex-direction: column; */
  /* display: flex;
  justify-content: start;
  align-items: center; */
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
  /* width: 400px; */
  width: 100%;
  height: 250px;
  margin: 0 auto;
  /* display: flex; */
  /* justify-content: space-between; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* width: 100%; */
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  /* background-color: lightskyblue; */
  border-radius: 10px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  font-weight: 900;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
  margin: 10px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
    line-height: 200px;
  }
`;

const Thema = () => {
  const { setInputText } = useText();
  const category = [
    "카페",
    "식당",
    "호텔",
    "공원",
    "미술관",
    "박물관",
    "서울",
    "부산",
  ];
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수 가져오기

  const handleButtonClick = (category) => {
    setInputText(category); // 텍스트 설정
    navigate("/"); // Home 페이지로 이동
  };

  return (
    <Container>
      <Logo>
        <Link to={"/"}>
          <h1>ㅇㄷㄱ</h1>
        </Link>
      </Logo>

      <ThemaWrap>
        {category.map((category, index) => (
          <Button key={index} onClick={() => handleButtonClick(category)}>
            {category}
          </Button>
        ))}
      </ThemaWrap>
    </Container>
  );
};

export default Thema;
