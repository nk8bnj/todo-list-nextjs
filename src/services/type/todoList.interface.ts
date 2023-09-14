export interface ITask {
  id: string;
  title: string;
  isDone: boolean;
}

export interface ITodoList {
  id: string;
  name: string;
  tasks: ITask[];
}

export interface ITodoListState {
  todoLists: ITodoList[];
}

export type TFilter = "All" | "Active" | "Completed";
