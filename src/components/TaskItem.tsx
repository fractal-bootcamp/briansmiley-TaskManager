import { Task } from "../interfaces/Task";

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
      } w-[350px] max-h-[150px] overflow-hidden text-ellipsis flex items-start rounded-md pr-2 pl-0 py-1 `}
    >
      {/* Status indicator */}
      <div className="basis-10 shrink-0 flex items-center justify-center self-center">
        <div className=" rounded-md bg-slate-200 border border-slate-800 w-6 h-6"></div>
      </div>
      {/* Title and description */}
      <div className={`max-h-full`}>
        <div className="text-lg font-semibold text-black">{task.title}</div>
        <div className="text-sm text-slate-500 ">{task.description}</div>
      </div>
    </div>
  );
}
