"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { useIntersectionObserver } from "../../../hooks/use-inter-section-observer";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  // Show only 5 projects on home page
  const displayedProjects = projects.slice(0, 5);

  const handleMouseDown = (e: React.MouseEvent, isDesktop: boolean) => {
    const carousel = isDesktop
      ? desktopCarouselRef.current
      : mobileCarouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    setStartX(e.pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
    carousel.style.cursor = "grabbing";
    carousel.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent, isDesktop: boolean) => {
    if (!isDragging) return;
    e.preventDefault();

    const carousel = isDesktop
      ? desktopCarouselRef.current
      : mobileCarouselRef.current;
    if (!carousel) return;

    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carousel.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = (isDesktop: boolean) => {
    setIsDragging(false);
    const carousel = isDesktop
      ? desktopCarouselRef.current
      : mobileCarouselRef.current;
    if (!carousel) return;

    carousel.style.cursor = "grab";
    carousel.style.userSelect = "auto";
  };

  const handleTouchStart = (e: React.TouchEvent, isDesktop: boolean) => {
    const carousel = isDesktop
      ? desktopCarouselRef.current
      : mobileCarouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent, isDesktop: boolean) => {
    if (!isDragging) return;

    const carousel = isDesktop
      ? desktopCarouselRef.current
      : mobileCarouselRef.current;
    if (!carousel) return;

    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6" ref={elementRef}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "animate-fade-in opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web
            development, design, and problem-solving. Each project represents a
            unique challenge and learning experience.
          </p>
        </div>

        {/* Desktop Carousel View */}
        <div className="hidden lg:block relative">
          {/* Carousel Container */}
          <div
            ref={desktopCarouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => handleMouseDown(e, true)}
            onMouseMove={(e) => handleMouseMove(e, true)}
            onMouseUp={() => handleMouseUp(true)}
            onMouseLeave={() => handleMouseUp(true)}
            onTouchStart={(e) => handleTouchStart(e, true)}
            onTouchMove={(e) => handleTouchMove(e, true)}
            onTouchEnd={handleTouchEnd}
          >
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex-shrink-0 w-[400px] snap-center transition-all duration-700 ${
                  isVisible
                    ? "animate-fade-in opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} variant="featured" />
              </div>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="flex justify-center mt-12">
            <Link href="/projects">
              <Button variant="default" size="lg" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden relative">
          {/* Carousel Container */}
          <div
            ref={mobileCarouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => handleMouseDown(e, false)}
            onMouseMove={(e) => handleMouseMove(e, false)}
            onMouseUp={() => handleMouseUp(false)}
            onMouseLeave={() => handleMouseUp(false)}
            onTouchStart={(e) => handleTouchStart(e, false)}
            onTouchMove={(e) => handleTouchMove(e, false)}
            onTouchEnd={handleTouchEnd}
          >
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex-shrink-0 w-[300px] snap-center transition-all duration-700 ${
                  isVisible
                    ? "animate-fade-in opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} variant="featured" />
              </div>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="flex justify-center mt-6">
            <Link href="/projects">
              <Button variant="default" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
