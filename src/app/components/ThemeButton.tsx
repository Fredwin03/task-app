import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme as "light" | "dark");
  }, []);

  useEffect(() => {
    if (theme === null) return;
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  if (theme === null) return null;
  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-16 bg-gray-900 border-2 border-blue-400 p-0 rounded-full flex flex-row justify-between">
        <Sun
          size={25}
          className={`text-orange-200 bg-orange-900 border-2 border-orange-400 p-1 rounded-full ${theme === "dark" && "translate-x-8 opacity-0"} duration-1000`}
        />
        <Moon
          size={25}
          className={`text-purple-200 bg-purple-900 border-2 border-purple-400 p-1 rounded-full ${theme === "light" && "-translate-x-8 opacity-0"} duration-1000`}
        />
      </button>
    </div>
  );
};

export default ThemeButton;
