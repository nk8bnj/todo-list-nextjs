export interface ITask {
  id: string;
  title: string;
}

export interface ITodoList {
  id: string;
  name: string;
}

export interface ITodoListState {
  todoListName: string;
  todoLists: ITodoList[];
  tasks: ITask[];
}
