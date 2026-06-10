import { ArrowUpRight } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Automated Stock Trading Bot",
    description: "A Python-based bot that uses machine learning to analyze stock market data and execute trades automatically.",
    image: "/projects/Python_Projects.png",
    tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    link: "#",
    github: "#"
  },
  {
    title: "Helicopter Game with SDL Graphics Library",
    description: "Helicopter Simulator Game.",
    image: "/projects/C++_Projects.png",
    tags: ["C++", "SDL", "OpenGL3", "Game Development"],
    link: "#",
    github: "#"
  },
  {
    title: "Fifa World Cup 2026 Predictor",
    description: "A Python-based algorthim that uses machine learning to analyze team data and return the highest probability winner.",
    image: "projects/Python_Projects.png",
    tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    link: "#",
    github: "#"
  },
  {
    title: "Communication Protocol Simulator",
    description: "Simulator for simulating and analyzing communication protocols like CAN, UART, SPI, and I2C in embedded systems.",
    image: "/projects/C++_Projects.png",
    tags: ["C++", "Embedded Systems", "CAN", "UART", "SPI", "I2C"],
    link: "#",
    github: "#"
  }
]

export const Projects = () => {
  return ( 
    <section id="about" className="py-32 relative overflow-hidden"> 
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Feature Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text">
            A few of my recent at home projects to show what I am capable of in the software world. 
            I have a lot of fun working on these projects and I am always looking for new ideas to work on. 
            If you have any ideas, please feel free to reach out to me.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx} 
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{animationDelay: `${(idx + 1) * 100}ms`}}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image}  
                  alt={project.title} 
                  className="w-full h-full object-cover transistion-transform duration-400 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                    bg-linear-to-t from-card via-card/50 
                    to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.link} 
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-100"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-100"
                  > 
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight 
                    className="w-5 h-5
                    text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1 group-hover:translate-y-1
                    transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border
                     border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary
                      transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>  
        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in animation-delay-300">
          <a href="">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};