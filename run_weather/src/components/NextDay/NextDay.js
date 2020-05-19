import React from "react";
import Moment from "react-moment";

import "./style.css";

const NextDay = (props) => {
  // console.log(this.props);
  const thisDay = props.app;

  return (
    <div className="nextDay">
      <h3>
        <Moment format="ddd">{thisDay.time}</Moment>
      </h3>
      <p>{thisDay.condition}</p>
      <p>
        Hi {thisDay.hi} / Lo {thisDay.lo}
      </p>
      <p>Humidity: {thisDay.humidity}</p>
      <p>Wind: {thisDay.wind}</p>
    </div>
  );
};

export default NextDay;
