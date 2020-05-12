import React, { useContext } from "react";
import "./style.css";
import WeatherContext from "../SearchBar/WeatherContext";

//AXIOS CALL to get weather

//WEATHERWARNING will be determined by actual warnings in area, if not block will disappear

function CurrentWeather() {
  const {
    Location,
    CurrentTemperature,
    HiToday,
    LoToday,
    Humidity,
    Conditions,
    Wind,
  } = useContext(WeatherContext);

  return (
    <div className="currentWeather">
      <div className="currentLocation">{Location}</div>
      <div className="conditions">
        <div className="condition">
          <ul>
            <li>{Conditions}</li>
            <li>{CurrentTemperature}</li>
            <li>{HiToday}</li>
            <li>{LoToday}</li>
          </ul>
        </div>
        <div className="condition">
          <ul>
            <li>{Humidity}</li>
            <li>{Wind}</li>
          </ul>
        </div>
        <div className="condition">WEATHERWARNING</div>
      </div>
    </div>
  );
}

export default CurrentWeather;
