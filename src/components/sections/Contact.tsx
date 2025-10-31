import { Github, Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Here you would integrate with Formspree or EmailJS
    // For now, just show a success message
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-glow-cyan">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card scroll-reveal">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full glass px-6 py-3 rounded-lg font-semibold text-primary hover:glow-cyan transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="glass-card scroll-reveal" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-secondary">Connect With Me</h3>
            
            <div className="space-y-6">
              <a
                href="https://github.com/balamaloth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-lg hover:glow-cyan transition-all duration-300 group"
              >
                <Github className="w-8 h-8 text-primary group-hover:animate-float" />
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-muted-foreground">@balamaloth</p>
                </div>
              </a>
              
              <a
                href="mailto:balasainik@gmail.com"
                className="flex items-center gap-4 p-4 glass rounded-lg hover:glow-purple transition-all duration-300 group"
              >
                <Mail className="w-8 h-8 text-secondary group-hover:animate-float" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">balasainik@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/bala-maloth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-lg hover:glow-cyan transition-all duration-300 group"
              >
                <Linkedin className="w-8 h-8 text-primary group-hover:animate-float" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">/in/bala-maloth</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
