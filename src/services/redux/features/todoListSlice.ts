import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ITask,
  ITodoListState,
  ITodoList,
} from "@/services/type/todoList.interface";

const initialState: ITodoListState = {
  todoLists: [],
};

export const todoList = createSlice({
  name: "totoList",
  initialState,
  reducers: {
    addTodoList: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.todoLists.push({
        id: action.payload.id,
        name: action.payload.name,
        tasks: [],
      });
    },
    setTodoLists(state, action: PayloadAction<ITodoList[]>) {
      state.todoLists = action.payload;
    },
    addTask(state, action: PayloadAction<{ id: string; task: ITask }>) {
      const selectedTodo = state.todoLists.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo?.tasks.push(action.payload.task);
    },
    deleteTask(state, action: PayloadAction<{ id: string; taskId: string }>) {
      const selectedTodo = state.todoLists.filter(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo[0].tasks = selectedTodo[0].tasks.filter(
        (task) => task.id !== action.payload.taskId
      );
    },
  },
});

export const { addTodoList, setTodoLists, addTask, deleteTask } =
  todoList.actions;
export default todoList.reducer;
