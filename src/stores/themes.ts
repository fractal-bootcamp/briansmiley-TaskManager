import { Task } from "../interfaces/Task";

interface ColorSet {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
}
type Status = "completed" | "pending" | "inProgress" | "archived";
type Theme = Record<Status, ColorSet>;
export const getStatus = (statuses: Task["statuses"]): Status => {
  if (statuses.archived) return "archived";
  if (statuses.completed) return "completed";
  if (statuses.begun) return "inProgress";
  return "pending";
};
export const themes: Record<string, Theme> = {
  dark: {
    completed: {
      background: "#1f2937",
      text: "#ffffff",
      primary: "#ffffff",
      secondary: "#ffffff",
      accent: "#ffffff"
    },
    pending: {
      background: "#1f2937",
      text: "#ffffff",
      primary: "#ffffff",
      secondary: "#ffffff",
      accent: "#ffffff"
    },
    inProgress: {
      background: "#1f2937",
      text: "#ffffff",
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#ffffff"
    },
    archived: {
      background: "#1f2937",
      text: "#ffffff",
      primary: "#ffffff",
      secondary: "#ffffff",
      accent: "#ffffff"
    }
  },
  light: {
    completed: {
      background: "#ffffff",
      text: "#000000",
      primary: "#000000",
      secondary: "#000000",
      accent: "#000000"
    },
    pending: {
      background: "#ffffff",
      text: "#000000",
      primary: "#000000",
      secondary: "#000000",
      accent: "#000000"
    },
    inProgress: {
      background: "#ffffff",
      text: "#000000",
      primary: "#ff0000",
      secondary: "#000000",
      accent: "#000000"
    },
    archived: {
      background: "#ffffff",
      text: "#000000",
      primary: "#000000",
      secondary: "#000000",
      accent: "#000000"
    }
  }
};
export default themes;
