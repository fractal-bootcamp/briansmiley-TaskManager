import { Archive, ArchiveRestore, Badge, BadgeCheck, Edit } from "lucide-react";
import { Task } from "../../interfaces/Task";
import useTaskStore from "../../stores/useTaskStore";
import TaskActionIcon from "./TaskActionIcon";

interface TaskActionIconGroupProps {
  task: Task;
}
export default function TaskActionIconGroup({
  task
}: TaskActionIconGroupProps) {
  const { setTaskStatus } = useTaskStore();
  return (
    <div className="flex items-center gap-2">
      {/* Complete/Incomplete Toggle */}
      {task.status === "completed" ? (
        <TaskActionIcon
          Icon={BadgeCheck}
          action={() => setTaskStatus(task.id, "pending")}
          tooltip="Uncomplete"
        />
      ) : (
        <TaskActionIcon
          Icon={Badge}
          action={() => setTaskStatus(task.id, "completed")}
          tooltip="Complete"
        />
      )}
      <TaskActionIcon Icon={Edit} action={() => {}} tooltip="Edit" />
      {task.status === "archived" ? (
        <TaskActionIcon
          Icon={ArchiveRestore}
          action={() => setTaskStatus(task.id, "pending")}
          tooltip="Unarchive"
        />
      ) : (
        <TaskActionIcon
          Icon={Archive}
          action={() => setTaskStatus(task.id, "archived")}
          tooltip="Archive"
        />
      )}
    </div>
  );
}
