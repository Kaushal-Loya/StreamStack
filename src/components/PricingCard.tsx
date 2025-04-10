
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: string[];
  highlighted?: boolean;
  isAnnual: boolean;
  className?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  isAnnual,
  className,
}: PricingCardProps) {
  const currentPrice = isAnnual ? price.annually : price.monthly;

  return (
    <div
      className={cn(
        "stream-card p-6 relative transition-all",
        highlighted && "border-2 border-stream-purple scale-105 shadow-lg shadow-stream-purple/10",
        className
      )}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-stream-purple text-white text-xs font-medium py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="mt-2">
          <span className="text-3xl font-bold">${currentPrice}</span>
          <span className="text-muted-foreground ml-1">/{isAnnual ? 'year' : 'month'}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="mr-2 text-stream-purple shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={cn(
          "w-full",
          highlighted
            ? "bg-stream-purple hover:bg-stream-purple-dark text-white"
            : "bg-secondary hover:bg-secondary/80"
        )}
        asChild
      >
        <Link to={`/signup?plan=${title.toLowerCase()}`}>
          Choose {title}
        </Link>
      </Button>
    </div>
  );
}
