import { useMemo, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const categories = ["all", "web", "uiux", "mini"];

const projects = [
	{
		id: 1,
		title: "CareHIV – Health Information Platform",
		description: "Designed an anonymous HIV/AIDS information platform, translating user research into intuitive user flows, and high-fidelity Figma prototypes.",
		image: "/projects/carehiv.png",
		tags: ["Figma", "Prototyping", "Wireframing"],
		category: "uiux",
		demoUrl: "https://www.figma.com/design/LdBwjzz3NaUEb35epIhNVH/CareHIV?node-id=7-462&t=d1NgDpqyFCzw0RTp-1",
		githubUrl: "https://github.com/abdulganyyy/carehiv.git",
	},
	{
		id: 2,
		title: "WebDev Internal Project – cmlabs",
		description: "Developed responsive web interfaces using Next.js and Tailwind, collaborating in a Git-based workflow while improving performance and maintainability.",
		image: "/projects/webdev2.png",
		tags: ["Next.js", "React", "Tailwind", "REST API", "Git"],
		category: "web",
		demoUrl: null,
		githubUrl: null,
	},
	{
		id: 3,
		title: "Unitask – Task Management App",
		description: "Built a user-friendly task management interface and integrated it with a Laravel backend, focusing on usability and structured component design.",
		image: "/projects/unitask.png",
		tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "PHP"],
		category: "web",
		demoUrl: null,
		githubUrl: "https://github.com/abdulganyyy/Web-ManagementTask-Unitask.git",
	},
	{
		id: 4,
		title: "Pasar Desa – E-Commerce Platform",
		description: "Designed and implemented a responsive e-commerce UI from Figma to production-ready code, enhancing user experience across devices.",
		image: "/projects/pasardesa.png",
		tags: ["Figma", "Laravel", "PHP", "Responsive Design"],
		category: "web",
		demoUrl: null,
		githubUrl: "https://github.com/abdulganyyy/Web-Ecommerce-PasarDesa.git",
	},
	{
		id: 5,
		title: "SIPWES – Payroll System Design",
		description: "Created a payroll management system prototype with streamlined navigation and optimized data-entry flows for administrative efficiency.",
		image: "/projects/sipwes.png",
		tags: ["UI/UX", "Figma", "Prototyping"],
		category: "uiux",
		demoUrl: "https://www.figma.com/design/Oi2CVL1tbVOBhEY3eHja1y/ADSI---SIP--Sistem-Informasi-Pegawai---Copy-?node-id=8-26&t=4SXXPzydtrPrcj8f-1",
		githubUrl: "https://github.com/abdulganyyy/Desain-Sistem-Manajemen-Gaji.git",
	},
	{
		id: 6,
		title: "Mini Quiz – Quiz Knowledge",
		description: "A React-based quiz application that fetches trivia questions from the OpenTDB API, featuring customizable quiz settings, countdown timer, and progress tracking with localStorage persistence.",
		image: "/projects/quiz.png",
		tags: ["JavaScript", "React", "API"],
		category: "mini",
		demoUrl: "https://www.loom.com/share/9162cdf37213430a8e24b6aa7b665744",
		githubUrl: "https://github.com/abdulganyyy/react-quiz-app.git",
	},
];

export default function ProjectsSection() {
	const [active, setActive] = useState("all");

	const filtered = useMemo(() => {
		return projects.filter((p) => active === "all" || p.category === active);
	}, [active]);

	return (
		<section
			id="projects"
			className="py-24 px-4 relative"
		>
			<div className="container mx-auto max-w-5xl">
				<div className="max-w-2xl mx-auto text-center mb-10">
					<h2 className="text-3xl md:text-4xl font-bold">
						Featured <span className="text-[hsl(var(--primary))]">Projects</span>
					</h2>
					<p className="mt-3 opacity-80">Projects that showcase front-end capabilities, UI implementation, and problem solving.</p>
				</div>

				{/* Filter ala shadcn Tabs */}
				<div className="flex justify-center mb-8">
					<Tabs
						value={active}
						onValueChange={setActive}
					>
						<TabsList>
							{categories.map((c) => (
								<TabsTrigger
									key={c}
									value={c}
									className="capitalize"
								>
									{c === "uiux" ? "UI/UX" : c}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				</div>

				{/* Carousel: 1 card mobile, 2 tablet, 3 desktop */}
				<div className="relative">
					<div className="relative px-14">
						<div className="-mx-14">
							<Carousel options={{ loop: false }}>
								<div className="flex items-center justify-between mb-4">
									<div className="text-sm opacity-70">Swipe / drag to explore</div>
									<div className="flex items-center gap-2">
										<CarouselPrevious />
										<CarouselNext />
									</div>
								</div>

								<CarouselContent className="gap-6">
									{filtered.map((p) => (
										<CarouselItem
											key={p.id}
											className="basis-full sm:basis-1/2 lg:basis-1/3"
										>
											{/* card kamu */}
											<Card className="group h-full flex flex-col card-hover">
												{/* Image: tinggi fix */}
												<div className="h-52 sm:h-56 overflow-hidden bg-[hsl(var(--secondary))]/30">
													<img
														src={p.image}
														alt={p.title}
														className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
														loading="lazy"
													/>
												</div>

												{/* Content: flex-1 supaya ngisi ruang, dan footer di bawah */}
												<CardContent className="text-left flex flex-col flex-1">
													{/* Tags */}
													<div className="flex flex-wrap gap-2 mb-3">
														<Badge className="capitalize">{p.category === "uiux" ? "UI/UX" : p.category}</Badge>
														{p.tags.map((t) => (
															<Badge key={t}>{t}</Badge>
														))}
													</div>

													{/* Title + desc: kasih tinggi minimum supaya rata */}
													<h3 className="text-xl font-semibold mb-2 clamp-2">{p.title}</h3>
													<p className="text-sm opacity-80 mb-4 clamp-4">{p.description}</p>

													{/* Spacer: dorong actions ke bawah */}
													<div className="mt-auto flex items-center justify-between">
														<div className="flex gap-3">
															<a
																href={p.demoUrl ? p.demoUrl : "/not-found"}
																target={p.demoUrl ? "_blank" : "_self"}
																rel="noopener noreferrer"
																className="opacity-80 hover:opacity-100 transition-opacity"
																aria-label="Open demo"
															>
																<ExternalLink size={20} />
															</a>
															<a
																href={p.githubUrl ? p.githubUrl : "/not-found"}
																target={p.githubUrl ? "_blank" : "_self"}
																rel="noopener noreferrer"
																className="opacity-80 hover:opacity-100 transition-opacity"
																aria-label="Open github"
															>
																<Github size={20} />
															</a>
														</div>
													</div>
												</CardContent>
											</Card>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>
					</div>
				</div>

				<div className="text-center mt-10">
					<a
						href="https://github.com/abdulganyyy"
						target="_blank"
						rel="noopener noreferrer"
						className="
      inline-flex items-center gap-2
      h-11 px-7 rounded-full
      bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]
      hover:opacity-95 active:scale-95
      transition-all
    "
					>
						Check my GitHub <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
}
