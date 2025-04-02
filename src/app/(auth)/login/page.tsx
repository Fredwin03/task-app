"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        
        const res = await fetch(`http://localhost:8080/api/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password}),
            credentials: "include"
        });
        const token = await res.text();

        localStorage.setItem("token", token);
        
        if(res.status === 200){
            alert("User Logged in");
            router.push("/tasks");
        } 
        if(res.status === 401) alert("Wrong Credentials");
    } catch(err) {
        alert("Please try again " + err);
    }
  };
  return (
      <form
        onSubmit={submitHandler}
        className="relative GenericForm w-[500px] p-10 border-2 rounded-sm border-blue-400 flex flex-col justify-center items-center space-y-10"
      >
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-5 pl-5 pr-5 duration-300 border-transparent border-2 focus:border-blue-400 rounded-sm bg-gray-900 text-blue-200 outline-none"
        ></input>
        <button
          type="submit"
          className="font-extrabold tracking-[10px] w-full p-5 rounded-sm border-2 border-blue-400 hover:bg-blue-400 duration-300 hover:text-black"
        >
          LOGIN
        </button>
      </form>
  );
}
