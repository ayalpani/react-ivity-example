import React from "react";
import { actionDeleteTodo, actionSetTodoTitle } from "../AppState";

export const TodoSaveButton = React.memo(
  ({
    todoId,
    title,
    onSave,
  }: {
    todoId: string;
    title: string;
    onSave: Function;
  }) => {
    console.log(`render <TodoSaveButton todoId="${todoId}">`);

    return (
      <button
        className="TodoSaveButton"
        onClick={() => {
          actionSetTodoTitle(todoId, title);
          onSave();
        }}
      >
        Save
      </button>
    );
  }
);
