import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import WeatherContext from "../../utils/context/WeatherContext";

const WeatherAlert = () => {
  const { lat, lon } = useContext(WeatherContext);
  const [alert, setAlert] = useState([]);

  useEffect(() => {
    weatherAlerts();
  }, [lat, lon]);

  const weatherAlerts = (e) => {
    API.getWeatherAlert(lat, lon).then((res) => {
      setAlert(res.data);
    });
  };

  console.log(alert.alerts);

  return (
    <div className="condition">
      <p></p>
    </div>
  );
};

export default WeatherAlert;
