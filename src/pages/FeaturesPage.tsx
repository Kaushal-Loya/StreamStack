import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";
import { CTASection } from "@/components/CTASection";
import { 
  Sparkles, 
  Crown, 
  Zap, 
  Globe2, 
  Shield, 
  Laptop 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdvancedFeatures = () => {
  const advancedFeatures = [
    {
      title: "Smart Recommendations",
      description: "Our AI-powered recommendation engine learns your preferences to suggest content you'll love.",
      icon: <Sparkles className="h-8 w-8 text-stream-purple" />
    },
    {
      title: "Premium Content",
      description: "Access exclusive shows and movies only available to StreamStack subscribers.",
      icon: <Crown className="h-8 w-8 text-stream-purple" />
    },
    {
      title: "Lightning-Fast Streaming",
      description: "Enjoy buffer-free viewing with our optimized streaming technology.",
      icon: <Zap className="h-8 w-8 text-stream-purple" />
    },
    {
      title: "Global Content",
      description: "Explore shows and movies from around the world with multi-language support.",
      icon: <Globe2 className="h-8 w-8 text-stream-purple" />
    },
    {
      title: "Enhanced Security",
      description: "Your personal data is protected with state-of-the-art encryption and security protocols.",
      icon: <Shield className="h-8 w-8 text-stream-purple" />
    },
    {
      title: "Seamless Device Switching",
      description: "Start watching on your phone and continue exactly where you left off on your TV.",
      icon: <Laptop className="h-8 w-8 text-stream-purple" />
    }
  ];

  return (
    <section className="stream-container py-16 bg-secondary/50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Advanced <span className="stream-gradient-text">Features</span></h2>
        <p className="text-muted-foreground">
          Take your streaming experience to the next level with these powerful features.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {advancedFeatures.map((feature, index) => (
          <Card key={index} className="backdrop-blur-sm border-stream-purple/10 hover:border-stream-purple/30 transition-all hover:shadow-lg hover:shadow-stream-purple/5 group">
            <CardHeader>
              <div className="mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/70 group-hover:text-foreground/90 transition-colors">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const FeaturesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="stream-container py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Discover StreamStack <span className="stream-gradient-text">Features</span></h1>
            <p className="text-muted-foreground">
              Explore all the amazing features that make StreamStack the best streaming platform available.
              Designed with your entertainment needs in mind.
            </p>
          </div>
        </div>
        <Features />
        <AdvancedFeatures />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
