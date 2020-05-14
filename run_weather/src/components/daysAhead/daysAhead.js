import React, { useContext } from "react";
import ForecastContext from "../../utils/context/ForecastContext";
import NextDay from "../NextDay/NextDay";
import "./style.css";

//ALL Axios calls will go down to this next day "card"

function DaysAhead() {
  const forecast = useContext(ForecastContext);

  const day = forecast;

  return (
    <div className="daysAhead">
      {day.map(function (day, index) {
        return <NextDay app={day} />;
      })}
    </div>
  );
}

export default DaysAhead;
