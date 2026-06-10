import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const hightlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I write clean, maintainable code that follows best practices and design patterns."
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
]


export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Working on the future
              <span className="font-serif italic font-normal text-white"> one line of code at a time.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m an embedded systems engineer focused on designing and building reliable, real-time software 
                that connects hardware intelligence with scalable system architecture. My work sits at the 
                intersection of firmware, validation, and system integration, where performance, determinism, 
                and reliability matter just as much as functionality. I enjoy working close to the hardware—debugging low-level issues, 
                optimizing communication between devices, and ensuring systems behave predictably in real-world conditions.
              </p>
              <p>
                Over the past few years, I’ve worked extensively with embedded platforms, sensor integration, 
                and communication protocols such as CAN, UART, SPI, and I2C. I’ve built and validated systems 
                where robustness under failure conditions is critical, developing a strong intuition for diagnosing 
                issues across hardware-software boundaries. I’m especially interested in real-time systems, autonomy, 
                and the challenges of making complex machines behave safely and consistently in unpredictable environments.
              </p>
              <p>
                Looking forward, I’m focused on contributing to the next generation of autonomous and intelligent 
                systems—whether in robotics, aerospace, or high-performance computing. I’m driven by designing 
                software that not only solves today’s problems but is structured to scale into future capabilities. 
                My goal is to build systems that are clean in architecture, resilient in execution, and capable 
                of powering advanced technologies in the years ahead.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg text-secondary-foreground font-medium italic">
                "I aim to engineer systems that are dependable by design,
                so reliable the users never has to think twice about using them, 
                and so well-built they become the foundation for the next wave of innovation"
              </p>
            </div>
          </div>
                      
          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {hightlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in" 
                style={{animationDelay: `${(idx + 1) * 100}ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-small text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};