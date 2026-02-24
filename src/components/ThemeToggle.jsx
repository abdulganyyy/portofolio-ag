import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  return stored === "dark";
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  // Effect: sinkronkan ke DOM + localStorage, tanpa setState
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      className={cn(
        "fixed right-4 top-20 sm:top-5 z-50 p-2 rounded-full transition-colors duration-300 bg-[hsl(var(--card))]/80 backdrop-blur border"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}
