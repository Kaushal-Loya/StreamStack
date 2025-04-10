
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PricingToggleProps {
  onChange: (isAnnual: boolean) => void;
  className?: string;
}

export function PricingToggle({ onChange, className }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
    onChange(!isAnnual);
  };

  return (
    <div className={cn("flex items-center justify-center space-x-3", className)}>
      <span className={cn(
        "text-sm font-medium transition-colors",
        !isAnnual ? "text-stream-purple" : "text-muted-foreground"
      )}>
        Monthly
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isAnnual}
        className={cn(
          "relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors",
          isAnnual ? "bg-stream-purple" : "bg-muted"
        )}
        onClick={handleToggle}
      >
        <span className="sr-only">Use annual billing</span>
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition-transform",
            isAnnual ? "translate-x-6" : "translate-x-0"
          )}
        />
      </button>
      <div className="flex items-center">
        <span className={cn(
          "text-sm font-medium transition-colors",
          isAnnual ? "text-stream-purple" : "text-muted-foreground"
        )}>
          Annual
        </span>
        <span className="ml-2 rounded-full bg-stream-accent-orange/10 px-2 py-0.5 text-xs font-medium text-stream-accent-orange">
          Save 20%
        </span>
      </div>
    </div>
  );
}
