import { useEffect } from "react";
import useTaskStore from "./stores/useTaskStore";
import { Task, TaskStatus } from "./interfaces/Task.d";
import TaskItem from "./components/TaskItem";

const dummyTasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    description:
      "This is a pending task description and has a much longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer description that goes on and on and on and on and on",
    status: TaskStatus.Pending
  },
  {
    id: "2",
    title: "Task 2",
    description: "This is an in-progress task description",
    status: TaskStatus.InProgress
  },
  {
    id: "3",
    title: "Task 3",
    description: "This is a completed task description",
    status: TaskStatus.Completed
  },
  {
    id: "4",
    title: "Task 4",
    description: "This is an archived task description",
    status: TaskStatus.Archived
  }
];
function App() {
  const { tasks, addTasks, clearTasks } = useTaskStore();
  useEffect(() => {
    dummyTasks.forEach(task => addTasks(task));
    return () => clearTasks();
  }, []);
  return (
    <div className="flex flex-col gap-2 p-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default App;
