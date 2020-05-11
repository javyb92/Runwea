import React, { useContext } from "react";
import "./style.css";
import WeatherContext from "../../utils/WeatherContext";

//AXIOS CALL to get weather

//WEATHERWARNING will be determined by actual warnings in area, if not block will disappear

function CurrentWeather() {
  const { Location } = useContext(WeatherContext);
  return (
    <div className="currentWeather">
      <div className="currentLocation">{Location}</div>
      <div className="conditions">
        <div className="condition">ICON-DEGREE</div>
        <div className="condition">HUMIDITY-UV</div>
        <div className="condition">WEATHERWARNING</div>
      </div>
    </div>
  );
}

export default CurrentWeather;
