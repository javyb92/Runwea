import React, { useContext } from "react";
import WeatherContext from "../../utils/context/WeatherContext";
import "./style.css";

function WeatherIcons() {
  const { IconCode } = useContext(WeatherContext);

  if (IconCode === "01d") {
    return <img src={require("../../img/icons/icons/01d.png")}></img>;
  } else if (IconCode === "01n") {
    return <img src={require("../../img/icons/icons/01n.png")}></img>;
  } else if (IconCode === "02d") {
    return <img src={require("../../img/icons/icons/02d.png")}></img>;
  } else if (IconCode === "02n") {
    return <img src={require("../../img/icons/icons/02n.png")}></img>;
  } else if (IconCode === "03d") {
    return <img src={require("../../img/icons/icons/03d.png")}></img>;
  } else if (IconCode === "03n") {
    return <img src={require("../../img/icons/icons/03n.png")}></img>;
  } else if (IconCode === "04d") {
    return <img src={require("../../img/icons/icons/04d.png")}></img>;
  } else if (IconCode === "04n") {
    return <img src={require("../../img/icons/icons/04n.png")}></img>;
  } else if (IconCode === "09d") {
    return <img src={require("../../img/icons/icons/09d.png")}></img>;
  } else if (IconCode === "09n") {
    return <img src={require("../../img/icons/icons/09n.png")}></img>;
  } else if (IconCode === "10d") {
    return <img src={require("../../img/icons/icons/10d.png")}></img>;
  } else if (IconCode === "10n") {
    return <img src={require("../../img/icons/icons/10n.png")}></img>;
  } else if (IconCode === "11d") {
    return <img src={require("../../img/icons/icons/11d.png")}></img>;
  } else if (IconCode === "11n") {
    return <img src={require("../../img/icons/icons/11n.png")}></img>;
  } else if (IconCode === "13d") {
    return <img src={require("../../img/icons/icons/13d.png")}></img>;
  } else if (IconCode === "13n") {
    return <img src={require("../../img/icons/icons/13n.png")}></img>;
  } else if (IconCode === "50d") {
    return <img src={require("../../img/icons/icons/50d.png")}></img>;
  } else if (IconCode === "50n") {
    return <img src={require("../../img/icons/icons/50n.png")}></img>;
  } else {
    return null;
  }
}

export default WeatherIcons;
