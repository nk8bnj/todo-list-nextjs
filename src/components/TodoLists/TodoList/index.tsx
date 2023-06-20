import { BsFillPlusSquareFill } from "react-icons/bs";

type TodoListType = {
  name: string;
};

export default function TodoList(props: TodoListType) {
  return (
    <div className="p-4 border border-greay-50 rounded-md">
      <h2 className="text-2xl font-bold mb-4">{props.name}</h2>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow mr-2 border border-gray-300 rounded px-2 py-1"
          placeholder="Enter a task"
        />
        <button className="text-blue-500 hover:text-blue-600 text-3xl">
          <BsFillPlusSquareFill />
        </button>
      </div>
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
