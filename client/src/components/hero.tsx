import { Github, Mail, ChevronDown, Linkedin } from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-element">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text" data-testid="hero-name">Jon Liu</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium" data-testid="hero-role">
            Computer Science Student & Software Developer
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={handleScrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              data-testid="button-view-work"
            >
              My Work
            </button>
            <button 
              onClick={handleScrollToExperience}
              className="border border-border hover:border-primary text-foreground hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              data-testid="button-view-experience"
            >
              My Experience
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <a 
              href="https://github.com/jliu4242" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              data-testid="link-github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jon-liu-36808a320/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
