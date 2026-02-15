import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-4">
      <div className="container max-w-5xl mx-auto z-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 items-center">
          {/* Left: text */}
          <div className="text-left space-y-6">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-[hsl(var(--card))]/60 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
              Open for opportunities
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              <span className="animate-fade-in">Hi, I&apos;m</span>{" "}
              <span className="text-[hsl(var(--primary))] animate-fade-in-delay-1">
                Abdul
              </span>{" "}
              <span className="text-gradient animate-fade-in-delay-2">Gany</span>
            </h1>

            <p className="text-lg md:text-xl opacity-80 max-w-xl animate-fade-in-delay-3">
              Front-End Developer (React/Next.js) yang fokus pada UI rapi, responsif,
              dan pengalaman pengguna yang jelas.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View my work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border hover:bg-[hsl(var(--secondary))]/60 transition-colors"
              >
                Contact
              </a>

              {/* Social */}
              <div className="flex items-center gap-2 ml-0 sm:ml-2">
                <a className="p-2 rounded-full border hover:bg-[hsl(var(--secondary))]/60" href="#" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a className="p-2 rounded-full border hover:bg-[hsl(var(--secondary))]/60" href="#" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a className="p-2 rounded-full border hover:bg-[hsl(var(--secondary))]/60" href="#" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="pt-2 text-sm opacity-70">
              Based in Batu, Jawa Timur • Available Remote/Onsite
            </div>
          </div>

          {/* Right: photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border bg-[hsl(var(--card))] shadow-lg animate-float">
              <img
                src="/profilebgremove.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm opacity-70 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-[hsl(var(--primary))]" />
      </div>
    </section>
  );
}
