import { cn } from "@/lib/utils";

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        "bg-[hsl(var(--secondary))]/60",
        className
      )}
      {...props}
    />
  );
}