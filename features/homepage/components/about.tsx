"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";
import { useIntersectionObserver } from "../../../hooks/use-inter-section-observer";

const About = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, User Research",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
    },
    // {
    //   icon: <Users className="h-8 w-8" />,
    //   title: "Team Leadership",
    //   description: "Agile methodologies, Project management",
    // },
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
            I&apos;m a passionate developer who creates digital solutions that
            combine beautiful design with robust functionality. I love turning
            complex problems into simple, elegant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`gradient-card shadow-card hover:shadow-glow transition-all duration-700 border-border/50 ${
                isVisible
                  ? "animate-fade-in opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center group">
                    <img
                      src="/skills-images/react.png"
                      alt="React"
                      className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                    />
                    <span className="text-sm font-medium mt-2 text-center">
                      React
                    </span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <img
                      src="/skills-images/html.png"
                      alt="HTML"
                      className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                    />
                    <span className="text-sm font-medium mt-2 text-center">
                      HTML
                    </span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <img
                      src="/skills-images/css.png"
                      alt="CSS"
                      className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                    />
                    <span className="text-sm font-medium mt-2 text-center">
                      CSS
                    </span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <img
                      src="/skills-images/js.png"
                      alt="JavaScript"
                      className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                    />
                    <span className="text-sm font-medium mt-2 text-center">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <img
                      src="/skills-images/tailwind.png"
                      alt="Tailwind CSS"
                      className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                    />
                    <span className="text-sm font-medium mt-2 text-center">
                      Tailwind
                    </span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <img
                      src="/skills-images/wordpress.png"
                      alt="WordPress"
                      className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
                    />
                    <span className="text-sm font-medium mt-2 text-center">
                      WordPress
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical Skills
          </h3>
        </div>

        {/* Frontend Development Skills */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-center text-primary">
            Frontend Development
          </h4>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/react.png"
                alt="React"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                React
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/html.png"
                alt="HTML"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">HTML</span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/css.png"
                alt="CSS"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">CSS</span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/js.png"
                alt="JavaScript"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/tailwind.png"
                alt="Tailwind CSS"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                Tailwind
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/wordpress.png"
                alt="WordPress"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                WordPress
              </span>
            </div>
          </div>
        </div>

        {/* Backend Development Skills */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-center text-primary">
            Backend Development
          </h4>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/python.png"
                alt="Python"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                Python
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/java.png"
                alt="Java"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">Java</span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/cplus.png"
                alt="C++"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">C++</span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/php.png"
                alt="PHP"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">PHP</span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/laravel.png"
                alt="Laravel"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                Laravel
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/cordova.png"
                alt="Apache Cordova"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                Cordova
              </span>
            </div>
          </div>
        </div>

        {/* Design & Creative Tools */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6 text-center text-primary">
            Design & Creative Tools
          </h4>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/figma.png"
                alt="Figma"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                Figma
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/ps.png"
                alt="Photoshop"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                Photoshop
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/ai.png"
                alt="Adobe Illustrator"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                Illustrator
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/autodesk.png"
                alt="Autodesk"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                Autodesk
              </span>
            </div>
          </div>
        </div>

        {/* Database & Data Management */}
        <div className="mb-16">
          <h4 className="text-xl font-semibold mb-6 text-center text-primary">
            Database & Data Management
          </h4>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/mongo.png"
                alt="MongoDB"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                MongoDB
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/mysql.png"
                alt="MySQL"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                MySQL
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/mariadb.png"
                alt="MariaDB"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                MariaDB
              </span>
            </div>
            <div className="flex flex-col items-center group">
              <img
                src="/skills-images/sqlite.png"
                alt="SQLite"
                className="w-20 h-20 object-contain p-2 rounded-lg bg-white/50 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
              />
              <span className="text-sm font-medium mt-2 text-center">
                SQLite
              </span>
            </div>
          </div>
        </div>

        {/* 
        <div className="max-w-4xl mx-auto">
          <Card
            className={`gradient-card shadow-card border-border/50 transition-all duration-700 ${
              isVisible
                ? "animate-fade-in opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    Started as a self-taught developer, I&apos;ve worked with
                    startups and established companies to build scalable web
                    applications. I&apos;m constantly learning new technologies
                    and staying up-to-date with industry trends.
                  </p>
                  <p className="text-muted-foreground">
                    When I&apos;m not coding, you can find me exploring new
                    design trends, contributing to open-source projects, or
                    sharing knowledge with the developer community.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        React/TypeScript
                      </span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="gradient-primary h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">UI/UX Design</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="gradient-primary h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Backend Development
                      </span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="gradient-primary h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default About;
