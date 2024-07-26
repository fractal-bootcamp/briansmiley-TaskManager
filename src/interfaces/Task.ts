export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  archived: boolean;
}

export type TaskStatus = "pending" | "inProgress" | "completed";
