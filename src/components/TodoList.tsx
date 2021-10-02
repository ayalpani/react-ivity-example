import { useSubscribeLayoutMode, useSubscribeTodoList } from "../AppState";
import Todo from "./Todo";

function TodoList() {
  console.log("render <TodoList>");

  const todoList = useSubscribeTodoList();
  const layoutMode = useSubscribeLayoutMode();

  if (todoList.length === 0) {
    return <div className="TodoListEmpty">EMPTY</div>;
  }

  return (
    <div className={`TodoList${layoutMode === "tiles" ? " tiles" : ""}`}>
      {todoList.map((todo) => (
        <Todo key={todo.id} todoId={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
