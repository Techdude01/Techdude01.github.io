import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Mail, User, Briefcase, GraduationCap, Code } from "lucide-react";
import { LiquidGlass } from "./LiquidGlass";

interface CompactHeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export function CompactHeader({ scrollToSection }: CompactHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <LiquidGlass radius={0.3} displacementScale={0.4}>
        <div className="glass-header backdrop-blur-md border border-white/20 rounded-2xl p-3 mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">K</span>
              </div>
              <motion.span 
                className="font-semibold text-foreground"
                initial={false}
                animate={{ 
                  opacity: isScrolled ? 1 : 0,
                  x: isScrolled ? 0 : -20,
                  scale: isScrolled ? 1 : 0.95
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Kushal Mamillapalli
              </motion.span>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={false}
              animate={{ 
                opacity: isScrolled ? 1 : 0,
                x: isScrolled ? 0 : 20,
                scale: isScrolled ? 1 : 0.95
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.a
                href="https://github.com/kushalmamillapalli"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="mailto:kushalmamillapalli@gmail.com"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </LiquidGlass>
    </motion.header>
  );
}