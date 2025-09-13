import { Github, ExternalLink } from "lucide-react";
import gameOf24 from '../images/gameof24.png';
import lessonplan from '../images/lessonplangenerator.png';
import tftdle from '../images/tftdle.jpg';
import studybot from '../images/studybot.png';

export default function Projects() {
  const projects = [
    {
      title: "StudyBot",
      description: "AI-powered question generation service using OpenAI's API with FastAPI backend. Features context-building pipeline with embedding and cosine similarity for improved relevance.",
      image: studybot,
      tech: ["React", "Python", "OpenAI API", "Auth0"],
      github: "https://github.com/jliu4242/Studybot",
      demo: null,
      date: "September 2025"
    },
    {
      title: "AI Lesson Planner",
      description: "Full-stack application that creates interactive lesson plans using AI. Built with React + TypeScript frontend and Express.js backend, integrated with Firebase for authentication and storage.",
      image: lessonplan,
      tech: ["TypeScript", "Express.js", "Firebase", "Azure"],
      github: "https://github.com/jliu4242/Lesson-Planner",
      demo: "https://yellow-ocean-07739b60f.1.azurestaticapps.net/",
      date: "August 2025"
    },
    {
      title: "TFTdle",
      description: "Interactive Java GUI game using Swing with clean OOP architecture. Features comprehensive JUnit testing with >98% code coverage.",
      image: tftdle,
      tech: ["Java", "Swing", "JUnit", "OOP"],
      github: "https://github.com/jliu4242/tftdle",
      demo: null,
      date: "February 2025"
    },
    {
      title: "Game of 24",
      description: "Web browser implementation of the classic mathematical card game where players use four cards to reach the target number 24 through arithmetic operations.",
      image: gameOf24,
      tech: ["JavaScript", "HTML", "CSS", "Web Game"],
      github: "https://github.com/jliu4242/Game-of-24",
      demo: null,
      date: "2024"
    }
  ];

  const techColors: Record<string, string> = {
    "React": "bg-primary/20 text-primary",
    "Python": "bg-secondary/20 text-secondary",
    "OpenAI API": "bg-accent/20 text-accent",
    "Auth0": "bg-muted/20 text-foreground",
    "TypeScript": "bg-primary/20 text-primary",
    "Express.js": "bg-secondary/20 text-secondary",
    "Firebase": "bg-accent/20 text-accent",
    "Azure": "bg-muted/20 text-foreground",
    "Java": "bg-primary/20 text-primary",
    "Swing": "bg-secondary/20 text-secondary",
    "JUnit": "bg-accent/20 text-accent",
    "OOP": "bg-muted/20 text-foreground",
    "Next.js": "bg-primary/20 text-primary",
    "Supabase": "bg-secondary/20 text-secondary",
    "CI/CD": "bg-accent/20 text-accent",
    "Real-time": "bg-muted/20 text-foreground",
    "Docker": "bg-secondary/20 text-secondary",
    "OpenAI Whisper": "bg-accent/20 text-accent",
    "ElevenLabs": "bg-muted/20 text-foreground",
    "JavaScript": "bg-primary/20 text-primary",
    "HTML": "bg-secondary/20 text-secondary",
    "CSS": "bg-accent/20 text-accent",
    "Web Game": "bg-muted/20 text-foreground"
  };

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="projects-description">
            A showcase of my recent work in full-stack development, AI integration, and software engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="fade-in-element card-hover bg-card border border-border rounded-xl p-6 shadow-lg"
              data-testid={`project-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <img 
                src={project.image} 
                alt={`${project.title} - Project screenshot`}
                className="w-full h-48 object-cover rounded-lg mb-6" 
              />
              
              <h3 className="text-xl font-bold mb-3 text-foreground" data-testid={`project-title-${index}`}>
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={tech}
                    className={`${techColors[tech] || 'bg-muted/20 text-foreground'} px-3 py-1 rounded-full text-sm font-medium`}
                    data-testid={`project-tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${index}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  {project.github ? (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-semibold transition-colors flex items-center gap-2"
                      data-testid={`project-github-${index}`}
                    >
                      View Code <Github className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground font-semibold" data-testid={`project-private-${index}`}>
                      {project.title.includes("UBC Motion") ? "Private Repository" : "Research Paper"}
                    </span>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80 font-semibold transition-colors flex items-center gap-2"
                      data-testid={`project-demo-${index}`}
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                
                <span className="text-sm text-muted-foreground" data-testid={`project-date-${index}`}>
                  {project.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
