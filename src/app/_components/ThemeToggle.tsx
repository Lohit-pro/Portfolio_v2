"use client";

import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkmode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return true; // default 
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="w-10 h-10 dark:text-light text-dark hover:cursor-pointer transition-all duration-300 flex items-center justify-center"
      onClick={() => setDarkmode(!darkMode)}
    >
      {darkMode ? <Sun size={26} /> : <Moon size={26} />}
    </div>
  );
}

export default ThemeToggle;
