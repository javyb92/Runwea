import React, { useContext, useState, useEffect } from "react";
import WeatherContext from "../../utils/context/WeatherContext";
import RunStatusCard from "../runstatuscard/runstatuscard";
import "./style.css";

const RunData = () => {
  const city = useContext(WeatherContext);
  const [value, setValue] = useState(0);
  const [ctmessage, setCTMessage] = useState("");
  const [htmessage, setHTMessage] = useState("");
  const [ltmessage, setLTMessage] = useState("");
  const [hmdmessage, setHMDMessage] = useState("");
  const [uvmessage, setUVMessage] = useState("");
  const [mainmessage, setMainMessage] = useState("");

  useEffect(() => {
    getValue();
  }, [city]);

  //make seperate messages with each value

  const getValue = () => {
    setValue(0);
    //CURRENT TEMP//
    if (city.CurrentTemperature > 100) {
      setValue((value) => value + 4);
      setCTMessage("HEAT: Extreme heat. Run Indoors.");
    } else if (city.CurrentTemperature >= 95) {
      setValue((value) => value + 3);
      setCTMessage("HEAT: Consider Running Indoors.");
    } else if (city.CurrentTemperature >= 85) {
      setValue((value) => value + 2);
      setCTMessage("HEAT: Avoid Direct Sunlight if Possible.");
    } else if (city.CurrentTemperature >= 75) {
      setValue((value) => value + 1);
      setCTMessage("HEAT: Wear light clothing. Hydrate!");
    } else if (city.CurrentTemperature <= 25) {
      setValue((value) => value + 3);
      setCTMessage("COLD: Avoid Outdoor Running");
    } else if (city.CurrentTemperature <= 35) {
      setValue((value) => value + 2);
      setCTMessage("COLD: Wear extra heavy layers. Remember to Hydrate!");
    } else if (city.CurrentTemperature <= 50) {
      setValue((value) => value + 1);
      setCTMessage("COLD: Wear extra layers. Hydrate!");
    } else {
      setValue((value) => value + 0);
      setCTMessage("");
    }
    //HI TEMP//
    if (city.HiToday > 100) {
      setValue((value) => value + 3);
      setHTMessage("HI: Expected Triple Digit Heat");
    } else if (city.HiToday < 32) {
      setValue((value) => value + 3);
      setHTMessage("HI: Expected Freezing Temperatures");
    } else {
      setValue((value) => value + 0);
      setHTMessage("");
    }
    //LO TEMP//
    if (city.LoToday < 32) {
      setValue((value) => value + 3);
      setLTMessage("LO: It will be too Cold to run at certain hours");
    } else if (city.LoToday < 50) {
      setValue((value) => value + 1);
      setLTMessage("LO: It will be chilly at certain hours");
    } else {
      setValue((value) => value + 0);
      setLTMessage("");
    }
    //HUMIDITY//
    if (city.Humidity > 85) {
      setValue((value) => value + 3);
      setHMDMessage("HUMIDITY: Expect Extreme Dehydration, Run Indoors If Hot");
    } else if (city.Humidity > 70) {
      setValue((value) => value + 2);
      setHMDMessage("HUMIDITY: Expect Fast Dehydration, Hydrate Frequently!");
    } else if (city.Humidity > 40) {
      setValue((value) => value + 1);
      setHMDMessage("HUMIDITY: Hydrate!");
    } else {
      setValue((value) => value + 0);
      setHMDMessage("");
    }
    //UV //
    if (city.uv > 10) {
      setValue((value) => value + 4);
      setUVMessage(
        "UV: Extreme risk of harm. Run indoors to avoid burning in minutes."
      );
    } else if (city.uv > 8) {
      setValue((value) => value + 3);
      setUVMessage(
        "UV: Very high risk of harm. Take extra precaution with skin and eyes."
      );
    } else if (city.uv >= 6) {
      setValue((value) => value + 2);
      setUVMessage(
        "UV: Run in Shaded Areas. Reduce time in Sun between 10am to 4pm."
      );
    } else if (city.uv >= 3) {
      setValue((value) => value + 1);
      setUVMessage("UV:  Wear Sunglasses, apply Sunscreen!");
    } else {
      setValue((value) => value + 0);
      setUVMessage("");
    }
    //WIND//
    if (city.Wind > 6) {
      setValue((value) => value + 1);
    } else {
      setValue((value) => value + 0);
    }
    //MAIN//
    if (city.Main == "Thunderstorm") {
      setValue((value) => value + 20);
      setMainMessage("CURRENT: THUNDERSTORM, STAY INDOORS.");
    } else if (city.Main == "Tornado") {
      setValue((value) => value + 20);
      setMainMessage("CURRENT: TORNADO, SEEK SHELTER.");
    } else if (city.Main == "Ash") {
      setValue((value) => value + 20);
      setMainMessage("CURRENT: ASH, SEEK SHELTER.");
    } else if (city.Main == "Smoke") {
      setValue((value) => value + 20);
      setMainMessage("CURRENT: SMOKE, SEEK SHELTER.");
    } else if (city.Main == "Sand") {
      setValue((value) => value + 4);
      setMainMessage("CURRENT: Sand, reccommend to stay indoors.");
    } else if (city.Main == "Dust") {
      setValue((value) => value + 4);
      setMainMessage("CURRENT: Dust, reccommend to stay indoors.");
    } else if (city.Main == "Squall") {
      setValue((value) => value + 4);
      setMainMessage("CURRENT: Squall, reccommend to stay indoors.");
    } else if (city.Main == "Haze") {
      setValue((value) => value + 4);
      setMainMessage("CURRENT: Haze, reccommend to stay indoors.");
    } else if (city.Main == "Snow") {
      setValue((value) => value + 4);
      setMainMessage("CURRENT: Snow, reccommend to stay indoors.");
    } else if (city.Main == "Rain") {
      setValue((value) => value + 3);
      setMainMessage("CURRENT: Rain, reccommend to stay indoors.");
    } else if (city.Main == "Drizzle") {
      setValue((value) => value + 3);
      setMainMessage("CURRENT: Drizzle, reccommend to stay indoors.");
    } else if (city.Main == "Mist") {
      setValue((value) => value + 2);
      setMainMessage("CURRENT: Mist, be cautious while running.");
    } else if (city.Main == "Fog") {
      setValue((value) => value + 2);
      setMainMessage(
        "CURRENT: Fog, be cautious while running with limited visiblity."
      );
    } else {
      setValue((value) => value + 1);
      setMainMessage("");
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
      main={mainmessage}
    />
  );
};

export default RunData;
