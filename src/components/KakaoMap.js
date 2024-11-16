import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";
import UseGeolocation from "./UseGeolocation";

const KakaoMap = () => {
  const location = UseGeolocation();

  if (!location.loaded) return <p>Loading...</p>;
  if (location.error) return <p>Error: {location.error.message}</p>;

  return (
    <>
      <Map
        center={{
          lat: location.coordinates.lat,
          lng: location.coordinates.lng,
        }}
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
