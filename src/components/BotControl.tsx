import React from "react";

declare global {
  interface Window {
    Telegram: any;
  }
}

function BotControl() {
  console.log("render <BotControl>");

  return (
    <div
      className={`BotControl`}
      onClick={() => {
        if (window.Telegram.WebApp !== undefined) {
          window.Telegram.WebApp.sendData({
            data: window.Telegram.WebApp.initData,
          });
        }
      }}
    >
      Bot
    </div>
  );
}

export default React.memo(BotControl);
