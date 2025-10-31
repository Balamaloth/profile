import { Code2, Sparkles, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-glow-cyan">
          About Me
        </h2>
        
        <div className="glass-card scroll-reveal">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center p-4 glass rounded-xl hover:glow-cyan transition-all duration-300">
              <Code2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developer</h3>
              <p className="text-muted-foreground">Building robust full-stack applications</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 glass rounded-xl hover:glow-purple transition-all duration-300">
              <Sparkles className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovator</h3>
              <p className="text-muted-foreground">Creating cutting-edge solutions</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 glass rounded-xl hover:glow-cyan transition-all duration-300">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visionary</h3>
              <p className="text-muted-foreground">Pushing boundaries in tech</p>
            </div>
          </div>
          
          <p className="text-lg leading-relaxed text-center">
            I'm a passionate <span className="text-primary font-semibold">Full Stack Java Developer</span> with 
            a deep love for creating innovative web applications. I specialize in building scalable, 
            efficient systems using modern technologies. My journey in software development is driven 
            by curiosity and a constant desire to learn and implement the latest technological advancements. 
            From frontend interfaces to backend architecture, I enjoy every aspect of bringing ideas to life 
            through code.
          </p>
        </div>
      </div>
    </section>
  );
};
