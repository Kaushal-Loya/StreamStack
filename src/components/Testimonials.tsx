
import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Premium Subscriber",
    quote: "StreamStack completely changed how I enjoy movies. The interface is so intuitive, and I never run out of great content to watch!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Family Plan User",
    quote: "My entire family loves StreamStack. The multiple profiles feature is perfect for us, and the kids mode gives me peace of mind.",
    rating: 5
  },
  {
    name: "Jamie Smith",
    role: "Standard Subscriber",
    quote: "I've tried many streaming services, but StreamStack offers the best value for money. Their selection of documentaries is outstanding.",
    rating: 4
  },
  {
    name: "Alex Rodriguez",
    role: "Student Plan User",
    quote: "The student discount made this affordable, and the download feature is perfect for my commute to university.",
    rating: 5
  },
  {
    name: "Taylor Wilson",
    role: "Premium Subscriber",
    quote: "The 4K streaming quality is phenomenal. I'm constantly discovering new shows thanks to their recommendation algorithm.",
    rating: 5
  },
  {
    name: "Jordan Lee",
    role: "Standard Subscriber",
    quote: "Customer service has been exceptional. When I had an issue, they resolved it immediately. Very impressed with their support.",
    rating: 4
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemsToShow = 3;

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleNext = () => {
    setActiveIndex(prev => 
      prev + itemsToShow >= testimonials.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex(prev => 
      prev === 0 ? Math.max(0, testimonials.length - itemsToShow) : prev - 1
    );
  };

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="stream-container">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our <span className="stream-gradient-text">Subscribers</span> Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our community has to say about their StreamStack experience.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={sliderRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * (sliderWidth / Math.min(itemsToShow, testimonials.length))}px)` 
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "p-3 transition-opacity duration-300",
                    activeIndex > index && "opacity-0 pointer-events-none",
                    "min-w-full md:min-w-[50%] lg:min-w-[33.333%]"
                  )}
                  style={{ 
                    minWidth: `${100 / Math.min(itemsToShow, window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3)}%` 
                  }}
                >
                  <TestimonialCard 
                    name={testimonial.name}
                    role={testimonial.role}
                    quote={testimonial.quote}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="rounded-full h-10 w-10"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="rounded-full h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
