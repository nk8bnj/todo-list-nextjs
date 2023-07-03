import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask, ITodoListState } from "@/services/type/todoList.interface";

const initialState: ITodoListState = {
  todoListName: "",
  todoLists: [],
};

export const todoList = createSlice({
  name: "totoList",
  initialState,
  reducers: {
    addTodoListName: (state, action: PayloadAction<string>) => {
      state.todoListName = action.payload;
    },
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
    addTask(state, action: PayloadAction<{ id: string; task: ITask }>) {
      const todo = state.todoLists.filter(
        (todo) => todo.id === action.payload.id
      );
      todo[0].tasks.push(action.payload.task);
    },
  },
});

export const { addTodoList, addTodoListName, addTask } = todoList.actions;
export default todoList.reducer;
