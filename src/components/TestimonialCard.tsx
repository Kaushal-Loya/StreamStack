
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  className?: string;
}

export function TestimonialCard({ name, role, quote, rating, className }: TestimonialCardProps) {
  return (
    <div className={cn("stream-card p-6 flex flex-col", className)}>
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "fill-stream-accent-orange text-stream-accent-orange" : "text-stream-gray-light"}
          />
        ))}
      </div>
      <blockquote className="flex-1">
        <p className="text-foreground/80 text-sm mb-4">&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <div className="mt-4 flex items-center">
        <div className="h-10 w-10 rounded-full bg-stream-purple-light text-stream-purple flex items-center justify-center font-medium">
          {name.split(' ').map(part => part[0]).join('')}
        </div>
        <div className="ml-3">
          <h4 className="text-sm font-medium">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
