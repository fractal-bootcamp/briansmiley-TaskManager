import { Task, TaskStatus } from "../interfaces/Task";

export const dummyTasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    description:
      "This is a pending task description and has a much longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer descriptionmuch longer description that goes on and on and on and on and on",
    status: TaskStatus.Pending
  },
  {
    id: "2",
    title: "Task 2",
    description: "This is an in-progress task description",
    status: TaskStatus.InProgress
  },
  {
    id: "3",
    title: "Task 3",
    description: "This is a completed task description",
    status: TaskStatus.Completed
  },
  {
    id: "4",
    title: "Task 4",
    description: "This is an archived task description",
    status: TaskStatus.Archived
  },
  {
    id: "5",
    title: "Task 5",
    description: "This is another pending task description",
    status: TaskStatus.Pending
  },
  {
    id: "6",
    title: "Task 6",
    description: "This is another in-progress task description",
    status: TaskStatus.InProgress
  },
  {
    id: "7",
    title: "Task 7",
    description: "This is another completed task description",
    status: TaskStatus.Completed
  },
  {
    id: "8",
    title: "Task 8",
    description: "This is another archived task description",
    status: TaskStatus.Archived
  },
  {
    id: "9",
    title: "Task 9",
    description: "This is yet another pending task description",
    status: TaskStatus.Pending
  },
  {
    id: "10",
    title: "Task 10",
    description: "This is yet another in-progress task description",
    status: TaskStatus.InProgress
  },
  {
    id: "11",
    title: "Task 11",
    description: "This is yet another completed task description",
    status: TaskStatus.Completed
  },
  {
    id: "12",
    title: "Task 12",
    description: "This is yet another archived task description",
    status: TaskStatus.Archived
  }
];
