import ThemeToggle from "@/components/ThemeToggle";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      
      {/* Soft Gradient Background Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl bg-[hsl(var(--primary))]/25" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full blur-3xl bg-blue-500/10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-42rem rounded-full blur-3xl bg-[hsl(var(--primary))]/10" />
      </div>

      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
