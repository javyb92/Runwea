import React from "react";
import "./style.css";

function CurrentWeather() {
  return (
    <div className="currentWeather">
      <div className="currentLocation">LOCATION</div>
      <div className="conditions">
        <div className="condition">ICON-DEGREE</div>
        <div className="condition">HUMIDITY-UV</div>
        <div className="condition">WEATHERWARNING</div>
      </div>
    </div>
  );
}

export default CurrentWeather;
