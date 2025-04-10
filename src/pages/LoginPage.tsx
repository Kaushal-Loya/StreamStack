
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { EyeIcon, EyeOffIcon, MailIcon, KeyIcon, Zap } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a demo function - in a real app, you would connect this to your auth service
    toast({
      title: "Login Attempted",
      description: "This is a demo. In a real app, you would be logged in now.",
      duration: 5000,
    });
    
    console.log("Login attempted with:", { email, password, rememberMe });
  };

  return (
    <div className="flex flex-col min-h-screen cyber-grid-bg">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-auto px-4 relative">
          <div className="text-center mb-8">
            <Zap size={40} className="text-cyber-neon inline-block mb-2 animate-pulse" />
            <h1 className="text-3xl font-display tracking-wider mb-2 cyber-glitch-text" data-text="ACCESS PORTAL">ACCESS PORTAL</h1>
            <p className="text-muted-foreground">Connect to your CyberStream network</p>
          </div>
          
          <div className="backdrop-blur-md border border-cyber-neon/30 hover:border-cyber-neon/50 transition-all hover:shadow-lg hover:shadow-cyber-neon/20 p-8 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-cyber-neon">ID CODE</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-cyber-neon group-hover:text-glow">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="pl-10 cyber-input"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-cyber-neon">SECURITY KEY</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-cyber-neon group-hover:text-glow">
                    <KeyIcon className="h-5 w-5" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 cyber-input" 
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-cyber-neon hover:text-glow"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-cyber-neon data-[state=checked]:bg-cyber-neon data-[state=checked]:text-cyber-dark"
                  />
                  <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember device
                  </Label>
                </div>
                <Link to="/forgot-password" className="text-sm text-cyber-neon hover:text-glow hover:underline">
                  Reset access
                </Link>
              </div>
              
              <Button 
                type="submit" 
                className="w-full cyber-button-primary group"
              >
                <span className="relative z-10 group-hover:text-cyber-dark">CONNECT</span>
              </Button>
              
              <div className="text-center text-sm">
                <span className="text-muted-foreground">No active account?</span>{" "}
                <Link to="/signup" className="text-cyber-neon hover:text-glow hover:underline">
                  Register
                </Link>
              </div>
            </form>
          </div>
          
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyber-neon/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyber-neon-pink/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
