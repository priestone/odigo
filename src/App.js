import { useEffect, useState } from "react";
import { locationData } from "./api";

const App = () => {
  const [placeData, setPlaceData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await locationData("카페");

        setPlaceData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <div></div>;
};

export default App;
