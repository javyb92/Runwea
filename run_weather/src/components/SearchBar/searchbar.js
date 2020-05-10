import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";

function Searchbar() {
  const [userInput, setUserInput] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    API.getCurrentWeather(city).then((res) => {
      console.log(res.data);
    });
  }, [city]);

  const findCity = (e) => {
    e.preventDefault();
    setCity(userInput);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
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
  );
}

export default Searchbar;
