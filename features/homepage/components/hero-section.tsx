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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/90"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[85vh] animate-fade-in">
          {/* Left side - Full body image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start relative order-first lg:order-first mt-32">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-3xl blur-3xl"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
            <div
              className="absolute bottom-0 right-0 w-24 h-24 bg-accent/30 rounded-full blur-xl animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary/15 rounded-full blur-2xl animate-bounce-slow"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Full body image container */}
            <div
              className="relative group animate-scale-up"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Image */}
              <div className="relative z-10 bg-gradient-to-b from-primary/5 to-accent/5 rounded-2xl p-4 backdrop-blur-sm border border-primary/10">
                <img
                  src={"/michaelpogi.png"}
                  alt="Michael Z. Sabino - Full Stack Developer"
                  className="w-full h-auto max-w-sm mx-auto object-cover object-top rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-hero"
                  style={{
                    aspectRatio: "3/4",
                    minHeight: "400px",
                    maxHeight: "600px",
                  }}
                />

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce opacity-70"></div>
                <div
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full animate-pulse opacity-60"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left order-last lg:order-last lg:pl-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xl text-primary font-medium animate-slide-in-right">
                  Hello, I&apos;m
                </p>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold hero-text leading-tight animate-slide-in-right"
                  style={{ animationDelay: "0.1s" }}
                >
                  Michael Z. Sabino
                </h1>
                <div
                  className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto lg:mx-0 animate-slide-in-right"
                  style={{ animationDelay: "0.15s" }}
                ></div>
              </div>
              <p
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                Passionate{" "}
                <span className="text-primary font-semibold">
                  Full Stack Developer
                </span>{" "}
                crafting exceptional digital experiences. I transform innovative
                ideas into
                <span className="text-accent font-semibold">
                  {" "}
                  scalable web solutions
                </span>{" "}
                that make a difference.
              </p>
            </div>

            {/* Stats or highlights */}
            {/* <div
              className="grid grid-cols-3 gap-6 py-6 animate-slide-in-right"
              style={{ animationDelay: "0.25s" }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Done
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </div> */}

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-right"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground shadow-hero hover:shadow-glow transition-smooth px-8 py-4 text-lg"
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
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-4 text-lg"
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
            <div
              className="flex space-x-6 pt-4 justify-center lg:justify-start animate-slide-in-right"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 hover:shadow-glow transition-smooth hover:scale-110 rounded-full border border-primary/20 hover:border-primary/60 hover:bg-primary/10"
                onClick={() =>
                  window.open("https://github.com/KELSZ22", "_blank")
                }
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 hover:shadow-glow transition-smooth hover:scale-110 rounded-full border border-primary/20 hover:border-primary/60 hover:bg-primary/10"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/michael-sabino-b0bab02b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 hover:shadow-glow transition-smooth hover:scale-110 rounded-full border border-primary/20 hover:border-primary/60 hover:bg-primary/10"
                onClick={() =>
                  (window.location.href = "mailto:michaels6355@gmail.com")
                }
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-muted-foreground animate-fade-in">
              Scroll Down
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToAbout}
              className="hover:shadow-glow transition-smooth rounded-full border border-primary/20 hover:border-primary/40"
            >
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
