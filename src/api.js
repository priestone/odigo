const APIKEY = "3d9ed2aa-7786-4f16-89a6-90619bf6ce60";

const baseURL = `http://api.kcisa.kr/openapi/API_TOU_048/request?serviceKey=${APIKEY}&numOfRows=50&pageNo=1&keyword=`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const locationData = (keyword) => {
  // 한글, 공백, 특수문자 인코딩
  const encodedKeyword = encodeURIComponent(keyword);

  return fetch(`${baseURL}${encodedKeyword}`, options).then((res) =>
    res.json()
  );
};
