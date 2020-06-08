// import React, { useState, useContext, useEffect } from "react";
// import "./style.css";
// import API from "../../utils/API";
// import WeatherContext from "../../utils/context/WeatherContext";

// const WeatherAlert = () => {
//   const { lat, lon } = useContext(WeatherContext);
//   const [alert, setAlert] = useState([]);

// useEffect(() => {
//   weatherAlerts();
// }, [lat, lon]);

// const weatherAlerts = (e) => {
//   API.getWeatherAlert(lat, lon).then((res) => {
//     setAlert([res.data]);
//     if (alert == [""]) {
//       console.log("No Alerts");
//     } else {
//       console.log(alert);
//     }
//   });
// };

//   return <div className="condition">Alerts >:(</div>;
// };

// export default WeatherAlert;
