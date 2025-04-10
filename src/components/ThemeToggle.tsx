
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative overflow-hidden rounded-sm border border-cyber-neon/30 hover:border-cyber-neon/60 group transition-all duration-300"
    >
      <div className="absolute inset-0 bg-cyber-neon/5 group-hover:bg-cyber-neon/10 transition-colors duration-300" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-neon/70 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-cyber-neon/70 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="absolute left-0 top-0 h-full w-[1px] bg-cyber-neon/70 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
      <div className="absolute right-0 bottom-0 h-full w-[1px] bg-cyber-neon/70 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
      
      <div className="relative z-10">
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-cyber-neon-yellow text-glow-yellow transition-all animate-pulse" />
        ) : (
          <Sun className="h-5 w-5 text-cyber-neon-yellow text-glow-yellow transition-all animate-pulse" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
