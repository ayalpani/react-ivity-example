import React from "react";
import { actionToggleTodoIsDone, useSubscribeTodoIsDone } from "../AppState";

function TodoCheckbox({ todoId }: { todoId: string }) {
  console.log(`render <TodoCheckbox todoId="${todoId}">`);

  const isDone = useSubscribeTodoIsDone(todoId);

  return (
    <input
      className="TodoCheckbox"
      type="checkbox"
      checked={isDone}
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => actionToggleTodoIsDone(todoId)}
    />
  );
}

export default React.memo(TodoCheckbox);
