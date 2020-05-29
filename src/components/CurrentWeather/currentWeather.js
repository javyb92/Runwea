import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import WeatherContext from "../../utils/context/WeatherContext";
import WeatherAlert from "../weatheralert/weatheralert";
import WeatherIcons from "../weathericon/weathericon";

//WEATHERWARNING will be determined by actual warnings in area, if not block will disappear

const CurrentWeather = () => {
  const [code, setCode] = useState("0");
  const {
    Location,
    CurrentTemperature,
    HiToday,
    LoToday,
    Humidity,
    Conditions,
    Wind,
    uv,
    IconCode,
  } = useContext(WeatherContext);

  useEffect(() => {
    getIcon();
  }, [IconCode]);

  const getIcon = () => {
    setCode(IconCode);
  };

  return (
    <div className="currentWeather">
      <div className="currentLocation">
        <h1>{Location}</h1>
      </div>
      <div className="conditions">
        <div className="condition" id="icon">
          <WeatherIcons code={IconCode} />
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
};

export default CurrentWeather;
