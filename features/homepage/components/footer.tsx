"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <Link
                href="/"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="shrink-0 self-start"
                prefetch={false}
              >
                <Image
                  src="/icon/kelsz.dev.png"
                  alt="kelsz.dev logo"
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
                <span className="sr-only">kelsz.dev</span>
              </Link>
              <div className="min-w-0 space-y-4">
                <h3 className="text-2xl font-bold">Michael Z. Sabino</h3>
                <p className="text-muted-foreground">
                  Computer Engineering graduate & Full Stack Developer passionate
                  about creating innovative web solutions and digital experiences.
                </p>
              </div>
            </div>
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
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Web Development</p>
              <p>UI/UX Design</p>
              <p>Backend Development</p>
              <p>Consulting</p>
              <p>Code Review</p>
            </div>
          </div> */}

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Let&apos;s work together on your next project
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-primary/20 transition-smooth hover:scale-110 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
                  onClick={() =>
                    window.open("https://github.com/KELSZ22", "_blank")
                  }
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-primary/20 transition-smooth hover:scale-110 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/michael-sabino-b0bab02b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                      "_blank",
                    )
                  }
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-primary/20 transition-smooth hover:scale-110 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
                  onClick={() =>
                    (window.location.href = "mailto:michaels6355@gmail.com")
                  }
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-primary/20 transition-smooth hover:scale-110 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
                  onClick={() =>
                    window.open("https://www.facebook.com/Kelsz0910/", "_blank")
                  }
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-primary/20 transition-smooth hover:scale-110 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
                  onClick={() =>
                    window.open("https://www.instagram.com/kel_sz7/", "_blank")
                  }
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Michael Z. Sabino. All rights reserved.
            </div>
            {/* <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & TypeScript</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
