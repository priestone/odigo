import styled from "styled-components";
import Loading from "../../components/Loading";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
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

  /* h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  } */

  @media screen and (min-width: 768px) {
    width: 374px;
    /* position: unset; */
    /* height: 80vh; */
    box-shadow: none;
    border-radius: 0;
    padding: 3% 0%;
    top: 130px;
    left: 18px;

    /* h4 {
      display: none;
    } */
  }
`;

const Con = styled.div`
  /* margin-top: 30px; */
  h1 {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 1px;
  }
  p {
    font-size: 14px;
    opacity: 0.7;
    margin-top: 10px;
    margin-bottom: 20px;
    /* margin-right: 10px; */
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    /* font-size: 14px; */
    /* opacity: 0.7; */
  }

  h2 {
    margin-top: 30px;
    font-size: 18px;
  }
`;

// const Con2 = styled.div`
//   margin-top: 30px;
//   display: none;
//   h1 {
//     margin-top: 10px;
//     font-size: 20px;
//     font-weight: 900;

//     span {
//       font-size: 14px;
//       opacity: 0.7;
//       margin-left: 10px;
//     }
//   }

//   h2 {
//     margin-top: 10px;
//     font-size: 18px;
//   }
//   @media screen and (min-width: 768px) {
//     display: block;
//   }
// `;

// const Conimg = styled.div`
//   width: 100%;
//   height: 180px;
//   background-color: lightgreen;
//   margin: 0 auto;
//   border-radius: 10px;
// `;

const View = ({ selectedPlace }) => {
  return (
    <div>
      {selectedPlace ? (
        <>
          <Container>
            {/* <h4>"00"에 대한 검색 결과</h4> */}
            <Con>
              {/* <Link to={"/detail"}> 시간 관계상 디테일 페이지 디자인 및 이미지 구현불가로 추후 업데이트 예정*/}
              {/* {console.log(selectedPlace)} */}
              <h1>{selectedPlace.placeName} </h1>
              <h4>영업시간</h4>
              <p>{selectedPlace.subDescription}</p>
              <h4>가게 번호</h4>
              <p>{selectedPlace.tel}</p>
              <h4>작품명</h4>
              <p>{selectedPlace.mediaTitle}</p>
              <h4>등장 상황</h4>
              <p>{selectedPlace.description}</p>
              {/* </Link> */}
            </Con>
          </Container>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default View;
