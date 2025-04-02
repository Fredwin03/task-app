import { LucideTrash2 } from "lucide-react";
import { timeAgo } from "../helper/timeAgo";

type task = {
  id: number;
  completed: boolean;
  title: string;
  description: string;
  createdAt: string;
};

type totalTasks = {
  allTasks: task[];
  updateFn: (id: number) => void;
};

const TaskCard = ({ allTasks, updateFn }: totalTasks) => {
  const pendingColor = "bg-gray-900 text-blue-200 border-blue-400 hover:bg-blue-400 hover:text-black hover:border-black duration-300";
  const completedColor = "bg-green-950 text-green-200 border-green-400 hover:bg-green-400 hover:text-black hover:border-black duration-300";

  return (
    <div className="h-full flex flex-col gap-5 items-center">
      {allTasks.map((task) => (
        <div
          key={task.id}
          onClick={() => updateFn(task.id)}
          className={`relative group w-full max-w-[700px] p-3 border-2 rounded-sm flex flex-col justify-end cursor-pointer ${task.completed ? completedColor : pendingColor}`}
        >
          <LucideTrash2 onClick={() => {}} size={25} className="absolute top-3 right-5 p-1 border-2 border-red-400 bg-red-900 text-red-200 hover:text-red-900 hover:bg-red-200 duration-300 rounded-sm cursor-pointer"/>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-2xl font-extralight tracking-[5px] break-all">
              {task.title}
            </p>
            <p className="text-2xl break-words">|</p>
            <p className="text-xs break-words">{timeAgo(task.createdAt)}</p>
          </div>
          {task.description && (
            <>
              <hr className={`border-2 ${task.completed ? "border-green-400" : "border-blue-400"} group-hover:border-black transition-all duration-300`} />
              <p className="pt-2 text-sm break-words">{task.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
