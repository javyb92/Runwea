import React, { useState, useContext, useEffect } from "react";
import API from "../../utils/API";
import DaysAhead from "../daysAhead/daysAhead";
import WeatherContext from "../../utils/context/WeatherContext";
import ForecastContext from "../../utils/context/ForecastContext";
// import "./style.css";

//AXIOS CALL

//Map Out Incoming Responses for Forcasted Weather

//Use Momentjs somehow to configure forcasted dates
// HAH
//Color Code days to decide good day to run

const ForcastedWeather = () => {
  const [Forecast, setForecast] = useState([{}, {}, {}, {}, {}]);
  const { Location } = useContext(WeatherContext);

  useEffect(() => {
    getForecast({});
  }, [Location]);

  const getForecast = () => {
    API.getForcastWeather(Location).then((res) => {
      setForecast([
        {
          time: res.data.list[0].dt_txt,
          hi: Math.round(res.data.list[0].main.temp_max),
          lo: Math.round(res.data.list[0].main.temp_min),
          condition: res.data.list[0].weather[0].main,
          wind: Math.round(res.data.list[0].wind.speed),
          humidity: res.data.list[0].main.humidity,
        },
        {
          time: res.data.list[8].dt_txt,
          hi: Math.round(res.data.list[8].main.temp_max),
          lo: Math.round(res.data.list[8].main.temp_min),
          condition: res.data.list[8].weather[0].main,
          wind: Math.round(res.data.list[8].wind.speed),
          humidity: res.data.list[8].main.humidity,
        },
        {
          time: res.data.list[16].dt_txt,
          hi: Math.round(res.data.list[16].main.temp_max),
          lo: Math.round(res.data.list[16].main.temp_min),
          condition: res.data.list[16].weather[0].main,
          wind: Math.round(res.data.list[16].wind.speed),
          humidity: res.data.list[16].main.humidity,
        },
        {
          time: res.data.list[24].dt_txt,
          hi: Math.round(res.data.list[24].main.temp_max),
          lo: Math.round(res.data.list[24].main.temp_min),
          condition: res.data.list[24].weather[0].main,
          wind: Math.round(res.data.list[24].wind.speed),
          humidity: res.data.list[24].main.humidity,
        },
        {
          time: res.data.list[32].dt_txt,
          hi: Math.round(res.data.list[32].main.temp_max),
          lo: Math.round(res.data.list[32].main.temp_min),
          condition: res.data.list[32].weather[0].main,
          wind: Math.round(res.data.list[32].wind.speed),
          humidity: res.data.list[32].main.humidity,
        },
      ]);
    });
  };

  return (
    <ForecastContext.Provider value={Forecast}>
      <DaysAhead />
    </ForecastContext.Provider>
  );
};

export default ForcastedWeather;
