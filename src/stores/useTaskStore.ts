import { create } from "zustand";
import { Task } from "../interfaces/Task";

interface TaskStore {
  tasks: Task[];
  addTasks: (taskOrTasks: Task | Task[]) => void;
  clearTasks: () => void;
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
  clearTasks: () => set({ tasks: [] })
}));

export default useTaskStore;
