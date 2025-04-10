
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stream-purple-light via-background to-background -z-10"></div>
      <div className="stream-container py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="stream-gradient-text">Stream</span> Unlimited Entertainment
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[600px]">
              Watch unlimited movies, TV shows, and documentaries on any device, anywhere, anytime. Subscribe now and enjoy the best streaming experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-stream-purple hover:bg-stream-purple-dark text-white" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="group gap-2" asChild>
                <Link to="/demo">
                  <PlayCircle size={20} className="text-stream-purple group-hover:text-stream-purple-dark" />
                  <span>Watch Demo</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 stream-card p-2 overflow-hidden mx-auto md:ml-auto md:mr-0 max-w-[400px] animate-fade-in">
              <div className="rounded-lg overflow-hidden aspect-video bg-stream-purple-dark/20">
                <img
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
                  alt="Streaming interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 rounded-lg shadow-lg p-4 backdrop-blur-sm">
                <h3 className="font-medium mb-1">Continue watching</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Episode 3: The Journey</span>
                  <Button size="sm" variant="ghost" className="h-8 gap-1">
                    <PlayCircle size={16} />
                    <span className="text-xs">Play</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-stream-accent-violet/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-stream-accent-orange/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
