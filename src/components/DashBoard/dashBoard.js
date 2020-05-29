import React from "react";
import CurrentWeather from "../currentweather/currentweather";
import ForcastedWeather from "../forecastedweather/forcastweather";
import RunDashboard from "../rundash/rundash";
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
