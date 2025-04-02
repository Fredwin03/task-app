import { taskInputs } from "./page";

export const getAllTasks = async () => {
    const res = await fetch("http://localhost:8080/api/tasks/all", {
        credentials: "include"
    });
    const tasks = await res.json();
    console.log(tasks);
    return tasks;
}

export const updateTasks = async (id: number) => {
    const res = await fetch(`http://localhost:8080/api/tasks/update/${id}`, {
        method: "PATCH",
        credentials: "include",
    });

    if(res.ok) {
        const message = await res.text();
        console.log(message);
        return true;
    }
    return false;
}

export const createTask = async (taskDetails: taskInputs) => {
    const res = await fetch("http://localhost:8080/api/tasks/newTask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(taskDetails)
    });

    if(res.ok) {
        const message = await res.json();
        console.log(message);
        return true;
    }
    console.log(res);
    console.log(res);
    return false;
}