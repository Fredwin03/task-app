import { LucideX } from "lucide-react";
import { useRef, useState } from "react";
import { taskInputs } from "../tasks/page";
import { useTaskStore } from '@/app/stores/taskStore';
const TaskPopup = ({
  closeFn,
  newTask,
}: {
  closeFn: () => void;
  newTask: (taskDetails: taskInputs) => Promise<void>;
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const { title, description, setTitle, setDescription, reset } = useTaskStore();

  const handleClickOutside = (e: React.MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      reset();
      closeFn();
    }
  };
  return (
    <div
      onClick={handleClickOutside}
      className="absolute top-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm inset-0 w-full min-h-[100vh] z-40 flex items-center justify-center"
    >
      <div
        ref={popupRef}
        className="relative w-[50%] h-[60%] pt-16 shadow-2xl shadow-gray-800 p-10 bg-black border-2 border-blue-400 rounded-md flex flex-col justify-center items-center gap-10"
      >
        <LucideX
          onClick={closeFn}
          size={"19"}
          className="absolute right-10 top-5 p-0 border-2 border-red-400 bg-red-900 text-red-200 hover:text-red-900 hover:bg-red-200 duration-300 cursor-pointer"
        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-5 pl-5 pr-5 duration-300 border-transparent border-2 focus:border-blue-400 rounded-sm bg-gray-900 text-blue-200 outline-none"
          placeholder="Title"
        ></input>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full flex-1 resize-none p-5 pl-5 pr-5 duration-300 border-transparent border-2 focus:border-blue-400 rounded-sm bg-gray-900 text-blue-200 outline-none"
          placeholder="description"
        ></textarea>
        <button
          onClick={() => newTask({ title, description })}
          className="px-7 py-3 text-sm font-extrabold tracking-[4px] text-green-400 bg-green-950 rounded-md border-2 border-green-400 hover:text-black hover:bg-green-400 hover:border-black duration-300"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default TaskPopup;
