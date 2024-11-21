import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import useGeolocation from "./useGeolocation";
import { useEffect, useState } from "react";
import { locationData } from "../api";

const DefaultKeyword = ["카페", "식당"];

const convertCoordinates = (coordinates) => {
  const [latRaw, lngRaw] = coordinates.split(", ");

  const latValue = parseFloat(latRaw.substring(1)); // N/S 제거
  const lngValue = parseFloat(lngRaw.substring(1)); // E/W 제거

  // 방향에 따라 부호 결정
  const lat = latRaw.startsWith("N") ? latValue : -latValue;
  const lng = lngRaw.startsWith("E") ? lngValue : -lngValue;

  return { lat, lng };
};

const KakaoMap = ({ onMarkerClick, keyword }) => {
  const [mapcenter, setMapcenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [placeData, setPlaceData] = useState([]);
  const userCenter = useGeolocation();

  // console.log(userCenter.coordinates);

  useEffect(() => {
    (async () => {
      try {
        setMapcenter(userCenter.coordinates);

        const responses = await Promise.all(
          // DefaultKeyword.map((keyword) => locationData(keyword))
          keyword.map((kw) => locationData(kw))
        );

        const allItems = responses.flatMap((res) => {
          if (!res?.response?.body?.items?.item) return []; // 데이터가 없으면 빈 배열 반환
          return res.response.body.items.item;
        });

        setPlaceData(allItems);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userCenter, keyword]);

  const updatedPlaceData = placeData.map((position) => ({
    ...position,
    coordinates: convertCoordinates(position.coordinates),
  }));

  const EventMarkerContainer = ({ position, onClick }) => {
    const map = useMap();

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => {
          map.panTo(marker.getPosition());
          if (onClick) {
            onClick(marker);
          }
        }}
      ></MapMarker>
    );
  };

  return (
    <Map // 지도를 표시할 Container
      center={mapcenter}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
      level={3} // 지도의 확대 레벨
    >
      {updatedPlaceData.map((value, index) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.coordinates.lat}-${value.coordinates.lng}-${index}`}
          position={value.coordinates}
          onClick={() => {
            if (onMarkerClick) {
              console.log(value);
              onMarkerClick(value); // 클릭한 마커 정보를 전달
            }
          }}
        ></EventMarkerContainer>
      ))}
    </Map>
  );
};

export default KakaoMap;
