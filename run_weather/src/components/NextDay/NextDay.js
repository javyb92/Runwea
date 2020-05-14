import React from "react";
import "./style.css";

const NextDay = (props) => {
  // console.log(this.props);
  const thisDay = props.app;

  console.log(thisDay);

  return (
    <div>
      <p>{thisDay.time}</p>
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
