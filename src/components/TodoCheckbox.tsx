import React from "react";
import { actionToggleTodoIsDone, useSubscribeTodoIsDone } from "../AppState";

function TodoCheckbox({ todoId }: { todoId: string }) {
  console.log(`render <TodoCheckbox todoId="${todoId}">`);
  const isDone = useSubscribeTodoIsDone(todoId);

  return (
    <input
      type="checkbox"
      checked={isDone}
      onChange={() => actionToggleTodoIsDone(todoId)}
    />
  );
}

export default React.memo(TodoCheckbox);
