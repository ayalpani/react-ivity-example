import { notifySubscribers, useSubscribe } from "react-ivity";

//////////////////// Types

export type LayoutMode = "list" | "tiles";

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export type TodoMap = {
  [todoId: string]: true;
};

//////////////////// AppState

export type AppState = {
  nightMode: boolean;
  layoutMode: LayoutMode;
  todoList: Todo[];
  selectedTodoIds: TodoMap;
};

const initialAppState: AppState = {
  nightMode: false,
  layoutMode: "list",
  todoList: [],
  selectedTodoIds: {},
};

const appState = initialAppState;

//////////////////// Subscribers

export function useSubscribeTodoList(): Todo[] {
  useSubscribe("todoList");
  return appState.todoList;
}

export function useSubscribeSelectedTodoIds(): TodoMap {
  useSubscribe("selectedTodoIds");
  return appState.selectedTodoIds;
}

export function useSubscribeTodoIsSelected(todoId: string): boolean {
  useSubscribe("selectedTodoIds-" + todoId);
  return appState.selectedTodoIds[todoId];
}

export function useSubscribeTodo(todoId: string): Todo | undefined {
  useSubscribe("todo-" + todoId);
  return appState.todoList.find((todo) => todo.id === todoId);
}

export function useSubscribeTodoIsDone(todoId: string): boolean | undefined {
  useSubscribe("todo-" + todoId + ".isDone");
  return appState.todoList.find((todo) => todo.id === todoId)?.isDone;
}

export function useSubscribeTodoTitle(todoId: string): string | undefined {
  useSubscribe("todo-" + todoId + ".title");
  return appState.todoList.find((todo) => todo.id === todoId)?.title;
}

export function useSubscribeNightMode(): boolean {
  useSubscribe("nightMode");
  return appState.nightMode;
}

export function useSubscribeLayoutMode(): LayoutMode {
  useSubscribe("layoutMode");
  return appState.layoutMode;
}

export function useSubscribeTodoCounter(): number {
  useSubscribe("todoCounter");
  return appState.todoList.length;
}

export function useSubscribeTodoDoneCounter(): number {
  useSubscribe("todoDoneCounter");
  return appState.todoList.filter((todo) => todo.isDone).length;
}

//////////////////// Actions

export function actionSetNightMode(isNightMode: boolean) {
  console.log("💥 actionSetNightMode");
  appState.nightMode = isNightMode;
  notifySubscribers("nightMode");
}

export function actionSetLayoutMode(value: LayoutMode) {
  console.log("💥 actionSetLayoutMode");
  appState.layoutMode = value;
  notifySubscribers("layoutMode");
}

let nextTodoId = 1;
export function actionAddTodo() {
  console.log("💥 actionAddTodo");

  appState.todoList.push({
    id: nextTodoId.toString(),
    isDone: false,
    title: "Todo #" + nextTodoId,
  });
  nextTodoId++;

  notifySubscribers("todoList");
  notifySubscribers("todoCounter");
  //notifySubscribers("todoDoneCounter");
}

export function actionToggleTodoIsSelected(todoId: string) {
  console.log("💥 actionToggleTodoIsSelected");

  if (appState.selectedTodoIds[todoId]) {
    delete appState.selectedTodoIds[todoId];
  } else {
    appState.selectedTodoIds[todoId] = true;
  }

  notifySubscribers("selectedTodoIds");
  notifySubscribers("selectedTodoIds-" + todoId);
}

export function actionToggleTodoIsDone(todoId: string) {
  console.log("💥 actionToggleTodoIsDone");

  appState.todoList = appState.todoList?.map((t) =>
    t.id === todoId ? { ...t, isDone: !t.isDone } : t
  );

  notifySubscribers("todo-" + todoId + ".isDone");
  notifySubscribers("todoDoneCounter");
}

export function actionSetTodoTitle(todoId: string, title: string) {
  console.log("💥 actionSetTodoTitle");

  appState.todoList = appState.todoList?.map((todo) =>
    todo.id === todoId ? { ...todo, title } : todo
  );

  notifySubscribers("todo-" + todoId + ".title");
}

export function actionDeleteTodo(todoId: string) {
  console.log("💥 actionDeleteTodo");

  appState.todoList = appState.todoList?.filter((todo) => todo.id !== todoId);
  delete appState.selectedTodoIds[todoId];

  notifySubscribers("todoList");
  notifySubscribers("todoCounter");
  notifySubscribers("todoDoneCounter");
}

export function actionDeleteAllTodos() {
  console.log("💥 actionDeleteAllTodos");

  nextTodoId = 1;
  appState.todoList = [];
  appState.selectedTodoIds = {};

  notifySubscribers("todoList");
  notifySubscribers("todoCounter");
  notifySubscribers("todoDoneCounter");
}

export function actionDeleteSelectedTodos() {
  console.log("💥 actionDeleteSelectedTodos");
  appState.todoList = appState.todoList.filter(
    (todo) => !appState.selectedTodoIds[todo.id]
  );
  appState.selectedTodoIds = {};

  notifySubscribers("todoList");
  notifySubscribers("todoCounter");
  notifySubscribers("todoDoneCounter");
  notifySubscribers("selectedTodoIds");
}

export function actionCancelSelection() {
  console.log("💥 actionCancelSelection");
  Object.keys(appState.selectedTodoIds).forEach((todoId) => {
    delete appState.selectedTodoIds[todoId];
    notifySubscribers("selectedTodoIds-" + todoId);
  });
  appState.selectedTodoIds = {};
  notifySubscribers("selectedTodoIds");
}

export function actionToggleNightMode() {
  console.log("💥 actionToggleNightMode");
  appState.nightMode = !appState.nightMode;
  notifySubscribers("nightMode");
}

declare global {
  interface Window {
    MyApp: {
      appState: AppState;
    };
  }
}

window.MyApp = {
  appState,
};
