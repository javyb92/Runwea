import React, { useState, useEffect } from "react";
import "./style.css";
import "../SearchBar/style.css";
import Dashboard from "../DashBoard/dashboard";
import logo from "../../img/logo.png";
import API from "../../utils/API";
import WeatherContext from "../SearchBar/WeatherContext";

function Search() {
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
              onChange={onChange}
            />
            <button type="submit" className="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </form>
          <div className="searched-cities">
            <p>searched cities</p>
          </div>
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
