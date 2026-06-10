const experiences = [
  {
    period: "2024 - Present",
    role: "Software Engineer Associate",
    company: "Curtiss-Wright",
    description: "Working on real-time embedded software for aerospace and defense applications, focusing on reliability and performance in mission-critical systems.",
    technology: ["C", "C++", "Real-Time Operating Systems", "Communication Protocols (CAN, UART, SPI, I2C)", "Linux", "System Integration", "Python", "Git"],
    current: true,
  },
  {
    period: "2023 - 2024",
    role: "Test Engineer",
    company: "Curtiss-Wright",
    description: "Led and designed testing procedures for hydraulics and electrical systems, ensuring adherence to quality standards and specifications on multi-million dollar systems.",
    technology: ["C/C++", "Python", "Hardware-in-the-Loop Testing", "Hydraulics", "Debugging Tools", "Troubleshooting"],
    current: false,
  },
  {
    period: "2021 - 2022",
    role: "Test Engineer Intern",
    company: "Curtiss-Wright",
    description: "Performed thorough mechanical, electrical, and software testing on naval helicopter securing and traversing systems such as winches, probes and rapid securing devices.",
    technology: ["C/C++", "Python", "Hardware Testing", "Debugging Tools", "Team Collaboration"],
    current: false,
  },
]

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
    > 
      <div className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span 
            className="text-secondary-foreground text-sm font-medium
            tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2 
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience Transforming{" "} 
            <span className="font-serif italic font-normal text-white"> 
              {" "}
              Ideas Into Reality
            </span>
          </h2>
          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from hands-on engineer to building and delivering complex systems at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/75 via-primary/35 to-primary/10 md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */} 
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div 
                  className={`pl-8 md:pl-0 ${
                      idx % 2 === 0 ? 
                      "md:pr-16 md:text-right" : 
                      "md:col-start-2 md:pl-16"}`
                  }
                >
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technology.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        > 
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};