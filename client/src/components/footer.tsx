import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold gradient-text" data-testid="footer-name">Jon Liu</span>
            <p className="text-muted-foreground mt-2" data-testid="footer-title">
              Computer Science Student & Software Developer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/jliu4242" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              data-testid="footer-github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:Jonliu4242@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              data-testid="footer-email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p data-testid="footer-copyright">&copy; 2025 Jon Liu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
