import * as React from "react";
import { cn } from "@/lib/utils";

function Slot({ children }) {
  return children;
}

export function Button({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))]",
    variant === "default" &&
      "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95 active:scale-95",
    variant === "outline" &&
      "border bg-transparent hover:bg-[hsl(var(--secondary))]/50 active:scale-95",
    className
  );

  if (asChild) {
    // clone child and merge props/className
    const child = React.Children.only(props.children);
    return React.cloneElement(child, {
      ...props,
      className: cn(styles, child.props.className),
    });
  }

  return <Comp className={styles} {...props} />;
}