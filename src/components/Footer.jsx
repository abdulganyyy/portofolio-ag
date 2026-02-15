import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-[hsl(var(--card))] relative border-t mt-12">
      <div className="container flex flex-wrap justify-between items-center gap-4">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Alexa Vey. All rights reserved.
        </p>

        <a
          href="#hero"
          className="p-2 rounded-full bg-[hsl(var(--primary))]/10 hover:bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
}
