import React from "react";
import "./style.css";

const ForecastIcons = (props) => {
  const todayicon = props.icon;

  if (todayicon === "01d") {
    return (
      <img
        src={require("../../img/icons/icons/01d.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "01n") {
    return (
      <img
        src={require("../../img/icons/icons/01n.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "02d") {
    return (
      <img
        src={require("../../img/icons/icons/02d.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "02n") {
    return (
      <img
        src={require("../../img/icons/icons/02n.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "03d") {
    return (
      <img
        src={require("../../img/icons/icons/03d.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "03n") {
    return (
      <img
        src={require("../../img/icons/icons/03n.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "04d") {
    return (
      <img
        src={require("../../img/icons/icons/04d.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "04n") {
    return (
      <img
        src={require("../../img/icons/icons/04n.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "09d") {
    return (
      <img
        src={require("../../img/icons/icons/09d.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "09n") {
    return (
      <img
        src={require("../../img/icons/icons/09n.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "10d") {
    return (
      <img
        src={require("../../img/icons/icons/10d.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "10n") {
    return (
      <img
        src={require("../../img/icons/icons/10n.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "11d") {
    return (
      <img
        src={require("../../img/icons/icons/11d.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "11n") {
    return (
      <img
        src={require("../../img/icons/icons/11n.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "13d") {
    return (
      <img
        src={require("../../img/icons/icons/13d.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "13n") {
    return (
      <img
        src={require("../../img/icons/icons/13n.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "50d") {
    return (
      <img
        src={require("../../img/icons/icons/50d.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else if (todayicon === "50n") {
    return (
      <img
        src={require("../../img/icons/icons/50n.png")}
        alt="Runwea Weather Forecast Icon"
      ></img>
    );
  } else {
    return <p>Icons are unavailable at this time... Try again later</p>;
  }
};

export default ForecastIcons;
