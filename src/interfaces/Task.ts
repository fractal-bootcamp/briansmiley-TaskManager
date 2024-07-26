export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  Pending = "pending",
  InProgress = "inProgress",
  Completed = "completed",
  Archived = "archived"
}
