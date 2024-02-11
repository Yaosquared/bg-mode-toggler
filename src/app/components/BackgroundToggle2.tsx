"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const BackgroundToggle2 = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

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
      className="relative w-8 h-8 flex items-center justify-center dark:bg-gray-900 bg-[--dark-blue] cursor-pointer rounded-full p-1"
      onClick={handleClick}
    >
      {darkMode ? (
        <BsSunFill className="text-yellow-400" size={18} />
      ) : (
        <FaMoon className="text-[--light]" size={18} />
      )}
    </div>
  );
};

export default BackgroundToggle2;
