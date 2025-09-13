export default function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text" data-testid="about-title">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="about-description">
            I'm a Computer Science student at the University of British Columbia with a perfect 4.33 GPA, 
            passionate about building innovative software solutions. With experience in full-stack development, 
            AI integration, and a strong foundation in software engineering principles, I enjoy creating 
            applications that solve real-world problems.
          </p>
        </div>
        
        <div className="fade-in-element">
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary" data-testid="education-title">Education</h3>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-foreground" data-testid="degree-title">
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-secondary font-medium" data-testid="university-name">
                    University of British Columbia
                  </p>
                  <p className="text-muted-foreground" data-testid="gpa">
                    GPA: 4.33/4.33 (Perfect)
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-sm text-muted-foreground md:text-right">
                  <p data-testid="university-location">Vancouver, BC</p>
                  <p data-testid="study-period">2024 - Present</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground" data-testid="coursework">
                  <strong>Relevant Coursework:</strong> Models of Computation, Software Construction, Data Structures and Algorithms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
