import { Code2, Database, Wrench, GitBranch, Braces, FileCode2, Terminal, Globe, Sparkles } from "lucide-react";

const skills = [
  { name: "Java", icon: Code2, color: "text-primary" },
  { name: "HTML", icon: FileCode2, color: "text-primary" },
  { name: "CSS", icon: Braces, color: "text-secondary" },
  { name: "JavaScript", icon: Code2, color: "text-primary" },
  { name: "SQL", icon: Database, color: "text-secondary" },
  { name: "VS Code", icon: Terminal, color: "text-primary" },
  { name: "Linux", icon: Terminal, color: "text-secondary" },
  { name: "React", icon: Globe, color: "text-primary" },
  { name: "Node.js", icon: Wrench, color: "text-secondary" },
  { name: "Git", icon: GitBranch, color: "text-primary" },
  { name: "GitHub", icon: GitBranch, color: "text-secondary" },
  { name: "AI Prompt Engineering", icon: Sparkles, color: "text-primary" },
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-glow-cyan">
          Skills & Technologies
        </h2>
        
        <div className="glass-card scroll-reveal">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="glass p-6 rounded-xl flex flex-col items-center gap-3 hover:glow-cyan transition-all duration-300 hover:scale-110 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className={`w-12 h-12 ${skill.color} group-hover:animate-float`} />
                  <span className="text-sm font-semibold text-center">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
