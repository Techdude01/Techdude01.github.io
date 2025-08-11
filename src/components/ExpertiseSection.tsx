import { motion } from "framer-motion";
import { Code2, Brain, Database, Globe, Cpu, GitBranch } from "lucide-react";
import { DirectLiquidGlass } from "./DirectLiquidGlass";

const expertiseAreas = [
  {
    icon: Brain,
    title: "Computer Vision & ML",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "Ultralytics", "TensorRT"],
    description: "Specialized in real-time computer vision systems and machine learning optimization"
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    skills: ["Python", "TypeScript", "NextJS", "Flask", "C++"],
    description: "End-to-end application development with modern frameworks and languages"
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["ETL Pipelines", "AWS", "SQL", "NumPy", "Parquet"],
    description: "Large-scale data processing and infrastructure optimization"
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    skills: ["ROS2", "Nvidia Jetson", "Embedded Systems", "Real-time Processing"],
    description: "Robotics and edge computing solutions for autonomous systems"
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "API Design", "UI/UX"],
    description: "Modern web development and user experience design"
  },
  {
    icon: GitBranch,
    title: "DevOps & Tools",
    skills: ["Git", "Version Control", "AWS Secrets Manager", "GitLab"],
    description: "Development workflow optimization and security implementation"
  }
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized skills across computer vision, full-stack development, and data engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <DirectLiquidGlass className="p-6 h-full hover:scale-105 transition-all duration-500">
                <area.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </DirectLiquidGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}