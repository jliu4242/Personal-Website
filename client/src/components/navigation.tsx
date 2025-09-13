import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold gradient-text">Jon Liu</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                onClick={(e) => handleLinkClick(e, "home")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-home"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleLinkClick(e, "about")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-about"
              >
                About
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleLinkClick(e, "projects")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-projects"
              >
                Projects
              </a>
              <a 
                href="#experience" 
                onClick={(e) => handleLinkClick(e, "experience")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-experience"
              >
                Experience
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, "home")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-home"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleLinkClick(e, "about")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-about"
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleLinkClick(e, "projects")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-projects"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleLinkClick(e, "experience")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              data-testid="mobile-nav-experience"
            >
              Experience
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
