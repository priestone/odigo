import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import UseGeolocation from "./UseGeolocation";
import { locationData } from "../api";
import { useEffect, useState } from "react";

const parseLatLng = (coordinateString) => {
  const [latStr, lngStr] = coordinateString.split(", ");
  const lat = parseFloat(latStr.replace("N", ""));
  const lng = parseFloat(lngStr.replace("E", ""));
  return { lat, lng };
};

const KakaoMap = () => {
  const [placeData, setPlaceData] = useState("");
  const location = UseGeolocation();

  useEffect(() => {
    (async () => {
      try {
        const {
          response: {
            body: {
              items: { item },
            },
          },
        } = await locationData("카페");

        console.log("API Items:", item);

        const parsedItems = item.map((item) => {
          const { lat, lng } = parseLatLng(item.coordinates);
          return { ...item, lat, lng };
        });

        setPlaceData(parsedItems);
        // console.log(item);
        // console.log(kakaoData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
      >
        {placeData &&
          placeData.map((place, index) => (
            <MapMarker
              key={`${place.tel}`}
              position={{ lat: place.lat, lng: place.lng }} // 마커를 표시할 위치
              title={place.placeName} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            />
          ))}
      </Map>
    </>
  );
};

export default KakaoMap;
