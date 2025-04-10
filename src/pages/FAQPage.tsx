
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is StreamStack?",
      answer: "StreamStack is a premium streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price."
    },
    {
      question: "How much does StreamStack cost?",
      answer: "StreamStack offers several different subscription plans to fit your needs. The Basic plan starts at $8.99 per month, the Standard plan at $13.99 per month, and the Premium plan at $17.99 per month. You can save up to 20% by choosing an annual subscription."
    },
    {
      question: "Where can I watch StreamStack?",
      answer: "You can watch StreamStack through any internet-connected device that offers the StreamStack app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch StreamStack on your computer using an internet browser."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "StreamStack is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on StreamStack?",
      answer: "StreamStack has an extensive library of feature films, documentaries, TV shows, anime, award-winning StreamStack originals, and more. Watch as much as you want, anytime you want."
    },
    {
      question: "Is StreamStack good for kids?",
      answer: "The StreamStack Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
    },
    {
      question: "Can I download shows to watch offline?",
      answer: "Yes! The download feature allows you to download TV shows and movies to your iOS, Android, or Windows 10 device and watch them without an internet connection. Download and go!"
    },
    {
      question: "How do I access StreamStack in different countries?",
      answer: "Your StreamStack membership is portable and you can watch in any country where StreamStack is available. The selection of TV shows and movies may differ based on the country and will change from time to time."
    }
  ];
  
  const categories = [
    "Getting Started", 
    "Account & Billing", 
    "Watching StreamStack", 
    "Technical Issues",
    "Content",
    "Features"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="stream-container py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked <span className="stream-gradient-text">Questions</span></h1>
            <p className="text-muted-foreground mb-8">
              Find answers to the most common questions about StreamStack.
            </p>
            <div className="relative max-w-md mx-auto">
              <Input 
                placeholder="Search for answers..." 
                className="pl-10 py-6 h-auto"
              />
              <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="w-full justify-start text-left"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
