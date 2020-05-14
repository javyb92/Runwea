import React, { useState, useContext, useEffect } from "react";
import API from "../../utils/API";
import NextDay from "../NextDay/NextDay";
import WeatherContext from "../../utils/context/WeatherContext";
import ForecastContext from "../../utils/context/ForecastContext";
import "./style.css";

//AXIOS CALL

//Map Out Incoming Responses for Forcasted Weather

//Use Momentjs somehow to configure forcasted dates

//Color Code days to decide good day to run

const ForcastedWeather = () => {
  const [Forecast, setForecast] = useState();
  const { Location } = useContext(WeatherContext);

  useEffect(() => {
    test({});
  }, [Location]);

  const test = () => {
    API.getForcastWeather(Location).then((res) => {
      setForecast([
        {
          Time: "Tomorrow",
          Hi: Math.round(res.data.list[0].main.temp_max),
          Lo: Math.round(res.data.list[0].main.temp_min),
          Condition: res.data.list[0].weather[0].main,
          Wind: Math.round(res.data.list[0].wind.speed),
          Humidity: res.data.list[0].main.humidity,
        },
        {
          Time: res.data.list[8].dt_txt,
          Hi: Math.round(res.data.list[8].main.temp_max),
          Lo: Math.round(res.data.list[8].main.temp_min),
          Condition: res.data.list[8].weather[0].main,
          Wind: Math.round(res.data.list[8].wind.speed),
          Humidity: res.data.list[8].main.humidity,
        },
        {
          Time: res.data.list[16].dt_txt,
          Hi: Math.round(res.data.list[16].main.temp_max),
          Lo: Math.round(res.data.list[16].main.temp_min),
          Condition: res.data.list[16].weather[0].main,
          Wind: Math.round(res.data.list[16].wind.speed),
          Humidity: res.data.list[16].main.humidity,
        },
        {
          Time: res.data.list[24].dt_txt,
          Hi: Math.round(res.data.list[24].main.temp_max),
          Lo: Math.round(res.data.list[24].main.temp_min),
          Condition: res.data.list[24].weather[0].main,
          Wind: Math.round(res.data.list[24].wind.speed),
          Humidity: res.data.list[24].main.humidity,
        },
        {
          Time: res.data.list[32].dt_txt,
          Hi: Math.round(res.data.list[32].main.temp_max),
          Lo: Math.round(res.data.list[32].main.temp_min),
          Condition: res.data.list[32].weather[0].main,
          Wind: Math.round(res.data.list[32].wind.speed),
          Humidity: res.data.list[32].main.humidity,
        },
      ]);
    });
  };
  console.log(Forecast);

  return (
    <ForecastContext.Provider value={Forecast}>
      <NextDay />
    </ForecastContext.Provider>
  );
};

export default ForcastedWeather;
