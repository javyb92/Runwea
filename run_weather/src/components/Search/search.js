import React, { useState, useEffect } from "react";
import "./style.css";
import "../SearchBar/style.css";
import Dashboard from "../DashBoard/dashboard";
import SearchedCities from "../Searched-Cities/Searched-Cities";
import logo from "../../img/logo.png";
import API from "../../utils/API";
import WeatherContext from "../../utils/context/WeatherContext";

function Search() {
  const [userInput, setUserInput] = useState([]);
  const [city, setCity] = useState("Dallas", {
    Location: "",
    CurrentTemperature: "",
    HiToday: "",
    LoToday: "",
    Humidity: "",
    Conditions: "",
    Wind: "",
    lat: "",
    lon: "",
    uv: "",
    IconCode: "",
  });
  // const [alert, setAlert] = useState([{ alerts: "" }]);

  useEffect(() => {
    API.getCurrentWeather(city).then((res) => {
      console.log(res.data);
      const IconCode = res.data.weather[0].icon;
      const Location = res.data.name;
      const CurrentTemperature = Math.round(res.data.main.temp);
      const HiToday = Math.round(res.data.main.temp_max);
      const LoToday = Math.round(res.data.main.temp_min);
      const Humidity = Math.round(res.data.main.humidity);
      const Conditions = res.data.weather[0].description;
      const Wind = Math.round(res.data.wind.speed);
      const lat = res.data.coord.lat;
      const lon = res.data.coord.lon;
      API.getUVIndex(lat, lon).then((res) => {
        const currentUV = Math.round(res.data[0].value);
        setCity({
          Location: Location,
          CurrentTemperature: CurrentTemperature,
          HiToday: HiToday,
          LoToday: LoToday,
          Humidity: Humidity,
          Conditions: Conditions,
          Wind: Wind,
          uv: currentUV,
          lat: lat,
          lon: lon,
          IconCode: IconCode,
        });
      });
    });
  }, [city]);

  const findCity = (e) => {
    e.preventDefault();
    setCity(userInput);
  };

  // const getAlert = (e) => {
  //   API.getWeatherAlert(city.lat, city.lon).then((res) => {
  //     console.log(res.data);
  //     if ()
  //     setAlert([{ severity: res.data.alerts[0].severity }]);
  //   });
  // };

  // console.log(alert);

  const onSubmit = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <WeatherContext.Provider value={city}>
      <nav className="container">
        <div className="logospace">
          <img className="logo" src={logo}></img>
          <h1>RUNWEA</h1>
        </div>
        <div className="search">
          <form onSubmit={findCity} className="searchbar">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search for your area"
              value={userInput}
              onChange={onSubmit}
            />
            <button type="submit" className="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="githubInfo">
          <a href="https://github.com/javyb92" className="github-link">
            <i class="fab fa-github-square"></i>
          </a>
        </div>
      </nav>
      <Dashboard />
    </WeatherContext.Provider>
  );
}

export default Search;
