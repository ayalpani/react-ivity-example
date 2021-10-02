import React from "react";
import { useSubscribeTodoCounter } from "../AppState";

function TodoCounter() {
  console.log("render <TodoCounter>");

  return <div className="TodoCounter">{useSubscribeTodoCounter()}</div>;
}

export default React.memo(TodoCounter);
