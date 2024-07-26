import { Task } from "../../interfaces/Task";
import TaskActionIconGroup from "./TaskActionIconGroup";

interface TaskItemProps {
  task: Task;
}

const classes = {
  pending: "border bg-yellow-100 border-yellow-800",
  inProgress: "border bg-blue-100 border-blue-800",
  completed: "border bg-green-100 border-green-800",
  archived: "border bg-gray-100 border-gray-800"
};

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <div
      className={`${
        classes[task.status]
      } relative w-[350px] max-h-[150px] overflow-hidden text-ellipsis flex items-start rounded-md pr-2 pl-0 py-1 `}
    >
      <div className="absolute top-1 right-1 flex items-center justify-center text-slate-500 hover:text-black hover:cursor-pointer rounded-md">
        <TaskActionIconGroup task={task} />
      </div>

      {/* Title and description */}
      <div className={``}>
        <div className="text-lg font-semibold text-black truncate">
          {task.title}
        </div>
        <div className="text-sm text-slate-500 line-clamp-5 ">
          {task.description}
        </div>
      </div>
    </div>
  );
}
