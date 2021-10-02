import React from "react";
import { actionDeleteTodo } from "../AppState";

function TodoDeleteButton({ todoId }: { todoId: string }) {
  console.log(`render <TodoDeleteButton todoId="${todoId}">`);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        actionDeleteTodo(todoId);
      }}
      className="TodoDeleteButton"
    >
      ✕
    </button>
  );
}

export default React.memo(TodoDeleteButton);
