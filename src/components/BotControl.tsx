import React from "react";
import { useSubscribeNightMode } from "../AppState";

declare global {
  interface Window {
    Telegram: any;
  }
}

function BotControl() {
  console.log("render <BotControl>");

  const nightMode = useSubscribeNightMode();
  return (
    <div
      className={`BotControl`}
      onClick={() => {
        if (window.Telegram.WebApp !== undefined) {
          window.Telegram.WebApp.sendData({
            initData: window.Telegram.WebApp.initData,
          });
        }
      }}
    >
      Bot
    </div>
  );
}

export default React.memo(BotControl);
