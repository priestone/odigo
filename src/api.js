// import { useRef } from "react";

const APIKEY = "3d9ed2aa-7786-4f16-89a6-90619bf6ce60";

const baseURL = `http://api.kcisa.kr/openapi/API_TOU_048/request?serviceKey=${APIKEY}&numOfRows=100&pageNo=1&keyword=`;

// const { kakao } = window;

const options = {
  method: "GET",
  headers: {
    // resultCode: "string",
    // resultMsg: "string",
    accept: "application/json",
  },
};
// const mapRef = useRef(null);
// const container = document.getElementById("map");
// const options = {
//   center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
//   level: 3, //지도의 레벨(확대, 축소 정도)
// };

export const locationData = (keyword) =>
  fetch(`${baseURL}${keyword}`, options).then((res) => res.json());

// export const Map = () => new kakao.maps.Map(container, options);
