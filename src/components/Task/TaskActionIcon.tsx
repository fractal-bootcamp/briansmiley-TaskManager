import { LucideIcon } from "lucide-react";

interface TaskActionIconProps {
  Icon: LucideIcon;
  action: () => void;
  tooltip?: string;
}
export default function TaskActionIcon({
  Icon,
  action,
  tooltip
}: TaskActionIconProps) {
  return (
    <button
      className="flex items-center justify-center text-slate-500 hover:text-black hover:cursor-pointer rounded-md tooltip"
      onClick={action}
      data-tip={tooltip ? tooltip : ""}
    >
      <Icon className="w-5 h-5 " strokeWidth={1.5} />
    </button>
  );
}
