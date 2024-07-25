import { create } from "zustand";
import { Task } from "../interfaces/Task";

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
}
const useTaskStore = create<TaskStore>()(set => ({
  tasks: [],
  addTask: (task: Task) => set(state => ({ tasks: [...state.tasks, task] }))
}));

export default useTaskStore;
