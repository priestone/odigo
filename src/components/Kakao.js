import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { locationData } from "../api";

const Form = styled.form`
  input {
    all: unset;
    width: 300px;
    height: 30px;
    border: 1px solid #1d1d1d;
    border-radius: 5px;
  }
`;

const Kakao = () => {
  const mapContainer = useRef(null);
  const { kakao } = window;

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer.current, options);
      //   console.log("맵 객체:", map);
    } else {
      console.error("Kakao 객체를 로드하지 못했습니다.");
    }
  }, []);

  return (
    <>
      <Form>
        <input type="text" placeholder="작품명을 입력해주세요"></input>
      </Form>
      <div ref={mapContainer} style={{ width: "500px", height: "400px" }}></div>
    </>
  );
};

export default Kakao;
