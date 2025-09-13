export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "UBC Motion",
      period: "May 2025 - Present",
      type: "Current Position",
      typeColor: "bg-primary/20 text-primary",
      responsibilities: [
        "Developed a scalable recycling pickup web app for United We Can serving 600+ customers using Next.js and Supabase, enabling real-time request management and driver coordination",
        "Utilized GitHub-based workflow with pull requests and code reviews to maintain code quality and streamline development through CI/CD pipelines"
      ],
      bulletColor: "bg-primary"
    },
    {
      title: "Math Instructor",
      company: "Richmond Mathnasium",
      period: "August 2023 - September 2024",
      type: "Education",
      typeColor: "bg-secondary/20 text-secondary",
      responsibilities: [
        "Developed strong communication and problem-solving skills through explaining complex mathematical concepts to improve student comprehension and engagement",
        "Enhanced ability to break down complex problems into manageable steps, a skill directly applicable to software development and debugging"
      ],
      bulletColor: "bg-secondary"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text" data-testid="experience-title">
            Extracurriculars
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.title} className="fade-in-element">
              <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`experience-title-${index}`}>
                      {experience.title}
                    </h3>
                    <p className={`text-xl font-semibold mb-2 ${index === 0 ? 'text-primary' : 'text-secondary'}`} data-testid={`experience-company-${index}`}>
                      {experience.company}
                    </p>
                    <p className="text-muted-foreground" data-testid={`experience-period-${index}`}>
                      {experience.period}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className={`${experience.typeColor} px-4 py-2 rounded-full text-sm font-medium`} data-testid={`experience-type-${index}`}>
                      {experience.type}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <div key={respIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${experience.bulletColor} mt-2 flex-shrink-0`}></div>
                      <p data-testid={`experience-responsibility-${index}-${respIndex}`}>
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
