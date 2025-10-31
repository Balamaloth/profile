import { Download, FileText } from "lucide-react";
export const Resume = () => {
  return <section id="resume" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-glow-purple">
          Resume
        </h2>
        
        <div className="glass-card scroll-reveal">
          <FileText className="w-24 h-24 text-primary mx-auto mb-6 animate-float" />
          
          <h3 className="text-2xl font-bold mb-4">Want to know more about ME</h3>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download my resume to see my complete professional background, education, 
            certifications, and detailed project descriptions.
          </p>
          
          <a href="#" download="Balakrishna_Maloth_Resume.pdf" className="inline-flex items-center gap-3 glass px-8 py-4 rounded-xl text-lg font-semibold text-primary hover:glow-cyan transition-all duration-300 hover:scale-105">
            <Download className="w-6 h-6" />
            Download Resume
          </a>
        </div>
      </div>
    </section>;
};