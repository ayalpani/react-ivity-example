import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import TodoListActionsHeader from "./TodoListActionsHeader";
import { useSubscribeNightMode } from "../AppState";
import "./App.css";

function App() {
  console.log("render <App>");

  return (
    <div className={`App${useSubscribeNightMode() ? " nightMode" : ""}`}>
      <TodoListHeader />
      <TodoList />
      <TodoListActionsHeader />
    </div>
  );
}

export default App;
