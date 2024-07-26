import { LucideIcon } from "lucide-react";
import { Task } from "../../interfaces/Task";

interface TaskActionIconProps {
  task: Task;
  Icon: LucideIcon;
  action: (id: Task["id"]) => void;
}
export default function TaskActionIcon({
  task,
  Icon,
  action
}: TaskActionIconProps) {
  return (
    <button
      className="flex items-center justify-center text-slate-500 hover:text-black hover:cursor-pointer rounded-md"
      onClick={() => action(task.id)}
    >
      <Icon className="w-5 h-5 " strokeWidth={1.5} />
    </button>
  );
}
