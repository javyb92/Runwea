import React from "react";
import CurrentWeather from "../CurrentWeather/currentweather";
import ForcastedWeather from "../ForecastedWeather/forcastweather";
import "./style.css";

function Dashboard() {
  return (
    <main>
      <section className="WeatherDash">
        <CurrentWeather />
        <ForcastedWeather />
      </section>
      <section className="RunDash">RUNDASHBOARD</section>
    </main>
  );
}

export default Dashboard;
