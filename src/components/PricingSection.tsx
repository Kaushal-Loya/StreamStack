
import { useState } from "react";
import { PricingToggle } from "@/components/PricingToggle";
import { PricingCard } from "@/components/PricingCard";

const pricingPlans = [
  {
    title: "Basic",
    price: {
      monthly: 8.99,
      annually: 89.99
    },
    description: "Perfect for individuals who are new to streaming.",
    features: [
      "HD streaming (1080p)",
      "Watch on 1 device at a time",
      "Unlimited movies and TV shows",
      "Cancel anytime",
      "No ads with limited content"
    ]
  },
  {
    title: "Standard",
    price: {
      monthly: 13.99,
      annually: 139.99
    },
    description: "Great for couples and small families.",
    features: [
      "Full HD streaming (1080p)",
      "Watch on 2 devices at a time",
      "Unlimited movies and TV shows",
      "Download on 2 devices",
      "Cancel anytime",
      "No ads"
    ],
    highlighted: true
  },
  {
    title: "Premium",
    price: {
      monthly: 17.99,
      annually: 179.99
    },
    description: "Perfect for large families and ultimate quality.",
    features: [
      "Ultra HD streaming (4K) and HDR",
      "Watch on 4 devices at a time",
      "Unlimited movies and TV shows",
      "Download on 6 devices",
      "Cancel anytime",
      "No ads",
      "Priority customer support"
    ]
  }
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="stream-container py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent <span className="stream-gradient-text">Pricing</span></h2>
        <p className="text-muted-foreground mb-8">
          Choose the plan that works best for you. All plans include a 7-day free trial.
        </p>
        <PricingToggle onChange={setIsAnnual} className="mb-8" />
      </div>
      <div className="grid gap-8 md:grid-cols-3 md:gap-4 lg:gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            highlighted={plan.highlighted}
            isAnnual={isAnnual}
          />
        ))}
      </div>
      <div className="text-center mt-12 text-sm text-muted-foreground">
        <p>All plans include a 7-day free trial. Cancel anytime. No contracts, no commitments.</p>
        <p className="mt-2">Prices may vary by region. Taxes and additional fees may apply.</p>
      </div>
    </section>
  );
}
