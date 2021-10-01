import React from "react";
import TodoCheckbox from "./TodoCheckbox";
import TodoDeleteButton from "./TodoDeleteButton";
import TodoTitle from "./TodoTitle";

function Todo({ todoId }: { todoId: string }) {
  console.log(`render <Todo todoId="${todoId}">`);

  return (
    <li className="Todo">
      <TodoDeleteButton todoId={todoId} />
      <TodoCheckbox todoId={todoId} />
      <TodoTitle todoId={todoId} />
    </li>
  );
}

export default React.memo(Todo);
