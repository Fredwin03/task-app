"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Errors {
  password?: String;
  confirmPassword?: String;
}

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState<Errors>({});
  const router = useRouter();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 201) {
        alert("User successfully created");
        router.push("/enter-email");
      } else alert(res.body);
    } catch (err) {
      alert("Please try again " + err);
    }
  };

  useEffect(() => {
    const newErrors: Errors = {};
    if (password.length < 8 && password !== "") newErrors.password = "Password length must be > 8";
    else if (password !== confirmpassword)
      newErrors.confirmPassword = "Passwords do not match!";

    setError(newErrors);
    console.log(error);
  }, [password, confirmpassword]);

  return (
    <form
      onSubmit={submitHandler}
      className="relative GenericForm w-[500px] p-10 border-2 rounded-sm border-blue-400 flex flex-col justify-center items-center space-y-10"
    >
      {/* New Password field */}
      <input
        type="password"
        placeholder="New Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-5 pl-5 pr-5 duration-300 border-transparent border-2 focus:border-blue-400 rounded-sm bg-gray-900 text-blue-200 outline-none"
      ></input>
      {error.password && (
        <div className="ErrorMsg pl-3 flex-wrap pr-3 w-max absolute top-[73] rounded-sm right-10 text-sm text-red-200 border-2 border-red-400 bg-red-900">{error.password}</div>
      )}

      {/* ConfirmPassword field */}
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmpassword}
        required
        onChange={(e) => setConfirmpassword(e.target.value)}
        className="w-full p-5 pl-5 pr-5 duration-300 border-transparent border-2 focus:border-blue-400 rounded-sm bg-gray-900 text-blue-200 outline-none"
      ></input>
      {error.confirmPassword && (
        <div className="ErrorMsg pl-3 pr-3 w-max absolute top-[180] rounded-sm right-10 text-sm text-red-200 border-2 border-red-400 bg-red-900">{error.confirmPassword}</div>
      )}

      <button
        type="submit"
        className="font-extrabold tracking-[15px] w-full p-5 pl-10 rounded-sm border-2 border-blue-400 hover:bg-blue-400 duration-300 hover:text-black"
      >
        REGISTER
      </button>
    </form>
  );
}
