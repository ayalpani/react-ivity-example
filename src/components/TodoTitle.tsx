import React from "react";
import { useSubscribeTodoTitle } from "../AppState";

function TodoTitle({ todoId }: { todoId: string }) {
  console.log(`render <TodoTitle todoId="${todoId}">`);

  const title = useSubscribeTodoTitle(todoId);
  return <span className="TodoTitle">{title}</span>;
}

export default React.memo(TodoTitle);
