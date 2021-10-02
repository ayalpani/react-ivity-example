import { actionCancelSelection } from "../AppState";

function TodoCancelSelectionButton() {
  console.log("render <TodoCancelSelectionButton>");

  return (
    <button
      onClick={() => actionCancelSelection()}
      className="TodoCancelSelectionButton"
    >
      CANCEL
    </button>
  );
}

export default TodoCancelSelectionButton;
