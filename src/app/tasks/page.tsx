"use client";

import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import { createTask, getAllTasks, updateTasks } from "./getAllTasks";
import TaskCard from "../components/TaskCard";
import CreateButton from "../components/CreateButton";
import TaskPopup from "../components/TaskPopup";

type task = {
  id: number;
  completed: boolean;
  title: string;
  description: string;
  createdAt: string;
};

export type taskInputs = {
  title: string;
  description: string;
};

export default function TasksPage() {
  useAuth();
  const [refresh, setRefresh] = useState(0);
  const [popup, setPopup] = useState(false);

  const [allTasks, setAllTasks] = useState<task[]>([]);

  useEffect(() => {
    getAllTasks().then((tasks) => setAllTasks(tasks));
  }, [refresh]);

  useEffect(() => {
    popup
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [popup]);

  const handleUpdateTask = async (id: number) => {
    const success = await updateTasks(id);
    if (success) setRefresh((prev) => prev + 1);
  };

  const handlePopup = () => {
    setPopup((prev) => !prev);
  };

  const newTask = async (taskDetails: taskInputs) => {
    const success = await createTask(taskDetails);
    if (success) {
        setRefresh((prev) => prev + 1);
        setPopup(false);
    }
  };
  return (
    <div className="relative h-full flex flex-col items-center m-2">
      <Navbar />
      <div id="tasks" className="relative p-10 w-full h-full">
        <TaskCard allTasks={allTasks} updateFn={handleUpdateTask} />
        <CreateButton createFn={handlePopup} />
      </div>
      {popup && <TaskPopup closeFn={handlePopup} newTask={newTask} />}
    </div>
  );
}
