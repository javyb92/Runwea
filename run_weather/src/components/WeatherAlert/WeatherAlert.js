import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import WeatherContext from "../../utils/context/WeatherContext";

const WeatherAlert = () => {
  const [alerts, setAlerts] = useState();
  const [alert, setAlert] = useState({
    alert: "",
  });
  const { lat, lon } = useContext(WeatherContext);

  const getAlerts = async () => {
    API.getWeatherAlert(lat, lon).then((res) => {
      setAlert(res.data);
    });
  };

  useEffect(() => {
    getAlerts();
  }, [alerts]);

  return <div className="condition"></div>;
};

export default WeatherAlert;
