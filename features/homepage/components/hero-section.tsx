"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-20 lg:mt-0"
      // style={{
      //   backgroundImage: `url(${heroImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "fixed",
      // }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] animate-fade-in">
          {/* Left side - Text content */}
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-primary font-medium">
                  Hello, I&apos;m
                </p>
                <h1 className="text-5xl md:text-6xl font-bold hero-text leading-tight">
                  Michael Z. Sabino
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                I’m a web developer who loves building sleek, functional
                websites. Whether it’s a custom project, I’m here to bring your
                ideas to life. Let’s create something great!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground shadow-hero hover:shadow-glow transition-smooth px-8"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:shadow-glow transition-smooth"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:shadow-glow transition-smooth"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:shadow-glow transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Author photo */}
          <div className="flex justify-center ">
            <div className="absolute w-[800px] h-[800px] bg-primary/10 rounded-full z-[-1]"></div>
            <img
              src={"/michaelpogi.png"}
              alt="Michael Z. Sabino - Full Stack Developer"
            />
          </div>
        </div>
        {/* Company logos
        <div className=" animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 bg-amber-100">
            <div className="text-2xl font-bold text-muted-foreground">Meta</div>
            <div className="text-2xl font-bold text-muted-foreground">
              Google
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Microsoft
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Amazon
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              Apple
            </div>
          </div>
        </div> */}
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="hover:shadow-glow transition-smooth"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
