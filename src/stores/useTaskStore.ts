import { create } from "zustand";
import { Task } from "../interfaces/Task";

interface TaskStore {
  tasks: Task[];
  addTasks: (taskOrTasks: Task | Task[]) => void;
  clearTasks: () => void;
  setTaskStatus: (
    taskId: string,
    status: keyof Task["statuses"],
    value: boolean
  ) => void;
  setTaskTitle: (taskId: string, title: string) => void;
  setTaskDescription: (taskId: string, description: string) => void;
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
  setTaskStatus: (
    taskId: string,
    status: keyof Task["statuses"],
    value: boolean
  ) =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId
          ? { ...task, statuses: { ...task.statuses, [status]: value } }
          : task
      )
    })),
  setTaskTitle: (taskId: string, title: string) =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, title } : task
      )
    })),
  setTaskDescription: (taskId: string, description: string) =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, description } : task
      )
    }))
}));

export default useTaskStore;
