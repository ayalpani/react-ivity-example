import {
  useSubscribeTodoCounter,
  useSubscribeTodoDoneCounter,
} from "../AppState";
import TodoCounter from "./TodoCounter";
import TodoDoneCounter from "./TodoDoneCounter";

function TodoProgressBar({ splitterChar = "of" }: { splitterChar?: string }) {
  console.log("render <TodoProgressBar>");

  const todoCounter = useSubscribeTodoCounter();
  const todoDoneCounter = useSubscribeTodoDoneCounter();
  const percentage =
    todoCounter === 0 ? 0 : Math.floor((todoDoneCounter / todoCounter) * 100);

  return (
    <div className="TodoProgressBar" title={percentage + "%"}>
      <TodoDoneCounter />
      {splitterChar}
      <TodoCounter />
      <div
        className="TodoProgressBarPercentage"
        style={{ width: percentage + "%" }}
      />
    </div>
  );
}

export default TodoProgressBar;
