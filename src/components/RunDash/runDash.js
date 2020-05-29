import React from "react";
import "./style.css";
import RunData from "../RunData/runData";

//Use conditions based on call to colorcode the Run Status Box

//User Check will be a simple Yes or No button

//Run Last 7 Days

function RunDashboard() {
  return (
    <div className="RunDashboard">
      <RunData />
      {/* <div className="runStatus">Run Status</div> */}
      {/* <div className="runCheck">Run UserCheck</div>
      <div className="run7Days">Run 7 Days</div> */}
    </div>
  );
}

export default RunDashboard;
