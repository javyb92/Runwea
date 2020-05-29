import React, { useContext } from "react";
import ForecastContext from "../../utils/context/ForecastContext";
import NextDay from "../nextday/nextday";
import "./style.css";

//ALL Axios calls will go down to this next day "card"

function DaysAhead() {
  const forecast = useContext(ForecastContext);

  return (
    <div className="daysAhead">
      {forecast.map(function (day, index) {
        return <NextDay app={day} />;
      })}
    </div>
  );
}

export default DaysAhead;
