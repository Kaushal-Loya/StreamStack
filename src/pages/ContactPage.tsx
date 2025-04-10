
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Zap
} from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [isFormFocused, setIsFormFocused] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="stream-container py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-12 relative">
            <Zap className="text-cyber-neon mb-4 h-10 w-10 mx-auto animate-pulse" />
            <h1 className="text-4xl font-bold mb-4 cyber-glitch-text relative" data-text="NEURAL UPLINK">NEURAL <span className="text-cyber-neon text-glow">UPLINK</span></h1>
            <p className="text-muted-foreground">
              Establish connection with our network nodes. Direct transmission to our cyberspace operatives.
            </p>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyber-neon/5 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 cyber-glitch-text" data-text="NETWORK NODES">NETWORK <span className="text-cyber-neon text-glow">NODES</span></h2>
              
              <div className="grid gap-6 mb-8">
                <Card className="p-4 flex items-start space-x-4 backdrop-blur-md bg-cyber-dark-blue/30 border-cyber-neon/30 hover:border-cyber-neon/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] group">
                  <Mail className="h-6 w-6 text-cyber-neon shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium group-hover:text-cyber-neon transition-colors">Data Transmission</h3>
                    <p className="text-muted-foreground">support@streamstack.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Response Time: T-minus 24 hours</p>
                  </div>
                </Card>
                
                <Card className="p-4 flex items-start space-x-4 backdrop-blur-md bg-cyber-dark-blue/30 border-cyber-neon/30 hover:border-cyber-neon/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] group">
                  <Phone className="h-6 w-6 text-cyber-neon shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium group-hover:text-cyber-neon transition-colors">Voice Channel</h3>
                    <p className="text-muted-foreground">+1 (800) 123-4567</p>
                    <p className="text-sm text-muted-foreground mt-1">Active: 09:00-18:00 [EST Time Sector]</p>
                  </div>
                </Card>
                
                <Card className="p-4 flex items-start space-x-4 backdrop-blur-md bg-cyber-dark-blue/30 border-cyber-neon/30 hover:border-cyber-neon/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] group">
                  <MapPin className="h-6 w-6 text-cyber-neon shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium group-hover:text-cyber-neon transition-colors">Physical Coordinates</h3>
                    <p className="text-muted-foreground">
                      123 Streaming Avenue<br />
                      Digital City, DC 10101<br />
                      United States
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4 flex items-start space-x-4 backdrop-blur-md bg-cyber-dark-blue/30 border-cyber-neon/30 hover:border-cyber-neon/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] group">
                  <Clock className="h-6 w-6 text-cyber-neon shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium group-hover:text-cyber-neon transition-colors">Operational Cycles</h3>
                    <p className="text-muted-foreground">
                      Monday-Friday: 09:00-18:00 [EST]<br />
                      Saturday: 10:00-16:00 [EST]<br />
                      Sunday: System Maintenance
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4 flex items-start space-x-4 backdrop-blur-md bg-cyber-dark-blue/30 border-cyber-neon/30 hover:border-cyber-neon/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] group">
                  <MessageCircle className="h-6 w-6 text-cyber-neon shrink-0 mt-0.5 group-hover:animate-pulse" />
                  <div>
                    <h3 className="font-medium group-hover:text-cyber-neon transition-colors">Live Neural Link</h3>
                    <p className="text-muted-foreground">
                      Direct interface with our support AI
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 border-cyber-neon text-cyber-neon hover:bg-cyber-neon/10 hover:text-glow group">
                      <span className="relative z-10">Initialize Link</span>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 cyber-glitch-text" data-text="TRANSMISSION FORM">TRANSMISSION <span className="text-cyber-neon text-glow">FORM</span></h2>
              <form 
                className={`space-y-6 backdrop-blur-sm p-6 border rounded-xl relative overflow-hidden transition-all duration-500 ${
                  isFormFocused 
                    ? "border-cyber-neon shadow-[0_0_30px_rgba(0,240,255,0.3)]" 
                    : "border-border"
                }`}
                onFocus={() => setIsFormFocused(true)}
                onBlur={() => setIsFormFocused(false)}
              >
                <div className="absolute inset-0 bg-cyber-dark-blue/30 -z-10"></div>
                
                {/* Animated scanner line effect */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-cyber-neon/20 -z-10 ${isFormFocused ? "animate-scan-line" : ""}`}></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-cyber-neon">First Name</Label>
                    <div className="relative group">
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="bg-transparent border-cyber-neon/30 focus:border-cyber-neon pl-3 transition-all"
                      />
                      <div className="absolute bottom-0 left-0 h-[1px] bg-cyber-neon w-0 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-cyber-neon">Last Name</Label>
                    <div className="relative group">
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="bg-transparent border-cyber-neon/30 focus:border-cyber-neon pl-3 transition-all"
                      />
                      <div className="absolute bottom-0 left-0 h-[1px] bg-cyber-neon w-0 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cyber-neon">Email</Label>
                  <div className="relative group">
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      className="bg-transparent border-cyber-neon/30 focus:border-cyber-neon pl-3 transition-all"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] bg-cyber-neon w-0 group-hover:w-full transition-all duration-300"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-cyber-neon">Subject</Label>
                  <div className="relative group">
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="bg-transparent border-cyber-neon/30 focus:border-cyber-neon pl-3 transition-all"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] bg-cyber-neon w-0 group-hover:w-full transition-all duration-300"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cyber-neon">Message</Label>
                  <div className="relative group">
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      className="min-h-[150px] bg-transparent border-cyber-neon/30 focus:border-cyber-neon transition-all resize-none"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] bg-cyber-neon w-0 group-hover:w-full transition-all duration-300"></div>
                  </div>
                </div>
                
                <Button 
                  className="w-full relative overflow-hidden group border border-cyber-neon bg-transparent hover:bg-cyber-neon/10"
                >
                  <span className="absolute top-0 left-0 w-full h-[1px] bg-cyber-neon transform origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500"></span>
                  <span className="absolute bottom-0 right-0 w-full h-[1px] bg-cyber-neon transform origin-left scale-x-0 group-hover:scale-x-100 group-hover:origin-right transition-transform duration-500"></span>
                  <span className="absolute left-0 bottom-0 h-full w-[1px] bg-cyber-neon transform origin-bottom scale-y-0 group-hover:scale-y-100 group-hover:origin-top transition-transform duration-500"></span>
                  <span className="absolute right-0 top-0 h-full w-[1px] bg-cyber-neon transform origin-top scale-y-0 group-hover:scale-y-100 group-hover:origin-bottom transition-transform duration-500"></span>
                  
                  <span className="relative z-10 flex items-center justify-center text-cyber-neon group-hover:text-glow">
                    <Send className="mr-2 h-4 w-4" /> TRANSMIT MESSAGE
                  </span>
                </Button>
              </form>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 bg-cyber-neon/10 backdrop-blur-sm z-10 flex items-center justify-center">
              <Card className="p-6 max-w-md text-center backdrop-blur-md bg-cyber-dark-blue/50 border-cyber-neon/30 relative overflow-hidden">
                <h3 className="font-bold text-xl mb-2 cyber-glitch-text" data-text="HOLOGRAPHIC MAP">HOLOGRAPHIC <span className="text-cyber-neon text-glow">MAP</span></h3>
                <p className="text-muted-foreground">Cyberspace coordinates loading. Spatial visualization currently in development.</p>
                
                {/* Scanning effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-cyber-neon/30 animate-scan-line"></div>
              </Card>
            </div>
            <div className="h-full w-full bg-[linear-gradient(45deg,rgba(0,240,255,0.05)_25%,transparent_25%,transparent_50%,rgba(0,240,255,0.05)_50%,rgba(0,240,255,0.05)_75%,transparent_75%,transparent)] bg-[length:50px_50px] animate-data-stream"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
