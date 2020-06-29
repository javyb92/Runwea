import React from "react";
import Moment from "react-moment";
import "./style.css";
import ForecastIcons from "../forecasticons/forecasticons";

const NextDay = (props) => {
  const thisDay = props.app;

  //Use Time, Icon, Condition, Hi, Lo tto determine Color of card
  return (
    <div className="nextDay">
      <div>
        <h3>
          <Moment unix format="ddd">
            {thisDay.time}
          </Moment>
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
    </div>
  );
};

export default NextDay;
