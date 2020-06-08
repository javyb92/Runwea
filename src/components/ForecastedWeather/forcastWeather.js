import React, { useState, useContext, useEffect } from "react";
import API from "../../utils/API";
import DaysAhead from "../daysahead/daysahead";
import WeatherContext from "../../utils/context/WeatherContext";
import ForecastContext from "../../utils/context/ForecastContext";

const ForcastedWeather = () => {
  const [Forecast, setForecast] = useState([{}, {}, {}, {}, {}]);
  const { lat, lon } = useContext(WeatherContext);

  useEffect(() => {
    getForecast({});
  }, [lat, lon]);

  const getForecast = () => {
    API.getForcastWeather(lat, lon).then((res) => {
      console.log(res.data);
      setForecast([
        {
          time: res.data.daily[1].dt,
          icon: res.data.daily[1].weather[0].icon,
          hi: Math.round(res.data.daily[1].temp.max),
          lo: Math.round(res.data.daily[1].temp.min),
          condition: res.data.daily[1].weather[0].description,
          wind: Math.round(res.data.daily[1].wind_speed),
          humidity: res.data.daily[1].humidity,
        },
        {
          time: res.data.daily[2].dt,
          icon: res.data.daily[2].weather[0].icon,
          hi: Math.round(res.data.daily[2].temp.max),
          lo: Math.round(res.data.daily[2].temp.min),
          condition: res.data.daily[2].weather[0].description,
          wind: Math.round(res.data.daily[2].wind_speed),
          humidity: res.data.daily[2].humidity,
        },
        {
          time: res.data.daily[3].dt,
          icon: res.data.daily[3].weather[0].icon,
          hi: Math.round(res.data.daily[3].temp.max),
          lo: Math.round(res.data.daily[3].temp.min),
          condition: res.data.daily[3].weather[0].description,
          wind: Math.round(res.data.daily[3].wind_speed),
          humidity: res.data.daily[3].humidity,
        },
        {
          time: res.data.daily[4].dt,
          icon: res.data.daily[4].weather[0].icon,
          hi: Math.round(res.data.daily[4].temp.max),
          lo: Math.round(res.data.daily[4].temp.min),
          condition: res.data.daily[4].weather[0].description,
          wind: Math.round(res.data.daily[4].wind_speed),
          humidity: res.data.daily[4].humidity,
        },
        {
          time: res.data.daily[5].dt,
          icon: res.data.daily[5].weather[0].icon,
          hi: Math.round(res.data.daily[5].temp.max),
          lo: Math.round(res.data.daily[5].temp.min),
          condition: res.data.daily[5].weather[0].description,
          wind: Math.round(res.data.daily[5].wind_speed),
          humidity: res.data.daily[5].humidity,
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
