export interface Todo {
  isFinished: boolean;
  todo: string;
}

export interface TodoList {
  name: string;
  todos: Todo[];
}

export interface User {
  fullname: string;
  email: string;
  todoList: TodoList[];
}
