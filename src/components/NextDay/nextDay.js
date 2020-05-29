import React from "react";
import Moment from "react-moment";
import "./style.css";
import ForecastIcons from "../forecasticons/forecasticons";

const NextDay = (props) => {
  const thisDay = props.app;

  //Use Time, Icon, Condition, Hi, Lo tto determine Color of card

  console.log(thisDay);

  return (
    <div className="nextDay">
      <h3>
        <Moment format="ddd">{thisDay.time}</Moment>
      </h3>
      <ForecastIcons icon={thisDay.icon} />
      <strong>
        <p className="condition">{thisDay.condition}</p>
      </strong>
      <p>
        Hi {thisDay.hi}° / Lo {thisDay.lo}°
      </p>
      <p>Humidity: {thisDay.humidity}%</p>
      <p>Wind: {thisDay.wind} mph</p>
    </div>
  );
};

export default NextDay;
