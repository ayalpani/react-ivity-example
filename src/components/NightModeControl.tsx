import React from "react";
import { actionToggleNightMode, useSubscribeNightMode } from "../AppState";

function NightModeControl() {
  console.log("render <NightModeControl>");

  const nightMode = useSubscribeNightMode();
  return (
    <div
      className={`NightModeControl${nightMode ? " nightMode" : ""}`}
      onClick={() => actionToggleNightMode()}
    >
      {nightMode && (
        <React.Fragment>
          <div className="NightModeControlCaption">NIGHT</div>
          <div className="NightModeControlKnob" />
        </React.Fragment>
      )}
      {!nightMode && (
        <React.Fragment>
          <div className="NightModeControlKnob" />
          <div className="NightModeControlCaption right">DAY</div>
        </React.Fragment>
      )}
    </div>
  );
}

export default React.memo(NightModeControl);
