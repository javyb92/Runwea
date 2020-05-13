import React, { useContext } from "react";
import "./style.css";
import WeatherContext from "../../utils/context/WeatherContext";

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

  console.log(Location);

  return (
    <div className="currentWeather">
      <div className="currentLocation">
        <h2>{Location}</h2>
      </div>
      <div className="conditions">
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
              <li>{Humidity}%</li>
              <li>{Wind} mph</li>
              <li>UV Index: {uv} out of 10</li>
            </h2>
          </ul>
        </div>
        <div className="condition">WEATHERWARNING</div>
      </div>
    </div>
  );
}

export default CurrentWeather;
