"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "../../../hooks/use-inter-section-observer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Palette,
  Database,
  Server,
  Smartphone,
  Globe,
  CheckCircle,
  User,
  Target,
  Award,
} from "lucide-react";

const About = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const skillCategories = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Frontend Development",
      description:
        "Creating modern, responsive, and interactive user interfaces with cutting-edge technologies.",
      // expertise: [
      //   "Responsive Web Design",
      //   "Single Page Applications",
      //   "Modern UI/UX Implementation",
      //   "Performance Optimization",
      //   "Cross-browser Compatibility",
      // ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS",
      ],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications with secure APIs and efficient database management.",
      // expertise: [
      //   "RESTful API Development",
      //   "Database Architecture",
      //   "Server Configuration",
      //   "Authentication Systems",
      //   "API Integration",
      // ],
      technologies: ["PHP", "Laravel", "Node.js", "Python", "Java", "C++"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database & DevOps",
      description:
        "Designing efficient database systems and implementing modern development workflows.",
      // expertise: [
      //   "Database Design & Optimization",
      //   "Query Performance Tuning",
      //   "Data Migration & Backup",
      //   "Cloud Database Management",
      //   "Development Workflows",
      // ],
      technologies: [
        "MySQL",
        "MongoDB",
        "MariaDB",
        "SQLite",
        // "PostgreSQL",
        "Git",
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Crafting beautiful and user-friendly interfaces that enhance user experience and engagement.",
      // expertise: [
      //   "User Interface Design",
      //   "User Experience Research",
      //   "Wireframing & Prototyping",
      //   "Design Systems",
      //   "Usability Testing",
      // ],
      technologies: ["Figma", "Photoshop", "Illustrator", "Autodesk"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications with native performance and user experience.",
      // expertise: [
      //   "Hybrid Mobile Apps",
      //   "Progressive Web Apps",
      //   "Cross-platform Development",
      //   "Mobile UI/UX Design",
      //   "App Store Deployment",
      // ],
      technologies: ["React Native", "Cordova", "Ionic"],
    },
    // {
    //   icon: <Globe className="h-8 w-8" />,
    //   title: "Full-Stack Solutions",
    //   description:
    //     "End-to-end web application development from concept to deployment and maintenance.",
    //   expertise: [
    //     "Complete Web Applications",
    //     "E-commerce Solutions",
    //     "Content Management Systems",
    //     "Custom Web Portals",
    //     "System Integration",
    //   ],
    //   technologies: [
    //     "MERN Stack",
    //     "LAMP Stack",
    //     "WordPress",
    //     "Shopify",
    //     "Laravel",
    //   ],
    // },
  ];

  const personalInfo = [
    {
      icon: <User className="h-6 w-6" />,
      title: "About Me",
      content:
        "Computer Engineering graduate with a passion for creating innovative web solutions. I combine technical expertise with creative problem-solving to deliver exceptional digital experiences.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "My Mission",
      content:
        "To transform complex business requirements into simple, elegant, and scalable web solutions that drive growth and create lasting value for clients and users alike.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "My Approach",
      content:
        "I believe in clean code, user-centered design, and continuous learning. Every project is an opportunity to push boundaries and deliver solutions that exceed expectations.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6" ref={elementRef}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "animate-fade-in opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate developer creating digital solutions that combine
            beautiful design with robust functionality. I love turning complex
            problems into simple, elegant solutions.
          </p>
        </div>

        {/* Personal Info Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {personalInfo.map((info, index) => (
            <Card
              key={index}
              className={`gradient-card shadow-card hover:shadow-glow transition-all duration-700 border-border/50 group ${
                isVisible
                  ? "animate-fade-in opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {info.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`gradient-card shadow-card hover:shadow-glow transition-all duration-700 border-border/50 group ${
                isVisible
                  ? "animate-fade-in opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* <div>
                  <h4 className="font-semibold mb-2">Expertise:</h4>
                  <ul className="space-y-1">
                    {category.expertise.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div> */}

                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* My Journey Section */}
        {/* <div
          className={`transition-all duration-700 ${
            isVisible
              ? "animate-fade-in opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: "1s" }}
        >
          <Card className="gradient-card shadow-card border-border/50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
                    My Journey
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      I&apos;m Michael Z. Sabino, a passionate computer
                      engineering graduate with a strong foundation in software
                      development and web technologies. During my academic
                      journey and professional training as a full-stack
                      developer, I&apos;ve cultivated expertise in modern web
                      technologies.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      My experience spans frontend development with responsive
                      design principles, backend API development, and database
                      optimization. I&apos;m passionate about creating seamless
                      user experiences and writing clean, maintainable code.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I thrive on solving complex problems and turning
                      innovative ideas into functional digital solutions that
                      make a real difference in people&apos;s lives.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/10">
                    <div className="text-4xl font-bold text-primary mb-2">
                      2+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years of Experience
                    </div>
                  </div>
                  <div className="text-center p-6 bg-accent/5 rounded-xl border border-accent/10">
                    <div className="text-4xl font-bold text-accent mb-2">
                      15+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center p-6 bg-secondary/20 rounded-xl border border-secondary/20">
                    <div className="text-4xl font-bold text-primary mb-2">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button
                  className="gradient-primary text-primary-foreground shadow-hero hover:shadow-glow transition-smooth px-8"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Let&apos;s Work Together{" "}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default About;
