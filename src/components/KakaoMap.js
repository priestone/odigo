import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import UseGeolocation from "./UseGeolocation";
import { locationData } from "../api";
import { useEffect, useState } from "react";

const defaultKeywords = ["카페", "식당", "부산"]; // 기본 키워드

const parseLatLng = (coordinateString) => {
  if (!coordinateString || !coordinateString.includes(",")) {
    console.error("Invalid coordinate string:", coordinateString);
    return { lat: 0, lng: 0 }; // 기본값 반환
  }

  const [latStr, lngStr] = coordinateString.split(", ");
  const lat = parseFloat(latStr.replace("N", "")) || 0;
  const lng = parseFloat(lngStr.replace("E", "")) || 0;
  return { lat, lng };
};

const KakaoMap = () => {
  const [placeData, setPlaceData] = useState([]);
  const [center, setCenter] = useState({ lat: 35.579236, lng: 126.96867 });
  const [isCenterSet, setIsCenterSet] = useState(false); // 사용자 위치로 중심 설정 여부
  const location = UseGeolocation();

  useEffect(() => {
    if (
      location.loaded &&
      location.coordinates.lat !== 0 &&
      location.coordinates.lng !== 0
    ) {
      console.log("Setting Center:", location.coordinates);
      setCenter(location.coordinates);
    }
  }, [location.loaded, location.coordinates]);

  useEffect(() => {
    console.log("Updated Center:", center);
  }, [center]);

  useEffect(() => {
    if (!location.loaded || location.error) return;

    (async () => {
      try {
        const responses = await Promise.all(
          defaultKeywords.map((keyword) => locationData(keyword))
        );

        const allItems = responses.flatMap((res) => {
          if (!res?.response?.body?.items?.item) return []; // 데이터가 없으면 빈 배열 반환
          return res.response.body.items.item;
        });

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
        // console.log("Place Data:", uniqueItems);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [location.loaded, location.error]);

  if (!location.loaded) return <p>Loading...</p>;
  if (location.error) return <p>Error: {location.error.message}</p>;

  return (
    <>
      <Map
        center={center}
        style={{
          width: `100%`,
          height: `100vh`,
          position: `fixed`,
          zIndex: `-1`,
        }}
        level={6}
      >
        {placeData.map((item, index) => {
          // console.log(center);
          const { lat, lng } = parseLatLng(item.coordinates);
          // console.log("Marker Position:", { lat, lng });
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
