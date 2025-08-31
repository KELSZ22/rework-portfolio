"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Code2,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useIntersectionObserver } from "../../../hooks/use-inter-section-observer";

const ServicesPage = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using modern frameworks and libraries.",
      features: [
        "React & Next.js Development",
        "Responsive Web Design",
        "Interactive UI Components",
        "Performance Optimization",
        "Cross-browser Compatibility",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
      ],
      pricing: "Starting at $50/hour",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs with secure database integration.",
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Authentication & Security",
        "Server Configuration",
        "Third-party Integrations",
      ],
      technologies: ["PHP", "Laravel", "Node.js", "MySQL", "MongoDB"],
      pricing: "Starting at $60/hour",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Development",
      description:
        "End-to-end web application development from concept to deployment.",
      features: [
        "Complete Web Applications",
        "E-commerce Solutions",
        "Content Management Systems",
        "Custom Web Portals",
        "Maintenance & Support",
      ],
      technologies: [
        "MERN Stack",
        "LAMP Stack",
        "Next.js",
        "Laravel",
        "TypeScript",
      ],
      pricing: "Project-based pricing",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Designing beautiful and user-friendly interfaces that enhance user experience.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
      technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
      pricing: "Starting at $40/hour",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description:
        "Creating mobile applications that work seamlessly across different platforms.",
      features: [
        "Hybrid Mobile Apps",
        "Progressive Web Apps",
        "Cross-platform Development",
        "App Store Deployment",
        "Mobile Optimization",
      ],
      technologies: ["React Native", "Cordova", "PWA", "Flutter"],
      pricing: "Starting at $55/hour",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Website Optimization",
      description:
        "Improving website performance, SEO, and overall user experience.",
      features: [
        "Performance Optimization",
        "SEO Implementation",
        "Speed Enhancement",
        "Code Refactoring",
        "Analytics Integration",
      ],
      technologies: ["Google Analytics", "PageSpeed", "Lighthouse", "Webpack"],
      pricing: "Starting at $45/hour",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your requirements, goals, and creating a detailed project roadmap.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and interactive prototypes for your approval.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Building your solution with clean code, thorough testing, and regular updates.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Launching your project and providing ongoing support and maintenance.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 mt-20">
        <div className="container mx-auto px-6" ref={elementRef}>
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? "animate-fade-in opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development services to bring your digital ideas
              to life. From concept to deployment, I provide end-to-end
              solutions tailored to your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`gradient-card shadow-card hover:shadow-glow transition-all duration-700 border-border/50 group ${
                  isVisible
                    ? "animate-fade-in opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">
                        {service.pricing}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:shadow-glow transition-smooth"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured approach to ensure your project is delivered on
                time, within budget, and exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((process, index) => (
                <Card
                  key={index}
                  className={`gradient-card shadow-card border-border/50 text-center transition-all duration-700 ${
                    isVisible
                      ? "animate-fade-in opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transition-all duration-700 ${
              isVisible
                ? "animate-fade-in opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "1s" }}
          >
            <Card className="gradient-card shadow-card border-border/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Let&apos;s discuss your ideas and create something amazing
                  together. Get in touch for a free consultation and project
                  quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="gradient-primary text-primary-foreground shadow-hero hover:shadow-glow transition-smooth px-8"
                    >
                      Get Free Quote
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8"
                    >
                      Contact Me
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
