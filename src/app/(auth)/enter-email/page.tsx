"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EnterEmailPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:8080/api/check-email?email=${email}`);
    const exists = await res.json();
    exists ? router.push(`/login?email=${encodeURIComponent(email)}`) : router.push(`/register?email=${encodeURIComponent(email)}`);
  };
  return (
      <form
        onSubmit={submitHandler}
        className="GenericForm w-[400px] p-10 border-2 rounded-sm border-blue-400 flex flex-col justify-center items-center space-y-10"
      >
        <label className="text-blue-200 text-3xl pl-5 font-extralight tracking-[10px]">
          EMAIL
        </label>
        <input
          type="email"
          title="kdsfj"
          placeholder="Enter your email"
          value={email}
          required 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-5 pl-5 pr-5 duration-300 border-transparent border-2 focus:border-blue-400 rounded-sm bg-gray-900 text-blue-200 outline-none"
        ></input>
        <button
          type="submit"
          className="text-blue-200 font-extrabold tracking-[10px] w-full p-5 pl-7 rounded-sm border-2 border-blue-400 hover:bg-blue-400 duration-300 hover:text-black"
        >
          CONTINUE
        </button>
      </form>
  );
}
