import { useEffect, useState } from "react";
import { locationData } from "./api";
// import styled from "styled-components";
import Kakao from "./components/Kakao";
// import KakaoMap from "./components/KakaoMap";

const App = () => {
  const [placeData, setPlaceData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await locationData("카페");
        // const kakaoData = Kakao();
        setPlaceData(data);
        // console.log(data);
        // console.log(kakaoData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <Kakao />
      {/* <KakaoMap></KakaoMap> */}
      {/* <div id="map" style={{ width: "500px", height: "400px" }}></div> */}
    </div>
  );
};

export default App;
