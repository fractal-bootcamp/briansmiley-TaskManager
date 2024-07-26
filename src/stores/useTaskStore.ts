import { create } from "zustand";
import { Task } from "../interfaces/Task";

interface TaskStore {
  tasks: Task[];
  addTasks: (taskOrTasks: Task | Task[]) => void;
  clearTasks: () => void;
  setTaskStatus: (taskId: string, status: Task["status"]) => void;
}
const useTaskStore = create<TaskStore>()(set => ({
  tasks: [],
  addTasks: (taskOrTasks: Task | Task[]) => {
    if (Array.isArray(taskOrTasks)) {
      set(state => ({ tasks: [...state.tasks, ...taskOrTasks] }));
    } else {
      set(state => ({ tasks: [...state.tasks, taskOrTasks] }));
    }
  },
  clearTasks: () => set({ tasks: [] }),
  setTaskStatus: (taskId: string, status: Task["status"]) =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, status } : task
      )
    }))
}));

export default useTaskStore;
