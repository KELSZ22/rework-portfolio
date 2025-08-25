"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              John Doe
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating beautiful,
              functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Resume", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="block text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Web Development</p>
              <p>UI/UX Design</p>
              <p>Backend Development</p>
              <p>Consulting</p>
              <p>Code Review</p>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Let's work together on your next project
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:shadow-glow transition-smooth"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:shadow-glow transition-smooth"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:shadow-glow transition-smooth"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} John Doe. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
