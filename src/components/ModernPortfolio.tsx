import { useHeaderHeight } from "@/hooks/useHeaderHeight";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, Download, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { DataStreamsBackground } from "./DataStreamsBackground";
import { DirectLiquidGlass } from "./DirectLiquidGlass";
import { ExpertiseSection } from "./ExpertiseSection";
import { LoadingSpinner } from "./LoadingSpinner";
import { ModernHeader } from "./ModernHeader";
import { ThemeToggle } from "./ThemeToggle";

export function ModernPortfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Set initial theme
  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.classList.contains("dark") ? "dark" : "light";
    setTheme(initialTheme);
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("dark");
      setTheme("dark");
    } else {
      root.classList.remove("dark");
      setTheme("light");
    }
  };
  
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const headerHeight = useHeaderHeight();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "RoboMaster: Ultraviolet",
      description: "Computer Vision Lead - Improved real-time video pipeline for aim detection in RoboMaster bots with 48% optimized latency via TensorRT quantization and 95% accuracy.",
      tech: ["Python", "ROS2", "TensorRT", "Computer Vision", "Nvidia Jetson"],
      link: "https://github.com/TechDude01"
    },
    {
      title: "AutoCPT",
      description: "Backend Engineer - Won HackNYU's Best Use of AI award. Developed SaaS platform converting patient-doctor conversations into CPT codes in real time.",
      tech: ["NextJS", "Flask", "PyTorch", "Whisper", "Groq"],
      link: "https://github.com/TechDude01/AutoCPT"
    },
    {
      title: "UGSRP-Public",
      description: "Engineered Python/NumPy data-processing pipelines for 3-D penguin model reconstruction from multi-view stereo data for energy optimized robotics.",
      tech: ["Python", "NumPy", "OpenCV", "Computer Vision"],
      link: "https://github.com/TechDude01/UGSRP-Public"
    },
    {
      title: "NutriGuide",
      description: "NYU Hackathon Project - Developed a Python-based application with ChatGPT integration for lifestyle and health recommendations.",
      tech: ["Python", "ChatGPT API", "UI/UX", "Data Handling"],
      link: "https://github.com/TechDude01/Hackathon-Dec-3rd"
    }
  ];

  const workExperience = [
    {
      title: "Software Engineering Intern",
      company: "NYU Enterprise Data Management",
      period: "April 2025 - Present",
      location: "New York City, NY",
      description: "Developed and maintained ETL pipeline for calculating student financial awards. Improved security by implementing AWS Secrets Manager and accelerated data loading time 47% by migrating from CSV to columnar Parquet."
    },
    {
      title: "Computer Vision Intern",
      company: "Applied Dynamics and Optimization Laboratory",
      period: "June 2024 - Aug 2024",
      location: "New York City, NY",
      description: "Engineered Python/NumPy data-processing pipelines that accelerated 3-D penguin model reconstruction. Reduced calibration error by 48% and eliminated 93% of corrupted distortion frames."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Finance and Risk Engineering",
      school: "New York University",
      period: "Sep 2025 - Dec 2027",
      location: "New York City, NY",
      details: "B.S./M.S. Program"
    },
    {
      degree: "Bachelor of Science in Computer Science (Math Minor)",
      school: "New York University",
      period: "Sep 2023 - May 2026",
      location: "New York City, NY",
      details: "GPA: 3.88/4.0"
    }
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen relative z-10">
      <DataStreamsBackground theme={theme} />
      <ModernHeader scrollToSection={scrollToSection} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      {/* Hero Section - Modern and focused */}
      <section className="relative h-[70vh] flex items-center justify-center pt-20">
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Kushal Mamillapalli
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Computer Vision Engineer & Full-Stack Developer specializing in AI systems and real-time robotics applications
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <DirectLiquidGlass>
              <motion.a
                href="https://github.com/TechDude01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
            </DirectLiquidGlass>
            <DirectLiquidGlass>
              <motion.a
                href="mailto:km6238@nyu.edu"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Contact
              </motion.a>
            </DirectLiquidGlass>
            <DirectLiquidGlass>
              <motion.a
                href="https://linkedin.com/in/kushal-mamillapalli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
            </DirectLiquidGlass>
            <DirectLiquidGlass>
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.button>
            </DirectLiquidGlass>
          </motion.div>
          
          <motion.button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ y: 3 }}
          >
            <span>Explore</span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-3 h-3" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 scroll-mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about building intelligent systems that bridge the gap between computer vision and real-world applications
            </p>
          </div>

          <div>
            <DirectLiquidGlass className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a Computer Science student at NYU with a passion for computer vision, machine learning, and full-stack development. 
                    I specialize in real-time systems, robotics, and AI applications that solve real-world problems.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Currently pursuing my B.S./M.S. in Computer Science with a Math minor, I maintain a 3.88 GPA while leading computer vision 
                    projects and interning at NYU's Enterprise Data Management team.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">3.88</div>
                      <div className="text-sm text-muted-foreground">GPA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">48%</div>
                      <div className="text-sm text-muted-foreground">Latency Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Model Accuracy</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-3xl shadow-2xl"></div>
                </div>
              </div>
            </DirectLiquidGlass>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 scroll-mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic foundation in computer science and mathematics at New York University
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <DirectLiquidGlass className="p-6 hover:scale-105 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      </div>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-muted-foreground leading-relaxed">{edu.details}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                 </DirectLiquidGlass>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 scroll-mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional experience in data engineering, computer vision, and software development
            </p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index}>
                <DirectLiquidGlass className="p-6 hover:scale-105 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                      </div>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                 </DirectLiquidGlass>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 scroll-mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Innovative projects spanning computer vision, AI, and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <DirectLiquidGlass className="p-6 h-full hover:scale-105 transition-all duration-500 group cursor-pointer">
                  <div 
                    className="space-y-4 h-full flex flex-col"
                    onClick={() => project.link && window.open(project.link, '_blank')}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                 </DirectLiquidGlass>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Kushal Mamillapalli. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
