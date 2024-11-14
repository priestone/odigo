import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: `500px`, height: `500px` }}
        level={3}
      ></Map>
    </>
  );
};

export default KakaoMap;
