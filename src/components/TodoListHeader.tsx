import { actionAddTodo } from "../AppState";

function TodoListHeader() {
  console.log("render <TodoListHeader>");

  const addTodos = (numTodos: number = 1) => {
    for (let i = 0; i < numTodos; i++) {
      actionAddTodo();
    }
  };

  return (
    <div>
      <button onClick={() => addTodos(1)}>Add 1 Todo</button>
      <button onClick={() => addTodos(10)}>Add 10 Todos</button>
      <button onClick={() => addTodos(100)}>Add 100 Todos</button>
      <button onClick={() => addTodos(1000)}>Add 1000 Todos</button>
      <button onClick={() => addTodos(10000)}>Add 10000 Todos</button>
    </div>
  );
}

export default TodoListHeader;
