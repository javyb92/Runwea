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

  console.log(status);

  const listMessages = messages.map((messages) => (
    <li key={messages}>{messages}</li>
  ));

  console.log(messages);

  if (status >= 11) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "#7e0600", color: "white" }}
      >
        <div className="statusIcon">
          <h3>CURRENT CONDITION</h3>
          <img src={require("../../img/icons/icons/STOP.png")}></img>
          <h3>TERRIBLE, DON'T RUN</h3>
        </div>
        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  } else if (status >= 9) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "#dc4d00", color: "white" }}
      >
        <div className="statusIcon">
          <h3>CURRENT CONDITION</h3>
          <img src={require("../../img/icons/icons/MOREWARNING.png")}></img>
          <h3>POOR</h3>
        </div>
        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  } else if (status >= 7) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "#ffd000", color: "white" }}
      >
        <div className="statusIcon">
          <h3>CURRENT CONDITION</h3>
          <img src={require("../../img/icons/icons/WARNING.png")}></img>
          <h3>FAIR</h3>
        </div>
        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  } else if (status >= 5) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "#30bf0c", color: "white" }}
      >
        <div className="statusIcon">
          <h3>CURRENT CONDITION</h3>
          <img src={require("../../img/icons/icons/GO.png")}></img>
          <h3>GOOD</h3>
        </div>
        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  } else if (status >= 1) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "#007bb1", color: "white" }}
      >
        <div className="statusIcon">
          <h3>CURRENT CONDITION</h3>
          <img src={require("../../img/icons/icons/GO FAST.png")}></img>
          <h3>PERFECT</h3>
        </div>
        <ul>
          <li>{listMessages}</li>
        </ul>
      </div>
    );
  } else if (status === 0) {
    return (
      <div
        className="runStatus"
        style={{ backgroundColor: "#7e0600", color: "white" }}
      >
        <p>CITY NOT FOUND, ENTER A VALID CITY OR TRY AGAIN LATER</p>
      </div>
    );
  }
};

export default RunStatusCard;
