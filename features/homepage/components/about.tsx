"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import tech stack images

import { useIntersectionObserver } from "../../../hooks/use-inter-section-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const frontendSkills = [
    { name: "React", logo: "/skills-images/react.png" },
    { name: "HTML", logo: "/skills-images/html.png" },
    { name: "CSS", logo: "/skills-images/css.png" },
    { name: "JavaScript", logo: "/skills-images/js.png" },
    { name: "Tailwind CSS", logo: "/skills-images/tailwind.png" },
    { name: "WordPress", logo: "/skills-images/wordpress.png" },
  ];

  const uiuxSkills = [
    { name: "Figma", logo: "/skills-images/figma.png" },
    { name: "Photoshop", logo: "/skills-images/ps.png" },
    { name: "Illustrator", logo: "/skills-images/ai.png" },
    { name: "Autodesk", logo: "/skills-images/autodesk.png" },
  ];

  const backendSkills = [
    { name: "Python", logo: "/skills-images/python.png" },
    { name: "Java", logo: "/skills-images/java.png" },
    { name: "C++", logo: "/skills-images/cplus.png" },
    { name: "PHP", logo: "/skills-images/php.png" },
    { name: "Laravel", logo: "/skills-images/laravel.png" },
    { name: "Cordova", logo: "/skills-images/cordova.png" },
  ];

  const databaseSkills = [
    { name: "MongoDB", logo: "/skills-images/mongo.png" },
    { name: "MySQL", logo: "/skills-images/mysql.png" },
    { name: "MariaDB", logo: "/skills-images/mariadb.png" },
    { name: "SQLite", logo: "/skills-images/sqlite.png" },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: frontendSkills,
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and user-friendly experiences",
      skills: uiuxSkills,
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications and databases",
      skills: backendSkills,
    },
    {
      title: "Database & Data",
      description: "Managing and structuring data efficiently",
      skills: databaseSkills,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-primary ">Me</span>{" "}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m a passionate developer who creates digital solutions that
            combine beautiful design with robust functionality. I love turning
            complex problems into simple, elegant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`gradient-card shadow-card hover:shadow-glow transition-all duration-700 border-border/50 ${
                isVisible
                  ? "animate-fade-in opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold">
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 mb-2 object-contain"
                      />
                      <span className="text-xs font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="col-span-1 md:col-span-2 xl:col-span-2">
            <Card
              className={`gradient-card shadow-card border-border/50 transition-all duration-700 ${
                isVisible
                  ? "animate-fade-in opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                    <p className="text-muted-foreground mb-4 text-justify">
                      I&apos;m Michael Z. Sabino, a passionate computer
                      engineering graduate with a strong foundation in software
                      development and web technologies. During my academic
                      journey and professional training as a full-stack
                      developer, I&apos;ve cultivated expertise in modern web
                      technologies including React, Next.js, JavaScript,
                      TypeScript, PHP, Laravel, and various database systems.
                    </p>
                    <p className="text-muted-foreground mb-4 text-justify">
                      My experience spans frontend development with responsive
                      design principles, backend API development, and database
                      optimization. I&apos;m passionate about creating seamless
                      user experiences and writing clean, maintainable code. I
                      thrive on solving complex problems and turning innovative
                      ideas into functional digital solutions.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mt-12">
                  <Button className="gradient-primary text-primary-foreground shadow-hero hover:shadow-glow transition-smooth px-8">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
