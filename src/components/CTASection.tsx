
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-stream-purple-light dark:bg-stream-purple-dark/20 -z-10"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-stream-purple/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-stream-accent-violet/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="stream-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Streaming?
          </h2>
          <p className="text-lg mb-8 text-foreground/80 max-w-xl mx-auto">
            Join millions of happy subscribers today. Start your 7-day free trial and cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-stream-purple hover:bg-stream-purple-dark text-white" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">View Plans</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-foreground/60">
            No credit card required for trial. Cancel before your trial ends and you won't be charged.
          </p>
        </div>
      </div>
    </section>
  );
}
