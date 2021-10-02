import React from "react";
import { actionSetLayoutMode, useSubscribeLayoutMode } from "../AppState";

function LayoutModeControl() {
  console.log("render <LayoutModeControl>");

  const layoutMode = useSubscribeLayoutMode();
  return (
    <div className="LayoutModeControl">
      <div
        className={`LayoutModeControlButton${
          layoutMode === "list" ? " active" : ""
        }`}
        onClick={() => actionSetLayoutMode("list")}
      >
        LIST
      </div>
      <div
        className={`LayoutModeControlButton${
          layoutMode === "tiles" ? " active" : ""
        }`}
        onClick={() => actionSetLayoutMode("tiles")}
      >
        TILES
      </div>
    </div>
  );
}

export default React.memo(LayoutModeControl);
