import React from "react";
import { actionDeleteTodo } from "../AppState";

function TodoDeleteButton({ todoId }: { todoId: string }) {
  console.log(`render <TodoDeleteButton todoId="${todoId}">`);

  return <button onClick={() => actionDeleteTodo(todoId)}>DELETE</button>;
}

export default React.memo(TodoDeleteButton);
