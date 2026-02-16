import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Braces,
  Layout,
  Palette,
  Database,
  GitBranch,
  Globe,
  Wrench,
} from "lucide-react";

const categories = ["all", "frontend", "backend", "tools"];

const skills = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    icon: Layout,
    description: "Component-based UI, state management, reusable components.",
    highlights: ["Hooks", "Reusable UI", "SPA"],
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: Globe,
    description: "Routing, page structure, performance-friendly UI delivery.",
    highlights: ["Routing", "SSR/CSR", "next-intl"],
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: Palette,
    description: "Clean design system, consistent spacing, responsive layout.",
    highlights: ["Responsive", "Utility-first", "Design consistency"],
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: Braces,
    description: "Modern JS for UI logic and integrations.",
    highlights: ["ES6+", "DOM", "Async"],
  },

  // Backend (light)
  {
    name: "REST API Integration",
    category: "backend",
    icon: Database,
    description: "Consume REST endpoints and handle dynamic data rendering.",
    highlights: ["Fetch/Axios", "Auth-ready", "Error handling"],
  },
  {
    name: "Laravel (Basics)",
    category: "backend",
    icon: Code2,
    description: "Familiar with MVC and building simple CRUD flows.",
    highlights: ["MVC", "CRUD", "Blade (basic)"],
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "tools",
    icon: GitBranch,
    description: "Branching, pull request workflow, and collaboration.",
    highlights: ["Branching", "PR", "Collaboration"],
  },
  {
    name: "Figma",
    category: "tools",
    icon: Wrench,
    description: "Translate UI from Figma into pixel-consistent implementation.",
    highlights: ["UI handoff", "Spacing", "Components"],
  },
];

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
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="text-[hsl(var(--primary))]">Stack</span>
          </h2>
          <p className="mt-3 opacity-80">
            Tools and technologies I use to build responsive interfaces and ship
            web projects.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize border",
                active === c
                  ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] border-transparent shadow-sm"
                  : "bg-[hsl(var(--card))]/60 backdrop-blur text-[hsl(var(--foreground))] hover:bg-[hsl(var(--card))]"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={cn(
                  "rounded-xl border bg-[hsl(var(--card))]/70 backdrop-blur p-6 text-left",
                  "shadow-sm card-hover"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[hsl(var(--primary))]/10 border">
                    <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full border opacity-80 capitalize">
                        {skill.category}
                      </span>
                    </div>

                    <p className="mt-2 text-sm opacity-80 leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--secondary))]/60 border"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small footer note */}
        <div className="text-center mt-10 text-sm opacity-70">
          Currently focusing on: React patterns, UI consistency, and shipping
          projects end-to-end.
        </div>
      </div>
    </section>
  );
}
