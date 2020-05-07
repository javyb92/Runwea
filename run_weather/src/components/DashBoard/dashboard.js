import React from "react";
import CurrentWeather from "../CurrentWeather/currentweather";
import ForcastedWeather from "../ForecastedWeather/forcastweather";
import RunDashboard from "../RunDash/rundash";
import "./style.css";

function Dashboard() {
  return (
    <main>
      <section className="WeatherDash">
        <CurrentWeather />
        <ForcastedWeather />
      </section>
      <section className="RunDash">
        <RunDashboard />
      </section>
    </main>
  );
}

export default Dashboard;
