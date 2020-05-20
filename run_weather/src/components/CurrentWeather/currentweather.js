import React, { useContext } from "react";
import "./style.css";
import WeatherContext from "../../utils/context/WeatherContext";
import WeatherAlert from "../WeatherAlert/WeatherAlert";

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
    uv,
  } = useContext(WeatherContext);

  return (
    <div className="currentWeather">
      <div className="currentLocation">
        <h1>{Location}</h1>
      </div>
      <div className="conditions">
        <div className="condition" id="icon">
          PICTURE HERE
        </div>
        <div className="condition">
          <ul>
            <h2>
              <li>{CurrentTemperature}°</li>
              <li>{Conditions}</li>
              <li>
                H {HiToday}° / L {LoToday}°
              </li>
            </h2>
          </ul>
        </div>
        <div className="condition">
          <ul>
            <h2>
              <li>Humidity: {Humidity}%</li>
              <li>Wind: {Wind} mph</li>
              <li>UV Index: {uv}</li>
            </h2>
          </ul>
        </div>
        {/* <WeatherAlert /> */}
      </div>
    </div>
  );
}

export default CurrentWeather;
