const APIKEY = "3d9ed2aa-7786-4f16-89a6-90619bf6ce60";

const baseURL = `https://9vt921i7q6.execute-api.eu-north-1.amazonaws.com/development?serviceKey=${APIKEY}&numOfRows=50&pageNo=1&keyword=`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
};

export const locationData = (keyword) =>
  fetch(`${baseURL}${keyword}`, options).then((res) => res.json());
