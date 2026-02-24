import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CarouselContext = React.createContext(null);

export function Carousel({ className, options, children }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		containScroll: "trimSnaps",
		dragFree: false,
		...options,
	});

	const setViewportEl = React.useCallback(
		(node) => {
			if (!node) return;
			emblaRef(node);
		},
		[emblaRef],
	);

	const [canPrev, setCanPrev] = React.useState(false);
	const [canNext, setCanNext] = React.useState(false);

	const onSelect = React.useCallback(() => {
		if (!emblaApi) return;
		setCanPrev(emblaApi.canScrollPrev());
		setCanNext(emblaApi.canScrollNext());
	}, [emblaApi]);

	React.useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
		return () => {
			emblaApi.off("select", onSelect);
			emblaApi.off("reInit", onSelect);
		};
	}, [emblaApi, onSelect]);

	const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	return (
		<CarouselContext.Provider value={{ setViewportEl, scrollPrev, scrollNext, canPrev, canNext }}>
			<div className={cn("relative", className)}>{children}</div>
		</CarouselContext.Provider>
	);
}

export function CarouselContent({ className, children }) {
	const ctx = React.useContext(CarouselContext);

	const viewportCallbackRef = React.useCallback(
		(node) => {
			if (!node) return;
			ctx?.setViewportEl?.(node);
		},
		[ctx],
	);

	return (
		<div
			ref={viewportCallbackRef}
			className="overflow-hidden"
		>
			<div className={cn("flex", className)}>{children}</div>
		</div>
	);
}

export function CarouselItem({ className, children }) {
	return <div className={cn("shrink-0 grow-0", className)}>{children}</div>;
}

export function CarouselPrevious({ className }) {
	const ctx = React.useContext(CarouselContext);
	return (
		<Button
			type="button"
			variant="outline"
			onClick={ctx.scrollPrev}
			disabled={!ctx.canPrev}
			className={cn("h-9 w-9 rounded-full p-0", className)}
			aria-label="Previous"
		>
			<ChevronLeft size={18} />
		</Button>
	);
}

export function CarouselNext({ className }) {
	const ctx = React.useContext(CarouselContext);
	return (
		<Button
			type="button"
			variant="outline"
			onClick={ctx.scrollNext}
			disabled={!ctx.canNext}
			className={cn("h-9 w-9 rounded-full p-0", className)}
			aria-label="Next"
		>
			<ChevronRight size={18} />
		</Button>
	);
}
