import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { useToast } from "@/components/hooks/use-toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <ToastPrimitives.Provider swipeDirection="right">
      {toasts.map(({ id, title, description, open, onOpenChange }) => (
        <ToastPrimitives.Root
          key={id}
          open={open}
          onOpenChange={onOpenChange}
          className="fixed bottom-5 right-5 z-9999 w-[320px] rounded-lg border bg-[hsl(var(--card))] p-4 shadow-lg"
        >
          <div className="text-left space-y-1">
            {title ? <div className="font-semibold">{title}</div> : null}
            {description ? (
              <div className="text-sm opacity-80">{description}</div>
            ) : null}
          </div>

          <button
            onClick={() => dismiss(id)}
            className="absolute top-2 right-2 p-1 opacity-70 hover:opacity-100"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </ToastPrimitives.Root>
      ))}
      <ToastPrimitives.Viewport />
    </ToastPrimitives.Provider>
  );
}
