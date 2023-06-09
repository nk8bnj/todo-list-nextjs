import TodoList from "./TodoList";

export default function TodoLists() {
  return (
    <div className="grid grid-cols-4 gap-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 px-4">
      <TodoList />
    </div>
  );
}
