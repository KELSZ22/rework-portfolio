"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import {
  ContactIcon,
  FileIcon,
  FolderIcon,
  HomeIcon,
  InfoIcon,
  BookOpenIcon,
  BriefcaseIcon,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(savedTheme === "dark" || (!savedTheme && prefersDark));

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          {!isMenuOpen && (
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                onClick={handleMenuClick}
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
          )}
          <SheetContent side="left">
            {/* <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link> */}
            <div className="grid gap-2 p-6 z-[9999] mt-10">
              <div className="flex items-center gap-2">
                <HomeIcon className="h-6 w-6" />
                <button
                  onClick={() => {
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Home
                </button>
              </div>
              <div className="flex items-center gap-2">
                <InfoIcon className="h-6 w-6" />
                <button
                  onClick={() => {
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  About
                </button>
              </div>
              <div className="flex items-center gap-2">
                <FileIcon className="h-6 w-6" />
                <button
                  onClick={() => {
                    document
                      .getElementById("resume")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Resume
                </button>
              </div>
              <div className="flex items-center gap-2">
                <FolderIcon className="h-6 w-6" />
                <button
                  onClick={() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Projects
                </button>
              </div>
              <div className="flex items-center gap-2">
                <BookOpenIcon className="h-6 w-6" />
                <Link
                  href="/blog"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-6 w-6" />
                <Link
                  href="/services"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <ContactIcon className="h-6 w-6" />
                <button
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  Contact
                </button>
              </div>

              <div className="flex  ">
                <Button
                  variant="ghost"
                  size="default"
                  onClick={toggleTheme}
                  className="w-full justify-start p-0"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="h-6 w-6 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-6 w-6 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        {/* <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link> */}
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          <div className="flex items-center ">
            <button
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`group inline-flex h-9 w-max items-center justify-center rounded-md gap-2 px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                isScrolled
                  ? "bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
                  : "text-foreground hover:text-accent-foreground"
              }`}
            >
              Home
            </button>
          </div>

          <div className="flex items-center ">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                isScrolled
                  ? "bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
                  : "text-foreground hover:text-accent-foreground"
              }`}
            >
              About
            </button>
          </div>
          <div className="flex items-center ">
            <button
              onClick={() =>
                document
                  .getElementById("resume")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                isScrolled
                  ? "bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
                  : "text-foreground hover:text-accent-foreground"
              }`}
            >
              Resume
            </button>
          </div>
          <div className="flex items-center ">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                isScrolled
                  ? "bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
                  : "text-foreground hover:text-accent-foreground"
              }`}
            >
              Projects
            </button>
          </div>
          <div className="flex items-center ">
            <Link
              href="/blog"
              className={`group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                isScrolled
                  ? "bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
                  : "text-foreground hover:text-accent-foreground"
              }`}
            >
              Blog
            </Link>
          </div>
          <div className="flex items-center ">
            <Link
              href="/services"
              className={`group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                isScrolled
                  ? "bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
                  : "text-foreground hover:text-accent-foreground"
              }`}
            >
              Services
            </Link>
          </div>
          <div className="flex items-center ">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                isScrolled
                  ? "bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
                  : "text-foreground hover:text-accent-foreground"
              }`}
            >
              Contact
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-4 h-9 w-9 rounded-md border-border bg-background/50 hover:bg-accent"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
