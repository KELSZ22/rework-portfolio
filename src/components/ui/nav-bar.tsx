"use client";

import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  ContactIcon,
  FileIcon,
  FolderIcon,
  HomeIcon,
  InfoIcon,
  PaletteIcon,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    // Force dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6">
        {/* Logo - Left Side */}
        <Link
          href="/"
          onClick={(e) => {
            // If on home page, scroll to top, otherwise navigate
            if (pathname === "/") {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center"
          prefetch={false}
        >
          <Image
            src="/icon/kelsz.dev.png"
            alt="logo"
            className="h-12 w-12 lg:h-20 lg:w-20"
            width={80}
            height={80}
          />
          <span className="sr-only">kelsz.dev</span>
        </Link>

        {/* Burger Menu - Right Side (Mobile) */}
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
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Link href="/" className="mr-6 mb-6 flex" prefetch={false}>
              <Image
                src="/icon/kelsz.dev.png"
                alt="logo"
                width={200}
                height={200}
              />
              <span className="sr-only text-2xl ">kelsz.dev</span>
            </Link>
            <div className="grid gap-2 p-6 z-[9999]">
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
                <PaletteIcon className="h-6 w-6" />
                <Link
                  href="/arts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Arts
                </Link>
              </div>
              {/* <div className="flex items-center gap-2">
                <BookOpenIcon className="h-6 w-6" />
                <Link
                  href="/blog"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </div> */}
              {/* <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-6 w-6" />
                <Link
                  href="/services"
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </div> */}
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
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation - Right Side */}
        <nav className="hidden lg:flex gap-6 items-center">
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
              href="/arts"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex h-9 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                isScrolled
                  ? "bg-background hover:bg-accent hover:text-accent-foreground text-foreground"
                  : "text-foreground hover:text-accent-foreground"
              }`}
            >
              Arts
            </Link>
          </div>
          {/* <div className="flex items-center ">
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
          </div> */}
          {/* <div className="flex items-center ">
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
          </div> */}
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
