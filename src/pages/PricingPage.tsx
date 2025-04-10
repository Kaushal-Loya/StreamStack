
import { PricingSection } from "@/components/PricingSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="stream-container py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Perfect <span className="stream-gradient-text">Streaming Plan</span></h1>
            <p className="text-muted-foreground">
              Get unlimited access to thousands of movies, TV shows, and more. 
              All plans include a 7-day free trial. Cancel anytime.
            </p>
          </div>
        </div>
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
