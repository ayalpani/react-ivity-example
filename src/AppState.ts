import { notifyCallbacks, useSubscribe } from "react-ivity";

//////////////////// Types

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

//////////////////// AppState

export type AppState = {
  nightMode: boolean;
  todoList: Todo[];
};

const initialAppState: AppState = {
  nightMode: false,
  todoList: [],
};

const appState = initialAppState;

//////////////////// Subscribers

export function useSubscribeNightMode(): boolean {
  useSubscribe("nightMode");
  return appState.nightMode;
}

export function useSubscribeTodoList(): Todo[] {
  useSubscribe("todoList");
  return appState.todoList;
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

//////////////////// Actions

export function actionSetNightMode(isNightMode: boolean) {
  console.log("actionSetNightMode");
  appState.nightMode = isNightMode;
  notifyCallbacks("nightMode");
}

let nextTodoId = 1;
export function actionAddTodo() {
  console.log("actionAddTodo");

  appState.todoList.push({
    id: nextTodoId.toString(),
    isDone: false,
    title: "Task #" + nextTodoId,
  });
  nextTodoId++;

  notifyCallbacks("todoList");
}

export function actionToggleTodoIsDone(todoId: string) {
  console.log("actionToggleTodoIsDone");
  appState.todoList = appState.todoList?.map((t) =>
    t.id === todoId ? { ...t, isDone: !t.isDone } : t
  );
  notifyCallbacks("todo-" + todoId + ".isDone");
}

export function actionSetTodoTitle(todoId: string, title: string) {
  console.log("actionSetTodoTitle");
  appState.todoList = appState.todoList?.map((todo) =>
    todo.id === todoId ? { ...todo, title } : todo
  );
  notifyCallbacks("todo-" + todoId + ".title");
}

export function actionDeleteTodo(todoId: string) {
  console.log("actionDeleteTodo");
  appState.todoList = appState.todoList?.filter((todo) => todo.id !== todoId);
  notifyCallbacks("todoList");
}
