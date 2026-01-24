"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, MapPin } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Springboard Philippines",
      period: "2025",
      location: "Philippines",
      // description:
      //   "Lead development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved system performance by 40%.",
      // achievements: [
      //   "Led a team of 5 developers",
      //   "Reduced load times by 40%",
      //   "Implemented CI/CD pipelines",
      // ],
    },
    {
      title: "Intern Full Stack Developer",
      company: "Negosyante I.T Solutions Corp., 2024",
      period: "2024",
      location: "Philippines",
      // description:
      //   "Developed responsive web applications using React and TypeScript. Collaborated with design teams to create pixel-perfect user interfaces.",
      // achievements: [
      //   "Built 15+ React applications",
      //   "Improved user engagement by 25%",
      //   "Mentored junior developers",
      // ],
    },
    {
      title: "Intern Java Developer",
      company: "Intellyx ICT",
      period: "2020",
      location: "Philippines",
      // description:
      //   "Full-stack development of MVP products. Worked directly with founders to translate business requirements into technical solutions.",
      // achievements: [
      //   "Launched 3 successful products",
      //   "Achieved 99.9% uptime",
      //   "Built scalable infrastructure",
      // ],
    },
    {
      title: "Intern Software Developer",
      company: "First Academy of Computer Arts",
      period: "2020",
      location: "Philippines",
      // description:
      //   "Full-stack development of MVP products. Worked directly with founders to translate business requirements into technical solutions.",
      // achievements: [
      //   "Launched 3 successful products",
      //   "Achieved 99.9% uptime",
      //   "Built scalable infrastructure",
      // ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Universidad De Manila",
      period: "2021",
      location: "Philippines",
    },
    {
      degree: "ICT (Information Communication Technology)",
      school: "Arellano University",
      period: "2018",
      location: "Philippines",
    },
    {
      degree:
        "Java Programming NC III, Developing Designs for User Interface, Developing Designs for User Experience",
      school: "TESDA (Technical Education and Skills Development Authority)",
      period: "2022",
      location: "Philippines",
    },
    {
      degree:
        "Frontend Fundamentals Bootcamp, Data Analytics Fundamentals Bootcamp",
      school: "One Code Camp",
      period: "2024",
      location: "Philippines",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "Git",
    "Figma",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
    "Java",
    "PHP",
    "Laravel",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "React Native",
    "Cordova",
    "Ionic",
  ];
  const achievements = [
    "Tesda Java Programming (NC III) batch 3: Top 1",
    "1st year Dean's Lister",
    "Senior High School with Honors",
  ];

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Resume</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional experience, education,
            and skills that showcase my journey as a developer.
          </p>
          <Button
            className="gradient-primary text-primary-foreground shadow-hero hover:shadow-glow transition-smooth"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1EQiteJB3ZfdJcVtaFGv1HiAPA_udctr3/view?usp=sharing",
                "_blank"
              )
            }
          >
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
                    {/* <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
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
                    </CardContent> */}
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
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <Card className="gradient-card ">
              {/* <CardHeader>
                <CardTitle className="text-2xl">
                  Skills & Technologies
                </CardTitle>
              </CardHeader> */}
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

            <h3 className="text-2xl font-bold mb-6">Achievements</h3>

            <Card className="gradient-card shadow-card border-border/50 ">
              {/* <CardHeader>
                <CardTitle className="text-2xl">
                  Skills & Technologies
                </CardTitle>
              </CardHeader> */}
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {achievements.map((achievement, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {achievement}
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
