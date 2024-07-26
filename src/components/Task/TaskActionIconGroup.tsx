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
  const { setTaskStatus, setTaskArchived } = useTaskStore();
  const completion = {
    icon: task.status === "completed" ? BadgeCheck : Badge,
    tooltip: task.status === "completed" ? "Uncomplete" : "Complete",
    action: () =>
      setTaskStatus(
        task.id,
        task.status === "completed" ? "pending" : "completed"
      )
  };
  const archive = {
    icon: task.archived ? ArchiveRestore : Archive,
    tooltip: task.archived ? "Unarchive" : "Archive",
    action: () => setTaskArchived(task.id, !task.archived)
  };
  return (
    <div className="flex items-center gap-2">
      <TaskActionIcon Icon={Edit} action={() => {}} tooltip="Edit" />
      <TaskActionIcon
        Icon={completion.icon}
        action={completion.action}
        tooltip={completion.tooltip}
      />
      <TaskActionIcon
        Icon={archive.icon}
        action={archive.action}
        tooltip={archive.tooltip}
      />
    </div>
  );
}
