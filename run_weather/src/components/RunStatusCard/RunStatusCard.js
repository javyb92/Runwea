import React from "react";
import "./style.css";

const RunStatusCard = (props) => {
  const status = props.number;

  const messages = [
    props.currenttemp,
    props.hitemp,
    props.lotemp,
    props.humidity,
    props.uv,
  ];

  console.log(messages);

  if (status >= 6) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "red", color: "white" }}
      >
        <img src={require("../../img/icons/icons/STOP.png")}></img>
        <h3>DON'T RUN, WORST CONDITIONS</h3>
        <ul>
          <li>{messages}</li>
        </ul>
      </div>
    );
  } else if (status === 5) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "orange", color: "white" }}
      >
        <img src={require("../../img/icons/icons/MOREWARNING.png")}></img>
        <h3>NOT RECCOMENDED TO RUN</h3>
        <ul>
          <li>{messages}</li>
        </ul>
      </div>
    );
  } else if (status === 4) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "yellow", color: "white" }}
      >
        <img src={require("../../img/icons/icons/WARNING.png")}></img>
        <h3>POOR CONDITIONS, TAKE CARE</h3>
        <ul>
          <li>{messages}</li>
        </ul>
      </div>
    );
  } else if (status === 3) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "green", color: "white" }}
      >
        <img src={require("../../img/icons/icons/GO.png")}></img>
        <h3>GOOD TO RUN</h3>
        <ul>
          <li>{messages}</li>
        </ul>
      </div>
    );
  } else if (status <= 2) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        <img src={require("../../img/icons/icons/GO FAST.png")}></img>
        <h3>PERFECT CONDITION</h3>
        <ul>
          <li>{messages}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "cyan", color: "white" }}
      >
        <ul>
          <li>{messages}</li>
        </ul>
      </div>
    );
  }
};

export default RunStatusCard;
