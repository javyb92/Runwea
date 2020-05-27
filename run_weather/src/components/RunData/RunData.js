import React, { useContext, useState, useEffect } from "react";
import WeatherContext from "../../utils/context/WeatherContext";
import RunStatusCard from "../RunStatusCard/RunStatusCard";
import "./style.css";

const RunData = (props) => {
  const city = useContext(WeatherContext);
  const [value, setValue] = useState(0);
  const [ctmessage, setCTMessage] = useState("");
  const [htmessage, setHTMessage] = useState("");
  const [ltmessage, setLTMessage] = useState("");
  const [hmdmessage, setHMDMessage] = useState("");
  const [uvmessage, setUVMessage] = useState("");

  useEffect(() => {
    getValue();
    getMessages();
  }, [city]);

  //make seperate messages with each value

  const getValue = () => {
    setValue(0);
    //CURRENT TEMP//
    if (city.CurrentTemperature > 90) {
      setValue((value) => value + 1);
    } else if (city.CurrentTemperature < 35) {
      setValue((value) => value + 1);
    } else {
      setValue((value) => value + 0);
    }
    //HI TEMP//
    if (city.HiToday > 90) {
      setValue((value) => value + 1);
    } else if (city.HiToday < 35) {
      setValue((value) => value + 1);
    } else {
      setValue((value) => value + 0);
    }
    //LO TEMP//
    if (city.LoToday > 50) {
      setValue((value) => value + 1);
    } else if (city.LoToday < 35) {
      setValue((value) => value + 1);
    } else {
      setValue((value) => value + 0);
    }
    //HUMIDITY//
    if (city.Humidity > 60) {
      setValue((value) => value + 1);
    } else {
      setValue((value) => value + 0);
    }
    //UV //
    if (city.uv > 6) {
      setValue((value) => value + 1);
    } else {
      setValue((value) => value + 0);
    }
    //WIND//
    if (city.Wind > 6) {
      setValue((value) => value + 1);
    } else {
      setValue((value) => value + 0);
    }
  };

  const getMessages = () => {
    //CURRENT TEMP//
    if (city.CurrentTemperature > 90) {
      setCTMessage("Too Hot");
    } else if (city.CurrentTemperature < 35) {
      setCTMessage("Too Cold");
    } else {
      setCTMessage("");
    }
    //HI TEMP//
    if (city.HiToday > 90) {
      setHTMessage("Expected to be Hot");
    } else if (city.HiToday < 35) {
      setHTMessage("Expected to be Cold");
    } else {
      setHTMessage("");
    }
    //LO TEMP//
    if (city.LoToday > 50) {
      setLTMessage("");
    } else if (city.LoToday < 35) {
      setLTMessage("It will be too Cold to run at certain hours");
    } else {
      setLTMessage("");
    }
    //HUMIDITY//
    if (city.Humidity > 60) {
      setHMDMessage("Hydrate plenty, or plan on running later");
    } else {
      setHMDMessage("");
    }
    //UV //
    if (city.uv > 6) {
      setUVMessage("UV Levels are high");
    } else {
      setUVMessage("");
    }
  };

  return (
    <RunStatusCard
      number={value}
      currenttemp={ctmessage}
      hitemp={htmessage}
      lotemp={ltmessage}
      humidity={hmdmessage}
      uv={uvmessage}
    />
  );
};

export default RunData;
