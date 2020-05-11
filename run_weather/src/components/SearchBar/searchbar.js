import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import WeatherContext from "../../utils/WeatherContext";

function Searchbar() {
  const [userInput, setUserInput] = useState("");
  const [city, setCity] = useState({
    Location: "",
    CurrentTemperature: "",
    HiToday: "",
    LoToday: "",
    Humidity: "",
    Conditions: "",
    Wind: "",
  });

  useEffect(() => {
    API.getCurrentWeather(city)
      .then((res) => {
        console.log(res.data);
        setCity({
          Location: res.data.name,
          CurrentTemperature: res.data.main.temp,
          HiToday: res.data.main.temp_max,
          LoToday: res.data.main.temp_min,
          Humidity: res.data.main.humidity,
          Conditions: res.data.weather[0].main,
          Wind: res.data.wind.speed,
        });
      })
      .then(console.log(city));
  }, [city]);

  const findCity = (e) => {
    e.preventDefault();
    setCity(userInput);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <WeatherContext.Provider value={city}>
      <form onSubmit={findCity} className="searchbar">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search for your area"
          value={userInput}
          onChange={onChange}
        />
        <button type="submit" className="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </WeatherContext.Provider>
  );
}

export default Searchbar;
