import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Landing Page",
    description: "Landing page modern dengan React + Tailwind.",
    image: "/projects/project-1.png",
    tags: ["React", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard UI",
    description: "UI dashboard responsive dengan komponen reusable.",
    image: "/projects/project-2.png",
    tags: ["React", "UI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mini App",
    description: "Aplikasi kecil untuk latihan state + routing.",
    image: "/projects/project-3.png",
    tags: ["React", "Router"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-[hsl(var(--primary))]">Projects</span>
        </h2>
        <p className="text-center opacity-80 mb-12 max-w-2xl mx-auto">
          Beberapa project yang aku buat untuk menunjukkan skill front-end dan UI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group bg-[hsl(var(--card))] rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-left">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm opacity-80 mb-4">{p.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))] transition-colors duration-300"
                      aria-label="Open demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))] transition-colors duration-300"
                      aria-label="Open github"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button inline-flex items-center gap-2"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
