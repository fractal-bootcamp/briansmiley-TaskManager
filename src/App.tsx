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
    <div className="flex flex-col w-full h-full items-center bg-slate-200 gap-2 p-2">
      <TaskTabs tasks={tasks} />
    </div>
  );
}

export default App;
