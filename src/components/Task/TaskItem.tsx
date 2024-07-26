import { useState } from "react";
import { Task } from "../../interfaces/Task";
import TaskActionIconGroup from "./TaskActionIconGroup";
import useTaskStore from "../../stores/useTaskStore";

interface TaskItemProps {
  task: Task;
}

const classes = {
  pending: "border bg-yellow-100 border-yellow-800",
  inProgress: "border bg-blue-100 border-blue-800",
  completed: "border bg-green-100 border-green-800",
  archived: "border bg-gray-100 border-gray-800"
};

const displayStatus = (statuses: Task["statuses"]) => {
  if (statuses.archived) return "archived";
  if (statuses.completed) return "completed";
  if (statuses.begun) return "inProgress";
  return "pending";
};

export default function TaskItem({ task }: TaskItemProps) {
  const [editing, setEditing] = useState(false);
  const taskDisplayStatus = displayStatus(task.statuses);
  const { setTaskTitle, setTaskDescription } = useTaskStore();
  return (
    <div
      className={`${classes[taskDisplayStatus]} relative w-[350px] max-h-[150px] flex items-start rounded-md px-2 py-1 `}
    >
      <div className="absolute top-1 right-1 flex items-center justify-center text-slate-500 hover:text-black hover:cursor-pointer rounded-md">
        <TaskActionIconGroup
          task={task}
          editOnclick={() => setEditing(!editing)}
        />
      </div>

      {/* Title and description */}
      <div className={`w-full`}>
        <div className="tooltip max-w-[60%] " data-tip={task.title}>
          <div className="text-lg text-start font-semibold text-black truncate w-full">
            {editing ? (
              <textarea
                className="w-full bg-white border border-black p-1 resize-none"
                rows={1}
                value={task.title}
                onChange={e => setTaskTitle(task.id, e.target.value)}
              />
            ) : (
              task.title
            )}
          </div>
        </div>
        <div className="text-sm text-slate-500 line-clamp-5 w-full">
          {editing ? (
            <textarea
              className="w-full bg-white border border-black p-1 resize-none"
              rows={4}
              value={task.description}
              onChange={e => setTaskDescription(task.id, e.target.value)}
            />
          ) : (
            task.description
          )}
        </div>
      </div>
    </div>
  );
}
