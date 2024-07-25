import { useEffect } from "react";
import useTaskStore from "./stores/useTaskStore";
import { Task, TaskStatus } from "./interfaces/Task.d";

const dummyTasks: Task[] = [
  {
    title: "Task 1",
    description: "This is a pending task description",
    status: TaskStatus.Pending
  },
  {
    title: "Task 2",
    description: "This is an in-progress task description",
    status: TaskStatus.InProgress
  },
  {
    title: "Task 3",
    description: "This is a completed task description",
    status: TaskStatus.Completed
  },
  {
    title: "Task 4",
    description: "This is an archived task description",
    status: TaskStatus.Archived
  }
];
function App() {
  const { tasks, addTask } = useTaskStore();
  useEffect(() => {
    dummyTasks.forEach(task => addTask(task));
  }, []);
  return (
    <div>
      {tasks.map(task => (
        <div key={task.title}>
          <h1 className="text-2xl font-bold">{task.title}</h1>
          <p className="text-gray-500">{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
