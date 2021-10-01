import { useSubscribeTodoList } from "../AppState";
import Todo from "./Todo";

function TodoList() {
  console.log("render <TodoList>");
  const todoList = useSubscribeTodoList();

  return (
    <ul>
      {todoList.reverse().map((todo) => (
        <Todo key={todo.id} todoId={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
