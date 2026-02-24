import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-[hsl(var(--card))]/70 backdrop-blur shadow-sm overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-6", className)} {...props} />;
}