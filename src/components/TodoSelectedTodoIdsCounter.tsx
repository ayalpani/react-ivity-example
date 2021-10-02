import { useSubscribeSelectedTodoIds } from "../AppState";

function TodoSelectedTodoIdsCounter() {
  console.log("render <TodoSelectedTodoIdsCounter>");

  const selectedTodoIds = useSubscribeSelectedTodoIds();
  const selectedTodoIdsCount = Object.keys(selectedTodoIds).length;

  return (
    <div className="TodoSelectedTodoIdsCounter">
      {selectedTodoIdsCount} <span>SELECTED</span>
    </div>
  );
}

export default TodoSelectedTodoIdsCounter;
