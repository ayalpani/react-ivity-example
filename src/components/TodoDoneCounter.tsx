import React from "react";
import { useSubscribeTodoDoneCounter } from "../AppState";

function TodoDoneCounter() {
  console.log("render <TodoDoneCounter>");

  return <div className="TodoDoneCounter">{useSubscribeTodoDoneCounter()}</div>;
}

export default React.memo(TodoDoneCounter);
