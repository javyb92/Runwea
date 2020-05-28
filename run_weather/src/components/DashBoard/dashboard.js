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
      </section>
      <section className="RunDash">
        <RunDashboard />
      </section>
      <section className="ForecastDash">
        <ForcastedWeather />
      </section>
    </main>
  );
}

export default Dashboard;
