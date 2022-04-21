import { useSubscribeNightMode } from "../AppState";
import "./App.css";
import TodoList from "./TodoList";
import TodoListActionsHeader from "./TodoListActionsHeader";
import TodoListHeader from "./TodoListHeader";

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
