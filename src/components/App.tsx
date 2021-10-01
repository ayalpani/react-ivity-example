import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";

function App() {
  console.log("render <App>");

  return (
    <div>
      <TodoListHeader />
      <TodoList />
    </div>
  );
}

export default App;
