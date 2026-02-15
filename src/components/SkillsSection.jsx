import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "Tailwind", level: 70, category: "frontend" },

  { name: "Node.js", level: 45, category: "backend" },
  { name: "Express", level: 40, category: "backend" },

  { name: "Git", level: 65, category: "tools" },
  { name: "Figma", level: 55, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export default function SkillsSection() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    return skills.filter((s) => active === "all" || s.category === active);
  }, [active]);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-[hsl(var(--secondary))]/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-[hsl(var(--primary))]">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                active === c
                  ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                  : "bg-[hsl(var(--secondary))]/60 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-lg bg-[hsl(var(--card))] shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>

              <div className="w-full bg-[hsl(var(--secondary))]/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[hsl(var(--primary))] h-2 rounded-full origin-left"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1 text-sm opacity-70">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
