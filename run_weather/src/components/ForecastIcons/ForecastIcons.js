import React, { useContext } from "react";
import ForecastContext from "../../utils/context/ForecastContext";
import "./style.css";

const ForecastIcons = (props) => {
  //   const { icon } = useContext(ForecastContext);

  const todayicon = props.icon;
  console.log(props.icon);
  //   console.log(ForecastContext);

  if (todayicon === "01d") {
    return <img src={require("../../img/icons/icons/01d.png")}></img>;
  } else if (todayicon === "01n") {
    return <img src={require("../../img/icons/icons/01n.png")}></img>;
  } else if (todayicon === "02d") {
    return <img src={require("../../img/icons/icons/02d.png")}></img>;
  } else if (todayicon === "02n") {
    return <img src={require("../../img/icons/icons/02n.png")}></img>;
  } else if (todayicon === "03d") {
    return <img src={require("../../img/icons/icons/03d.png")}></img>;
  } else if (todayicon === "03n") {
    return <img src={require("../../img/icons/icons/03n.png")}></img>;
  } else if (todayicon === "04d") {
    return <img src={require("../../img/icons/icons/04d.png")}></img>;
  } else if (todayicon === "04n") {
    return <img src={require("../../img/icons/icons/04n.png")}></img>;
  } else if (todayicon === "09d") {
    return <img src={require("../../img/icons/icons/09d.png")}></img>;
  } else if (todayicon === "09n") {
    return <img src={require("../../img/icons/icons/09n.png")}></img>;
  } else if (todayicon === "10d") {
    return <img src={require("../../img/icons/icons/10d.png")}></img>;
  } else if (todayicon === "10n") {
    return <img src={require("../../img/icons/icons/10n.png")}></img>;
  } else if (todayicon === "11d") {
    return <img src={require("../../img/icons/icons/11d.png")}></img>;
  } else if (todayicon === "11n") {
    return <img src={require("../../img/icons/icons/11n.png")}></img>;
  } else if (todayicon === "13d") {
    return <img src={require("../../img/icons/icons/13d.png")}></img>;
  } else if (todayicon === "13n") {
    return <img src={require("../../img/icons/icons/13n.png")}></img>;
  } else if (todayicon === "50d") {
    return <img src={require("../../img/icons/icons/50d.png")}></img>;
  } else if (todayicon === "50n") {
    return <img src={require("../../img/icons/icons/50n.png")}></img>;
  } else {
    return <p>Icons are unavailable at this time... Try again later</p>;
  }
};

export default ForecastIcons;
