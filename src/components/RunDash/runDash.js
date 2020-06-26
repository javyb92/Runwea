import React from "react";
import "./style.css";
import RunData from "../rundata/rundata";

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
