import { useEffect, useRef } from "react";

const Kakao = () => {
  const mapContainer = useRef(null);
  const { kakao } = window;

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer.current, options);
      //   console.log("맵 객체:", map);
    } else {
      console.error("Kakao 객체를 로드하지 못했습니다.");
    }
  }, []);
  return (
    <div ref={mapContainer} style={{ width: "500px", height: "400px" }}></div>
  );
};

export default Kakao;
