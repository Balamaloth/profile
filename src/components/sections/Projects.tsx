import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FUTURE-GADGET-EXPO-2025",
    description: "A cutting-edge showcase of futuristic gadgets and technology, featuring interactive 3D models and immersive experiences.",
    tech: ["React", "Three.js", "Node.js", "MongoDB"],
    github: "https://github.com/balamaloth/FUTURE-GADGET-EXPO-2025",
    demo: "#",
  },
  {
    title: "Guava Disease Detection",
    description: "AI-powered machine learning application for detecting and classifying diseases in guava plants using computer vision.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    github: "https://github.com/balamaloth/Guava_Disease_Detection",
    demo: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-glow-purple">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card scroll-reveal group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm glass rounded-full text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:glow-cyan transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:glow-purple transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
