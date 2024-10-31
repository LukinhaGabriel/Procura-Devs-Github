"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import "./index.css";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    const newTheme =  theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  return (
    <button
      className="theme-button"
      onClick={() => changeTheme()}>
      <span className="theme-text">{ theme }</span>
      {theme === "dark" ? (
        <Moon size={32} weight="fill" />
      ) : (
        <Sun size={32} weight="fill" />
      )}
    </button>
  );
}
