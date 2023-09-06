import { BsTrash3Fill, BsCheck2Square } from "react-icons/bs";

import { useAppDispatch } from "@/hooks/hooks";
import {
  deleteTask,
  changeIsDone,
} from "@/services/redux/features/todoListSlice";

interface ITaskProps {
  taskId: string;
  taskTitle: string;
  todoId: string;
}

export default function Task(props: ITaskProps) {
  const dispatch = useAppDispatch();

  const completeTaskButtonHandler = (selectedTaskId: string) => {
    dispatch(changeIsDone({ id: props.todoId, selectedTaskId }));
  };

  const deleteTaskButtonHandler = (selectedTaskId: string) => {
    dispatch(deleteTask({ id: props.todoId, selectedTaskId }));
  };

  return (
    <div key={props.taskId} className="flex items-center">
      <button
        className="text-red-500 hover:text-red-400 text-lg"
        onClick={() => deleteTaskButtonHandler(props.taskId)}
      >
        <BsTrash3Fill />
      </button>
      <p className="p-1 inline-block text-lg">{props.taskTitle}</p>
      <button
        className="text-green-500 hover:text-green-600 text-2xl"
        onClick={() => completeTaskButtonHandler(props.taskId)}
      >
        <BsCheck2Square />
      </button>
    </div>
  );
}
