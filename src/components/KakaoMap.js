import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import useGeolocation from "./useGeolocation";
import { useEffect, useState } from "react";
import { locationData } from "../api";

const DefaultKeyword = ["부산", "서울"];

const convertCoordinates = (coordinates) => {
  const [latRaw, lngRaw] = coordinates.split(", ");

  const latValue = parseFloat(latRaw.substring(1)); // N/S 제거
  const lngValue = parseFloat(lngRaw.substring(1)); // E/W 제거

  // 방향에 따라 부호 결정
  const lat = latRaw.startsWith("N") ? latValue : -latValue;
  const lng = lngRaw.startsWith("E") ? lngValue : -lngValue;

  return { lat, lng };
};

const KakaoMap = ({ onPlaceClick }) => {
  const [mapcenter, setMapcenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [placeData, setPlaceData] = useState([]);
  // const Data = locationData("부산");
  const userCenter = useGeolocation();
  // console.log(userCenter.coordinates);

  useEffect(() => {
    (async () => {
      try {
        setMapcenter(userCenter.coordinates);

        const responses = await Promise.all(
          DefaultKeyword.map((keyword) => locationData(keyword))
        );

        const allItems = responses.flatMap((res) => {
          if (!res?.response?.body?.items?.item) return []; // 데이터가 없으면 빈 배열 반환
          return res.response.body.items.item;
        });

        setPlaceData(allItems);
        // console.log(placeData[0].coordinates);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userCenter]);

  // 이제 좌표값 이쁘게 바꾸기!!
  const updatedPlaceData = placeData.map((position) => ({
    ...position,
    coordinates: convertCoordinates(position.coordinates),
  }));

  // console.log(updatedPlaceData);

  const EventMarkerContainer = ({ position }) => {
    const map = useMap();

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => map.panTo(marker.getPosition())}
      ></MapMarker>
    );
  };

  // const EventMarkerContainer = ({ position, place }) => {
  //   const map = useMap();

  //   return (
  //     <MapMarker
  //       position={position}
  //       onClick={() => {
  //         console.log("Marker position clicked:", position); // 로그 추가
  //         console.log("Place data:", place); // place 데이터 확인
  //         map.panTo(position);
  //         handleMarkerClick(place); // 클릭 이벤트 실행
  //       }}
  //     />
  //   );
  // };

  const handleMarkerClick = (place) => {
    console.log("Marker clicked:", place);
    onPlaceClick(place); // 클릭된 정보를 부모에게 전달
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
          place={value}
          onClick={() => handleMarkerClick(value)}
        />
      ))}
    </Map>
  );
};

export default KakaoMap;
