import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { addTask } from "@/services/redux/features/todoListSlice";
import { ITodoList } from "@/services/type/todoList.interface";
import { useState, ChangeEvent } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(props: ITodoList) {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const buttonPressHandler = () => {
    dispatch(addTask({ id: props.id, task: { id: uuidv4(), title: value } }));
  };

  const tasks = props.tasks.map((task) => <p>{task.title}</p>);

  return (
    <div className="p-4 border border-greay-50 rounded-md">
      <h2 className="text-2xl font-bold mb-4">{props.name}</h2>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow mr-2 border border-gray-300 rounded px-2 py-1"
          placeholder="Enter a task"
          onChange={inputHandler}
          value={value}
        />
        <button
          onClick={buttonPressHandler}
          className="text-blue-500 hover:text-blue-600 text-3xl"
        >
          <BsFillPlusSquareFill />
        </button>
      </div>
      <div>{tasks}</div>
      <div className="mb-4">
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
    </div>
  );
}
