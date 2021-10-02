import React from "react";
import { actionAddTodo, useSubscribeSelectedTodoIds } from "../AppState";
import TodoCancelSelectionButton from "./TodoCancelSelectionButton";
import TodoDeleteSelectedButton from "./TodoDeleteSelectedButton";
import TodoSelectedTodoIdsCounter from "./TodoSelectedTodoIdsCounter";

function TodoListActionsHeader() {
  console.log("render <TodoListActionsHeader>");

  const selectedTodoIds = useSubscribeSelectedTodoIds();
  const numSelectedTodoIds = Object.keys(selectedTodoIds).length;

  const addTodos = (numTodos: number = 1) => {
    for (let i = 0; i < numTodos; i++) {
      actionAddTodo();
    }
  };

  return (
    <div className="TodoListHeader TodoListActionsHeader">
      {numSelectedTodoIds === 0 && (
        <React.Fragment>
          <button onClick={() => addTodos(1)}>➕ 1</button>
          <button onClick={() => addTodos(10)}>➕ 10</button>
          <button onClick={() => addTodos(100)}>➕ 100</button>
          <button onClick={() => addTodos(1000)}>➕ 1000</button>
        </React.Fragment>
      )}

      {numSelectedTodoIds > 0 && (
        <React.Fragment>
          <TodoDeleteSelectedButton />
          <TodoCancelSelectionButton />
          <TodoSelectedTodoIdsCounter />
        </React.Fragment>
      )}

      <div style={{ flex: 1 }} />
    </div>
  );
}

export default TodoListActionsHeader;
