import { Briefcase, Code, Palette } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-[hsl(var(--primary))]">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div className="space-y-6 text-left">
            <p className="opacity-90">
              I am a Front-End Developer with experience using React, Next.js, 
              and Tailwind CSS to build modern and responsive web applications.
              I focus on writing structured components, maintaining clean UI,
              and creating smooth user experiences.
            </p>

            <p className="opacity-90">
              During my internship, I implemented UI from Figma designs,
              integrated REST APIs, and optimized website performance.
              I am continuously improving my skills and open to
              opportunities where I can contribute and grow.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
              <li className="p-3 rounded-lg border bg-[hsl(var(--card))]/60">
                ✔ React & Next.js Development
              </li>
              <li className="p-3 rounded-lg border bg-[hsl(var(--card))]/60">
                ✔ REST API Integration
              </li>
              <li className="p-3 rounded-lg border bg-[hsl(var(--card))]/60">
                ✔ UI Implementation from Figma
              </li>
              <li className="p-3 rounded-lg border bg-[hsl(var(--card))]/60">
                ✔ Responsive & Clean Design
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#contact" className="cosmic-button text-center">
                Let’s Work Together
              </a>
              <a
                href="/cv.pdf"
                className="px-6 py-2 rounded-full border border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6">
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                  <Code className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="opacity-80">
                    Building responsive and scalable web interfaces using modern JavaScript frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                  <Palette className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI / UX Implementation</h4>
                  <p className="opacity-80">
                    Translating design prototypes into functional and pixel-consistent interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                  <Briefcase className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Professional Mindset</h4>
                  <p className="opacity-80">
                    Focused on clean code structure, collaboration, and continuous improvement.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
