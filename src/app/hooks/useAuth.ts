"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      // if (!token) {
      //   router.push("/enter-email");
      //   return;
      // }

      try {
        const res = await fetch("http://localhost:8080/api/auth/me", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          router.push("/enter-email"); // Redirect if token is invalid
        }else if(pathname === "/login" || pathname === "/register" || pathname === "/enter-email") {
          router.push("/tasks");
        }
        const data = await res.text();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    checkAuth();
  }, [router]);

  return null;
}
