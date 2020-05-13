import React from "react";
import NextDay from "../NextDay/NextDay";
import "./style.css";

//AXIOS CALL

//Map Out Incoming Responses for Forcasted Weather

//Use Momentjs somehow to configure forcasted dates

//Color Code days to decide good day to run

function ForcastedWeather() {
  return (
    <div className="ForcastedWeather">
      <NextDay />
    </div>
  );
}

export default ForcastedWeather;
