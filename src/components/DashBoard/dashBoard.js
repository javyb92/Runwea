import React from "react";
import CurrentWeather from "../CurrentWeather/currentweather";
import ForcastedWeather from "../ForecastedWeather/forcastWeather";
import RunDashboard from "../RunDash/runDash";
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
