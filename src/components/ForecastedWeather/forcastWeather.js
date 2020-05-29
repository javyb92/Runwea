import React, { useState, useContext, useEffect } from "react";
import API from "../../utils/API";
import DaysAhead from "../daysahead/daysahead";
import WeatherContext from "../../utils/context/WeatherContext";
import ForecastContext from "../../utils/context/ForecastContext";

const ForcastedWeather = () => {
  const [Forecast, setForecast] = useState([{}, {}, {}, {}, {}]);
  const { Location } = useContext(WeatherContext);

  useEffect(() => {
    getForecast({});
  }, [Location]);

  const getForecast = () => {
    API.getForcastWeather(Location).then((res) => {
      console.log(res.data);
      setForecast([
        {
          time: res.data.list[4].dt_txt,
          icon: res.data.list[4].weather[0].icon,
          hi: Math.round(res.data.list[0].main.temp_max),
          lo: Math.round(res.data.list[4].main.temp_min),
          condition: res.data.list[4].weather[0].description,
          wind: Math.round(res.data.list[4].wind.speed),
          humidity: res.data.list[4].main.humidity,
        },
        {
          time: res.data.list[7].dt_txt,
          icon: res.data.list[13].weather[0].icon,
          hi: Math.round(res.data.list[13].main.temp_max),
          lo: Math.round(res.data.list[9].main.temp_min),
          condition: res.data.list[13].weather[0].description,
          wind: Math.round(res.data.list[8].wind.speed),
          humidity: res.data.list[8].main.humidity,
        },
        {
          time: res.data.list[15].dt_txt,
          icon: res.data.list[15].weather[0].icon,
          hi: Math.round(res.data.list[21].main.temp_max),
          lo: Math.round(res.data.list[17].main.temp_min),
          condition: res.data.list[15].weather[0].description,
          wind: Math.round(res.data.list[16].wind.speed),
          humidity: res.data.list[16].main.humidity,
        },
        {
          time: res.data.list[23].dt_txt,
          icon: res.data.list[23].weather[0].icon,
          hi: Math.round(res.data.list[29].main.temp_max),
          lo: Math.round(res.data.list[25].main.temp_min),
          condition: res.data.list[23].weather[0].description,
          wind: Math.round(res.data.list[24].wind.speed),
          humidity: res.data.list[24].main.humidity,
        },
        {
          time: res.data.list[31].dt_txt,
          icon: res.data.list[31].weather[0].icon,
          hi: Math.round(res.data.list[37].main.temp_max),
          lo: Math.round(res.data.list[33].main.temp_min),
          condition: res.data.list[31].weather[0].description,
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
