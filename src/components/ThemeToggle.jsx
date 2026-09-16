"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", opacity: 0 }}>
        <span style={{ width: 16, display: "inline-block" }}>☾</span>
        <span style={{ fontSize: 14 }}>Theme</span>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "8px 0",
        display: "flex",
        alignItems: "center",
        gap: 12,
        color: "var(--ink)",
        fontFamily: "inherit",
        width: "100%",
        textAlign: "left",
      }}
      aria-label="Toggle Dark Mode"
    >
      <span style={{ width: 16, display: "inline-block", textAlign: "center", color: "var(--muted)" }}>
        {isDark ? "☼" : "☾"}
      </span>
      <span style={{ fontSize: 14, fontWeight: 500 }}>Theme</span>
    </button>
  );
}
