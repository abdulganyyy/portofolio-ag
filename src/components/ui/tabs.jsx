import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef(function TabsList(
  { className, ...props },
  ref
) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        // mobile: scroll horizontal, tidak wrap tinggi
        "no-scrollbar inline-flex w-full max-w-full items-center gap-1 overflow-x-auto whitespace-nowrap",
        "rounded-full border bg-[hsl(var(--card))]/60 backdrop-blur p-1",
        "sm:w-auto sm:justify-center sm:gap-2 sm:p-2",
        className
      )}
      {...props}
    />
  );
});

export const TabsTrigger = React.forwardRef(function TabsTrigger(
  { className, ...props },
  ref
) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        // mobile lebih kecil
        "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-all",
        // desktop lebih besar
        "sm:px-4 sm:py-2 sm:text-sm",
        "border border-transparent",
        "data-[state=active]:bg-[hsl(var(--primary))] data-[state=active]:text-[hsl(var(--primary-foreground))] data-[state=active]:shadow-sm",
        "hover:bg-[hsl(var(--secondary))]/50",
        className
      )}
      {...props}
    />
  );
});

export const TabsContent = TabsPrimitive.Content;