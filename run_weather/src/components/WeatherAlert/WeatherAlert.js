import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import WeatherContext from "../../utils/context/WeatherContext";

function WeatherAlert() {
  const { lat, lon } = useContext(WeatherContext);
  API.getWeatherAlert(lat, lon).then((res) => {
    const lonny = res.data.alerts;
    // setAlert({ alert: lonny });
    console.log(lonny);
  });
  return <div className="condition">Hi</div>;
}

export default WeatherAlert;
