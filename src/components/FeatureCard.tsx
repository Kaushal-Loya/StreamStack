
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "stream-card p-6 hover-scale group",
      className
    )}>
      <div className="rounded-full bg-stream-purple-light p-3 inline-flex mb-4 text-stream-purple-dark group-hover:bg-stream-purple group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
