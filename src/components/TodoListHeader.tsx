import LayoutModeControl from "./LayoutModeControl";
import NightModeControl from "./NightModeControl";
import TodoProgressBar from "./TodoProgressBar";

function TodoListHeader() {
  console.log("render <TodoListHeader>");

  return (
    <div className="TodoListHeader">
      <LayoutModeControl />
      <TodoProgressBar />

      <div style={{ flex: 1 }} />

      <NightModeControl />
    </div>
  );
}

export default TodoListHeader;
