import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoListState } from "@/services/type/todoList.interface";

const initialState: ITodoListState = {
  todoListName: "",
  todoLists: [],
  tasks: [],
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
      });
    },
  },
});

export const { addTodoList, addTodoListName } = todoList.actions;
export default todoList.reducer;
