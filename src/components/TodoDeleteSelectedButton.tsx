import { actionDeleteSelectedTodos } from "../AppState";

function TodoDeleteSelectedButton() {
  console.log("render <TodoDeleteSelectedButton>");

  return (
    <button
      onClick={() => actionDeleteSelectedTodos()}
      className="TodoDeleteSelectedButton"
    >
      🗑️
    </button>
  );
}

export default TodoDeleteSelectedButton;
