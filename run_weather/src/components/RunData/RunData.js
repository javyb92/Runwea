import React, { useContext, useState, useEffect } from "react";
import WeatherContext from "../../utils/context/WeatherContext";
import "./style.css";

function RunData() {
  const city = useContext(WeatherContext);
  const [value, setValue] = useState(0);

  useEffect(() => {
    getValue();
  }, [city]);

  const getValue = () => {
    setValue(0);
    //Current Temperature//
    if (city.CurrentTemperature > 90) {
      setValue((value) => value + 1);
      console.log("Too Hot Right Now");
    } else if (city.CurrentTemperature < 35) {
      setValue((value) => value + 1);
      console.log("Too Cold Right Now");
    } else {
      setValue((value) => value + 0);
      console.log("Good Temperature");
    }
    //Hi Temperaature//
    if (city.HiToday > 90) {
      setValue((value) => value + 1);
      console.log("Expected to be Hot");
    } else if (city.HiToday < 35) {
      setValue((value) => value + 1);
      console.log("Expected to be Cold");
    } else {
      setValue((value) => value + 0);
      console.log("Good Temperature Expected Today");
    }
    //Lo Temperature//
    if (city.LoToday > 50) {
      setValue((value) => value + 1);
      console.log("Good to Run Anytime");
    } else if (city.LoToday < 35) {
      setValue((value) => value + 1);
      console.log("It will be too Cold to run at certain hours");
    } else {
      setValue((value) => value + 0);
      console.log("Not Expected to be too Cold anytime");
    }
    //HUMIDITY//
    if (city.Humidity > 60) {
      setValue((value) => value + 1);
      console.log("Hydrate, Drink Electorlytes, or plan on running later");
    } else {
      setValue((value) => value + 0);
      console.log("Not too humid");
    }
    //UV //
    if (city.uv > 6) {
      setValue((value) => value + 1);
      console.log("UV Levels are high");
    } else {
      setValue((value) => value + 0);
      console.log("Low UV");
    }
    //WIND//
    if (city.Wind > 6) {
      setValue((value) => value + 1);
      console.log("High Winds");
    } else {
      setValue((value) => value + 0);
      console.log("Winds are low");
    }
  };

  console.log(city);
  return (
    <div className="runStatus" key={0}>
      {value}
    </div>
  );
}

export default RunData;
