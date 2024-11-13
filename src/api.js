const APIKEY = "3d9ed2aa-7786-4f16-89a6-90619bf6ce60";

const baseURL = `http://api.kcisa.kr/openapi/API_TOU_048/request?serviceKey=${APIKEY}&numOfRows=1&pageNo=1&keyword=`;

const options = {
  method: "GET",
  headers: {
    // resultCode: "string",
    // resultMsg: "string",
    accept: "application/json",
  },
};

export const locationData = (keyword) =>
  fetch(`${baseURL}${keyword}`, options).then((res) => res.json());
