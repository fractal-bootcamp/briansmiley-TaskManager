import { useEffect } from "react";
import useTaskStore from "./stores/useTaskStore";
import TaskTabs from "./components/TaskTabs";
import { dummyTasks } from "./assets/dummyTasks";

function App() {
  const { tasks, addTasks, clearTasks } = useTaskStore();
  useEffect(() => {
    dummyTasks.forEach(task => addTasks(task));
    return () => clearTasks();
  }, []);
  return (
    <div className="flex flex-col gap-2 p-2">
      {/* {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))} */}
      <TaskTabs tasks={tasks} />
    </div>
  );
}

export default App;
