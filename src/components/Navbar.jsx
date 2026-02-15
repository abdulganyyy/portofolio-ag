import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<nav className={cn("fixed top-0 w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-[hsl(var(--background))]/80 backdrop-blur-md shadow-xs" : "py-5")}>
				<div className="container flex items-center justify-between">
					<a
						href="#hero"
						className="text-xl font-bold flex items-center gap-2 relative z-10"
					>
						<span className="text-gradient">Abdul Gany</span>
						<span className="hidden sm:inline text-xs px-2 py-1 rounded-full border opacity-80">Front-End</span>
					</a>

					{/* Desktop */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))] transition-colors duration-300"
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Mobile button */}
					<button
						className="md:hidden p-2 text-[hsl(var(--foreground))] z-50"
						onClick={() => setIsMenuOpen((v) => !v)}
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			{/* Mobile overlay */}
			<div
				className={cn(
					"fixed inset-0 bg-[hsl(var(--background))]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
					isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
				)}
			>
				<div className="flex flex-col space-y-6 text-xl">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setIsMenuOpen(false)}
							className="text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))] transition-colors duration-300"
						>
							{item.name}
						</a>
					))}
				</div>
			</div>
		</>
	);
}
