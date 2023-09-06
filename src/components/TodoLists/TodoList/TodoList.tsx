import { useState, ChangeEvent, KeyboardEvent, useRef } from "react";
import { BsFillPlusSquareFill, BsTrash3Fill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { addTask, setTodoLists } from "@/services/redux/features/todoListSlice";
import { ITodoList } from "@/services/type/todoList.interface";
import Task from "./Task/Task";

export default function TodoList(props: ITodoList) {
  const [inputValue, setInputValue] = useState("");
  const allTodolists = useAppSelector((state) => state.todoListSlice.todoLists);

  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTaskButtonHandler = () => {
    dispatch(
      addTask({
        id: props.id,
        task: { id: uuidv4(), title: inputValue, isDone: false },
      })
    );
    setInputValue("");
  };

  const enterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTaskButtonHandler();
      inputRef.current?.blur();
    }
  };

  const deleteTodoListButtonHandler = (todoId: string) => {
    dispatch(
      setTodoLists(allTodolists.filter((item: ITodoList) => item.id !== todoId))
    );
  };

  return (
    <div className="p-4 border border-greay-50 rounded-md">
      <h2 className="text-2xl font-bold mb-4">{props.name}</h2>
      <div className="flex mb-4">
        <input
          ref={inputRef}
          type="text"
          className="flex-grow mr-2 border border-gray-300 rounded px-2 py-1"
          placeholder="Enter a task"
          onChange={inputValueHandler}
          value={inputValue}
          onKeyPress={enterPressHandler}
        />
        <button
          onClick={addTaskButtonHandler}
          className="text-blue-500 hover:text-blue-600 text-3xl"
        >
          <BsFillPlusSquareFill />
        </button>
      </div>
      <div>
        {props.tasks.map((task) => {
          return (
            <Task
              key={task.id}
              taskId={task.id}
              taskTitle={task.title}
              todoId={props.id}
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center mb-4 mt-4">
        <div>
          <input type="radio" id="filter-all" name="filter" value="All" />
          <label htmlFor="filter-all" className="ml-2 mr-4">
            All
          </label>
          <input type="radio" id="filter-active" name="filter" value="Active" />
          <label htmlFor="filter-done" className="ml-2 mr-4">
            Active
          </label>
          <input
            type="radio"
            id="filter-completed"
            name="filter"
            value="Completed"
          />
          <label htmlFor="filter-inprocess" className="ml-2">
            Completed
          </label>
        </div>
        <button
          className="text-red-500 hover:text-red-400 text-3xl"
          onClick={() => deleteTodoListButtonHandler(props.id)}
        >
          <BsTrash3Fill />
        </button>
      </div>
    </div>
  );
}
