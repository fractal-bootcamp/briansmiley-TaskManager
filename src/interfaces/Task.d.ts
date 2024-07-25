export interface Task {
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  Pending = "pending",
  InProgress = "in-progress",
  Completed = "completed",
  Archived = "archived"
}
