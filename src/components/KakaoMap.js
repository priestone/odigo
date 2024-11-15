import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

const KakaoMap = () => {
  return (
    <>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{
          width: `100%`,
          height: `100vh`,
          position: `fixed`,
          zIndex: `-1`,
        }}
        level={3}
      ></Map>
    </>
  );
};

export default KakaoMap;
