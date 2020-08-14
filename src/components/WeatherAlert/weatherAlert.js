import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import WeatherContext from "../../utils/context/WeatherContext";

const WeatherAlert = () => {
  const { lat, lon } = useContext(WeatherContext);
  const [alert, setAlert] = useState([]);
  const [alertAmount, setAlertAmount] = useState();

  useEffect(() => {
    weatherAlerts();
  }, [lat, lon]);
  const weatherAlerts = (e) => {
    API.getWeatherAlert(lat, lon).then((res) => {
      try {
        setAlert("Top Alert: " + res.data.alerts[0].title);
        setAlertAmount("Total Alerts: " + res.data.alerts.length + " | ");
        console.log(res.data);
      } catch {
        setAlert(" ");
        setAlertAmount(" ");
      }
    });
  };

  return (
    <div className="condition1">
      <p>
        {alertAmount} {alert}
      </p>
    </div>
  );
};

export default WeatherAlert;
