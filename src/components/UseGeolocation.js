import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
    error: null,
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
      error: null,
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      coordinates: { lat: 37.579236, lng: 126.96867 },
      error: { code: error.code, message: error.message },
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({ code: 0, message: "Geolocation not supported" });
      return;
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  // console.log(setLocation.coordinates);
  return location;
};

export default useGeolocation;
