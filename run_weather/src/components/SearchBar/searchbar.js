import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";

function Searchbar() {
  const [weather, setWeather] = useState();

  function searchCity() {
    API.getCurrentWeather().then((res) => console.log(res.data));
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search for your area"
      />
      <button onClick={searchCity} type="submit" className="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
}

export default Searchbar;
