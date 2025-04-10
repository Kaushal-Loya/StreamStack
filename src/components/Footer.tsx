
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Zap, Globe, Shield, Server } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-cyber-neon/30 bg-cyber-dark-blue/80 backdrop-blur-md">
      <div className="stream-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              Unlimited neural streaming for all your entertainment needs. Connect anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-cyber-neon transition-colors hover:text-glow" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cyber-neon transition-colors hover:text-glow" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cyber-neon transition-colors hover:text-glow" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cyber-neon transition-colors hover:text-glow" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-cyber-neon mb-4 tracking-wider text-glow">CORPORATION</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Careers</Link></li>
              <li><Link to="/press" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Press</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-cyber-neon mb-4 tracking-wider text-glow">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Help & FAQ</Link></li>
              <li><Link to="/devices" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Supported Devices</Link></li>
              <li><Link to="/account" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Account</Link></li>
              <li><Link to="/feedback" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Feedback</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-cyber-neon mb-4 tracking-wider text-glow">LEGAL</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Cookie Policy</Link></li>
              <li><Link to="/legal" className="text-muted-foreground hover:text-cyber-neon hover:text-glow">Legal Notices</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-neon/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 items-center mb-4 md:mb-0">
            <span className="text-xs flex items-center gap-1 text-muted-foreground">
              <Shield size={14} className="text-cyber-neon-yellow"/> SECURE CONNECTION
            </span>
            <span className="text-xs flex items-center gap-1 text-muted-foreground">
              <Server size={14} className="text-cyber-neon"/> DATA CENTER OPTIMIZED
            </span>
            <span className="text-xs flex items-center gap-1 text-muted-foreground">
              <Globe size={14} className="text-cyber-neon-pink"/> GLOBAL NETWORK
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CyberStream Corp. All rights secured.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="text-xs bg-transparent border border-cyber-neon/30 rounded-sm px-2 py-1 text-muted-foreground focus:outline-none focus:border-cyber-neon focus:shadow-[0_0_5px_rgba(0,240,255,0.3)]">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="jp">日本語</option>
              <option value="cn">中文</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
