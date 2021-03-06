// import React, { useContext, useState, useEffect } from "react";
import React, { useContext } from "react";
import "./style.css";
import WeatherContext from "../../utils/context/WeatherContext";
import WeatherAlert from "../weatheralert/weatheralert";
import WeatherIcons from "../weathericon/weathericon";

//WEATHERWARNING will be determined by actual warnings in area, if not block will disappear

const CurrentWeather = () => {
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

  return (
    <div className="currentWeather">
      <div className="currentLocation">
        <h1>{Location}</h1>
        <WeatherAlert />
      </div>
      <div className="conditions">
        <div className="condition" id="icon">
          <WeatherIcons code={IconCode} />
        </div>
        <div className="condition">
          <h2>
            <p className="CurrentTemp">{CurrentTemperature}°</p>
            <p>{Conditions}</p>
            <p>
              H {HiToday}° / L {LoToday}°
            </p>
          </h2>
        </div>
        <div className="condition">
          <h2>
            <p>Humidity: {Humidity}%</p>
            <p>Wind: {Wind} mph</p>
            <p>UV Index: {uv}</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
