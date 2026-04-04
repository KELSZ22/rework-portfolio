"use client";

import Link from "next/link";
import { Code, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import Footer from "../../../features/homepage/components/footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of web applications, mobile apps, and
              innovative solutions that showcase my technical skills and
              creative problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
