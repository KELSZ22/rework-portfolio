"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, MapPin } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Lead development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved system performance by 40%.",
      achievements: [
        "Led a team of 5 developers",
        "Reduced load times by 40%",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      location: "Remote",
      description:
        "Developed responsive web applications using React and TypeScript. Collaborated with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Built 15+ React applications",
        "Improved user engagement by 25%",
        "Mentored junior developers",
      ],
    },
    {
      title: "Web Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "New York, NY",
      description:
        "Full-stack development of MVP products. Worked directly with founders to translate business requirements into technical solutions.",
      achievements: [
        "Launched 3 successful products",
        "Achieved 99.9% uptime",
        "Built scalable infrastructure",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      location: "California, USA",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "CodeAcademy Pro",
      period: "2018",
      location: "Online",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
    "Agile",
  ];

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-primary">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional experience, education,
            and skills that showcase my journey as a developer.
          </p>
          <Button className="gradient-primary text-primary-foreground shadow-hero hover:shadow-glow transition-smooth">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-primary" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="gradient-card shadow-card border-border/50 hover:shadow-glow transition-smooth"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <div className="space-y-1">
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-sm text-muted-foreground flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="gradient-card shadow-card border-border/50"
                  >
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mt-2">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Card className="gradient-card shadow-card border-border/50 sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
