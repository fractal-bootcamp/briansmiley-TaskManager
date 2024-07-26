import {
  Archive,
  ArchiveRestore,
  Badge,
  BadgeCheck,
  CircleEllipsis,
  CirclePlay,
  Edit
} from "lucide-react";
import { Task } from "../../interfaces/Task";
import useTaskStore from "../../stores/useTaskStore";
import TaskActionIcon from "./TaskActionIcon";

interface TaskActionIconGroupProps {
  task: Task;
  editOnclick: () => void;
}
export default function TaskActionIconGroup({
  task,
  editOnclick
}: TaskActionIconGroupProps) {
  const { setTaskStatus } = useTaskStore();
  const completion = {
    icon: task.statuses.completed ? BadgeCheck : Badge,
    tooltip: task.statuses.completed ? "Uncomplete" : "Complete",
    action: () => setTaskStatus(task.id, "completed", !task.statuses.completed)
  };
  const archive = {
    icon: task.statuses.archived ? ArchiveRestore : Archive,
    tooltip: task.statuses.archived ? "Unarchive" : "Archive",
    action: () => setTaskStatus(task.id, "archived", !task.statuses.archived)
  };
  const progress = {
    icon: task.statuses.begun ? CircleEllipsis : CirclePlay,
    tooltip: task.statuses.begun ? "Unbegin" : "Begin",
    action: () => setTaskStatus(task.id, "begun", !task.statuses.begun)
  };
  const showProgessStatus = !(
    task.statuses.completed || task.statuses.archived
  );
  return (
    <div className="flex items-center gap-2">
      <TaskActionIcon Icon={Edit} action={editOnclick} tooltip="Edit" />
      {showProgessStatus && (
        <TaskActionIcon
          Icon={progress.icon}
          action={progress.action}
          tooltip={progress.tooltip}
        />
      )}
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
