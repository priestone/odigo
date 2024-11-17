import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import UseGeolocation from "./UseGeolocation";
import { locationData } from "../api";
import { useEffect, useState } from "react";

const defaultKeywords = ["카페", "식당"]; // 기본 키워드

const parseLatLng = (coordinateString) => {
  if (!coordinateString || !coordinateString.includes(",")) {
    console.error("Invalid coordinate string:", coordinateString);
    return { lat: 0, lng: 0 }; // 기본값 반환
  }

  const [latStr, lngStr] = coordinateString.split(", ");
  const lat = parseFloat(latStr.replace("N", ""));
  const lng = parseFloat(lngStr.replace("E", ""));
  return { lat, lng };
};

const KakaoMap = () => {
  const [placeData, setPlaceData] = useState([]);
  const location = UseGeolocation();

  useEffect(() => {
    (async () => {
      try {
        const responses = await Promise.all(
          defaultKeywords.map((keyword) => locationData(keyword))
        );

        const allItems = responses.flatMap(
          ({
            response: {
              body: {
                items: { item },
              },
            },
          }) => item
        );

        const uniqueItems = Array.from(
          new Set(
            allItems.map((item) => `${item.coordinates}-${item.placeName}`)
          )
        ).map((uniqueKey) =>
          allItems.find(
            (item) => `${item.coordinates}-${item.placeName}` === uniqueKey
          )
        );

        setPlaceData(uniqueItems);
        console.log("Place Data:", uniqueItems);
      } catch (error) {
        console.error(error);
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
        {placeData.map((item, index) => {
          const { lat, lng } = parseLatLng(item.coordinates);
          console.log("Marker Position:", { lat, lng });
          return (
            <MapMarker
              key={`${item.placeName}-${lat}-${lng}`}
              position={{ lat, lng }}
            >
              <div style={{ padding: "5px", color: "#000" }}>
                {item.placeName || "알 수 없는 장소"}
              </div>
            </MapMarker>
          );
        })}
      </Map>
    </>
  );
};

export default KakaoMap;
