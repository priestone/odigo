import { Map, MapMarker } from "react-kakao-maps-sdk";
import useGeolocation from "./useGeolocation";
import { useEffect, useState } from "react";
import { locationData } from "../api";

const DefaultKeyword = ["부산", "서울"];

const KakaoMap = () => {
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

        // console.log(allItems);
        setPlaceData(allItems);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userCenter]);

  // 이제 좌표값 이쁘게 바꾸기!!

  return (
    <Map
      center={mapcenter}
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: "-1",
      }}
      level={3}
    >
      {/* {placeData.map((position, index) => (
        <MapMarker
          key={index}
          position={position.coordinates} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
          title={position.title}
        />
      ))} */}
    </Map>
  );
};

export default KakaoMap;
