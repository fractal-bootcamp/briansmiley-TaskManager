import TaskItem from "./Task/TaskItem";
import { Task } from "../interfaces/Task";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className="flex flex-col gap-2 p-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
