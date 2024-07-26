export interface Task {
  id: string;
  title: string;
  description: string;
  statuses: {
    begun: boolean;
    completed: boolean;
    archived: boolean;
  };
}
