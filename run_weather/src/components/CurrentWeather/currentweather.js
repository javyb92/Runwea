import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import WeatherContext from "../../utils/context/WeatherContext";
import WeatherAlert from "../WeatherAlert/WeatherAlert";
import icon from "../../img/icons/icons/01d.png";
import WeatherIcon from "react-icons-weather";
import WeatherIcons from "../WeatherIcon/WeatherIcon";

//AXIOS CALL to get weather

//WEATHERWARNING will be determined by actual warnings in area, if not block will disappear

const CurrentWeather = () => {
  const [code, setCode] = useState("600");
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

  // setCode(IconCode);

  console.log(code);

  return (
    <div className="currentWeather">
      <div className="currentLocation">
        <h1>{Location}</h1>
      </div>
      <div className="conditions">
        <div className="condition" id="icon">
          {/* <WeatherIcon name="owm" iconId={code} flip="horizontal" rotate="90" /> */}
          <WeatherIcons code={IconCode} />
        </div>
        {/* <img className="logo" src={logo}></img> */}

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
