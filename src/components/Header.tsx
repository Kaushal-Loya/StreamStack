
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyber-neon/30 bg-cyber-dark-blue/80 backdrop-blur-md">
      <div className="stream-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="rounded-sm bg-cyber-gradient-bg p-1 transition-all duration-300 group-hover:box-glow">
                <div className="h-6 w-6 rounded-sm bg-cyber-dark text-cyber-neon flex items-center justify-center font-bold text-sm">
                  <Zap size={16} strokeWidth={2.5} className="animate-pulse" />
                </div>
              </div>
              <span className="text-xl font-display tracking-wider">
                CYBER<span className="text-cyber-neon text-glow">STREAM</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyber-neon relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-full after:origin-left after:scale-x-0 after:bg-cyber-neon after:transition-transform hover:after:scale-x-100 hover:text-glow",
                    location.pathname === item.path
                      ? "text-cyber-neon text-glow after:scale-x-100"
                      : "text-foreground/80 after:scale-x-0"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" asChild className="border-cyber-neon hover:text-cyber-neon transition-colors hover:border-cyber-neon/80 hover:text-glow">
                <Link to="/login">Log in</Link>
              </Button>
              <Button className="bg-cyber-neon hover:bg-cyber-neon/80 text-cyber-dark hover:box-glow" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-cyber-neon hover:text-glow"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyber-neon px-2 py-1.5 rounded-sm",
                    location.pathname === item.path
                      ? "text-cyber-neon bg-cyber-neon/10 text-glow"
                      : "text-foreground/80"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t border-cyber-neon/30">
                <Button variant="outline" asChild className="w-full justify-center border-cyber-neon text-cyber-neon hover:text-glow">
                  <Link to="/login">Log in</Link>
                </Button>
                <Button className="w-full justify-center bg-cyber-neon hover:bg-cyber-neon/80 text-cyber-dark hover:box-glow" asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
