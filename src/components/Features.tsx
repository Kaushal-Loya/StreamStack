
import { FeatureCard } from "@/components/FeatureCard";
import { 
  Tablet, 
  Download, 
  FolderHeart, 
  Languages, 
  Layers3, 
  MonitorPlay
} from "lucide-react";

const features = [
  {
    title: "Watch on Any Device",
    description: "Stream on your phone, tablet, laptop, and TV without paying more.",
    icon: Tablet
  },
  {
    title: "Unlimited Downloads",
    description: "Save your favorites offline so you can watch them on the go.",
    icon: Download
  },
  {
    title: "Multiple Profiles",
    description: "Create up to 5 profiles for everyone in your household.",
    icon: Layers3
  },
  {
    title: "4K HDR Quality",
    description: "Experience stunning visuals with 4K HDR streaming capability.",
    icon: MonitorPlay
  },
  {
    title: "Create Watchlists",
    description: "Save shows and movies to your personal watchlist.",
    icon: FolderHeart
  },
  {
    title: "Multi-Language",
    description: "Enjoy content in multiple languages and with subtitles.",
    icon: Languages
  }
];

export function Features() {
  return (
    <section className="stream-container py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Everything You Need to <span className="stream-gradient-text">Stream Better</span></h2>
        <p className="text-muted-foreground">
          Designed for everyone who loves entertainment. Our platform offers the best features to enhance your streaming experience.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
