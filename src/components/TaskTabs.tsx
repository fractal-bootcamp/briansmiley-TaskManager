import TaskList from "./TaskList";
import { Task } from "../interfaces/Task";

export default function TaskTabs({ tasks }: { tasks: Task[] }) {
  const unfinishedTasks = tasks.filter(
    task => !task.statuses.completed && !task.statuses.archived
  );
  const pendingTasks = unfinishedTasks.filter(task => !task.statuses.begun);
  const inProgressTasks = unfinishedTasks.filter(task => task.statuses.begun);
  const completedTasks = tasks.filter(
    task => task.statuses.completed && !task.statuses.archived
  );
  const archivedTasks = tasks.filter(task => task.statuses.archived);

  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        type="radio"
        name="task_tabs"
        role="tab"
        className="tab"
        aria-label="All"
      />
      <div role="tabpanel" className="tab-content p-10">
        <TaskList tasks={tasks} />
      </div>
      <input
        type="radio"
        name="task_tabs"
        role="tab"
        className="tab"
        aria-label="Pending"
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
        aria-label="In Progress"
      />
      <div role="tabpanel" className="tab-content p-10">
        <TaskList tasks={inProgressTasks} />
      </div>

      <input
        type="radio"
        name="task_tabs"
        role="tab"
        className="tab"
        aria-label="Completed"
      />
      <div role="tabpanel" className="tab-content p-10">
        <TaskList tasks={completedTasks} />
      </div>

      <input
        type="radio"
        name="task_tabs"
        role="tab"
        className="tab"
        aria-label="Archived"
      />
      <div role="tabpanel" className="tab-content p-10">
        <TaskList tasks={archivedTasks} />
      </div>
    </div>
  );
}
