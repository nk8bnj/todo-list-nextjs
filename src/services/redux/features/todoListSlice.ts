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
      const todo = state.todoLists.filter(
        (todo) => todo.id === action.payload.id
      );
      todo[0].tasks.push(action.payload.task);
    },
  },
});

export const { addTodoList, setTodoLists, addTask } = todoList.actions;
export default todoList.reducer;
