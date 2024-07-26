import { Archive, Badge, BadgeCheck, Edit } from "lucide-react";
import { Task } from "../../interfaces/Task";
import useTaskStore from "../../stores/useTaskStore";

interface TaskActionIconGroupProps {
  task: Task;
}
export default function TaskActionIconGroup({
  task
}: TaskActionIconGroupProps) {
  const { setTaskStatus } = useTaskStore();
  return (
    <div className="flex items-center gap-2">
      <div onClick={() => setTaskStatus(task.id, "archived")}>
        <Archive className="w-5 h-5 " strokeWidth={1.5} />
      </div>

      <div
        className="flex items-center justify-center text-slate-500 hover:text-black hover:cursor-pointer rounded-md"
        onClick={() => setTaskStatus(task.id, "completed")}
      >
        <Edit className="w-5 h-5 " strokeWidth={1.5} />
      </div>
      {/* Complete/Incomplete Toggle */}
      <div
        className="flex items-center justify-center text-slate-500 hover:text-black hover:cursor-pointer rounded-md"
        onClick={() =>
          setTaskStatus(
            task.id,
            task.status === "completed" ? "pending" : "completed"
          )
        }
      >
        {task.status === "completed" ? (
          <BadgeCheck className="w-5 h-5" strokeWidth={1.5} />
        ) : (
          <Badge className="w-5 h-5" strokeWidth={1.5} />
        )}
      </div>
    </div>
  );
}
