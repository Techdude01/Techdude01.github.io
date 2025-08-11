import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { DirectLiquidGlass } from "./DirectLiquidGlass";

interface ModernHeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export function ModernHeader({ scrollToSection }: ModernHeaderProps) {
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        // Show social links when about section is visible
        setShowSocialLinks(aboutRect.top <= window.innerHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "expertise", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 p-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <DirectLiquidGlass className="px-6 py-3 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-lg font-semibold text-foreground">
            Kushal Mamillapalli
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links & Resume - Conditional */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: showSocialLinks ? 1 : 0, 
              x: showSocialLinks ? 0 : 20,
              pointerEvents: showSocialLinks ? 'auto' : 'none'
            }}
            transition={{ duration: 0.3 }}
          >
            <a 
              href="https://github.com/TechDude01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href="https://linkedin.com/in/kushal-mamillapalli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a 
              href="mailto:km6238@nyu.edu"
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
            <Button size="sm" variant="outline" className="ml-2">
              <Download className="h-3 w-3 mr-1" />
              Resume
            </Button>
          </motion.div>
        </div>
      </DirectLiquidGlass>
    </motion.header>
  );
}
