import { Task } from "../interfaces/Task";

export const dummyTasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.",
    statuses: {
      begun: false,
      completed: false,
      archived: false
    }
  },
  {
    id: "2",
    title: "Task 2",
    description: "This is an in-progress task description",
    statuses: {
      begun: true,
      completed: false,
      archived: false
    }
  },
  {
    id: "3",
    title: "Task 3",
    description: "This is a completed task description",
    statuses: {
      begun: false,
      completed: true,
      archived: false
    }
  },
  {
    id: "4",
    title: "Task 4",
    description: "This is an archived task description",
    statuses: {
      begun: false,
      completed: false,
      archived: true
    }
  },
  {
    id: "5",
    title: "Task 5",
    description: "This is another pending task description",
    statuses: {
      begun: false,
      completed: false,
      archived: false
    }
  },
  {
    id: "6",
    title: "Task 6",
    description: "This is another in-progress task description",
    statuses: {
      begun: true,
      completed: false,
      archived: false
    }
  },
  {
    id: "7",
    title: "Task 7",
    description: "This is another completed task description",
    statuses: {
      begun: false,
      completed: true,
      archived: false
    }
  },
  {
    id: "8",
    title: "Task 8",
    description: "This is another archived task description",
    statuses: {
      begun: false,
      completed: true,
      archived: true
    }
  },
  {
    id: "9",
    title: "Task 9",
    description: "This is yet another pending task description",
    statuses: {
      begun: false,
      completed: false,
      archived: false
    }
  },
  {
    id: "10",
    title: "Task 10",
    description: "This is yet another in-progress task description",
    statuses: {
      begun: true,
      completed: false,
      archived: false
    }
  },
  {
    id: "11",
    title: "Task 11",
    description: "This is yet another completed task description",
    statuses: {
      begun: false,
      completed: true,
      archived: false
    }
  },
  {
    id: "12",
    title: "Task 12",
    description: "This is yet another archived task description",
    statuses: {
      begun: false,
      completed: false,
      archived: true
    }
  }
];
