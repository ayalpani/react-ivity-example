import React from "react";
import {
  actionToggleTodoIsSelected,
  useSubscribeTodoIsDone,
  useSubscribeTodoIsSelected,
} from "../AppState";
import TodoCheckbox from "./TodoCheckbox";
import TodoDeleteButton from "./TodoDeleteButton";
import TodoTitle from "./TodoTitle";

function Todo({ todoId }: { todoId: string }) {
  console.log(`render <Todo todoId="${todoId}">`);
  const todoIsSelected = useSubscribeTodoIsSelected(todoId);
  const todoIsDone = useSubscribeTodoIsDone(todoId);

  return (
    <div
      className={`Todo${todoIsSelected ? " isSelected" : ""}${
        todoIsDone ? " isDone" : ""
      }`}
      onClick={() => actionToggleTodoIsSelected(todoId)}
    >
      <TodoCheckbox todoId={todoId} />
      <TodoTitle todoId={todoId} />
      <TodoDeleteButton todoId={todoId} />
    </div>
  );
}

export default React.memo(Todo);
