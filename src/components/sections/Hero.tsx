import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "FULL STACK JAVA DEVELOPER, INNOVATOR";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="glass-card inline-block mb-8 animate-float">
          <img
            src={profileImage}
            alt="Balakrishna Maloth"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary glow-cyan"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-glow-cyan">
          BALAKRISHNA MALOTH
        </h1>
        
        <div className="h-20 md:h-24 mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl text-secondary text-glow-purple font-mono">
            {text}
            <span className="animate-glow-pulse">|</span>
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects">
            <button className="glass-card px-8 py-4 text-lg font-semibold text-primary hover:glow-cyan transition-all duration-300 hover:scale-105">
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button className="glass-card px-8 py-4 text-lg font-semibold text-secondary hover:glow-purple transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};
