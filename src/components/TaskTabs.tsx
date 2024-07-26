import TaskList from "./TaskList";
import { Task } from "../interfaces/Task";

export default function TaskTabs({ tasks }: { tasks: Task[] }) {
  const pendingTasks = tasks.filter(task => task.status === "pending");
  const inProgressTasks = tasks.filter(task => task.status === "inProgress");
  const completedTasks = tasks.filter(task => task.status === "completed");
  const archivedTasks = tasks.filter(task => task.status === "archived");

  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="task_tabs"
        role="tab"
        className="tab"
        aria-label="Pending Tasks"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content p-10">
        <TaskList tasks={pendingTasks} />
      </div>

      <input
        type="radio"
        name="task_tabs"
        role="tab"
        className="tab"
        aria-label="In Progress Tasks"
      />
      <div role="tabpanel" className="tab-content p-10">
        <TaskList tasks={inProgressTasks} />
      </div>

      <input
        type="radio"
        name="task_tabs"
        role="tab"
        className="tab"
        aria-label="Completed Tasks"
      />
      <div role="tabpanel" className="tab-content p-10">
        <TaskList tasks={completedTasks} />
      </div>

      <input
        type="radio"
        name="task_tabs"
        role="tab"
        className="tab"
        aria-label="Archived Tasks"
      />
      <div role="tabpanel" className="tab-content p-10">
        <TaskList tasks={archivedTasks} />
      </div>
    </div>
  );
}
