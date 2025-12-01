"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Code,
  Monitor,
  Smartphone,
  Mail,
  Phone,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  live: string;
  github?: string;
  featured?: boolean;
  status?: "completed" | "in-progress" | "planned";
  requiresCredentials?: boolean;
}

interface ProjectCardProps {
  project: Project;
  variant?: "featured" | "default";
  className?: string;
}

export function ProjectCard({
  project,
  variant = "default",
  className,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const imageSrc = project.image;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "planned":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Monitor className="h-4 w-4" />;
      case "in-progress":
        return <Code className="h-4 w-4" />;
      case "planned":
        return <Smartphone className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const isFeatured = variant === "featured";
  const shouldShowPlaceholder =
    !imageSrc || imageSrc === "/placeholder-project.jpg" || imageError;

  return (
    <>
      <Card
        className={cn(
          "group overflow-hidden hover:shadow-2xl transition-all duration-300",
          className
        )}
      >
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          {!shouldShowPlaceholder && imageSrc.startsWith("/") ? (
            <>
              <img
                src={imageSrc}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
              {/* Hover Overlay - Only for featured variant */}
              {isFeatured && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                  {project.github && (
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.requiresCredentials ? (
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMessage(true);
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  ) : (
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Code className="h-16 w-16 text-muted-foreground/30" />
            </div>
          )}
        </div>

        {/* Card Header */}
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            {project.status && (
              <Badge className={getStatusColor(project.status)}>
                {getStatusIcon(project.status)}
                <span className="ml-1 capitalize">
                  {project.status.replace("-", " ")}
                </span>
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </CardHeader>

        {/* Card Content */}
        <CardContent>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>

          {/* Action Buttons - Only for default variant */}
          {!isFeatured && (
            <div className="flex gap-2">
              {project.github && (
                <Button size="sm" variant="outline" asChild className="flex-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
              {project.requiresCredentials ? (
                <Button
                  size="sm"
                  className={project.github ? "flex-1" : "w-full"}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMessage(true);
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live
                </Button>
              ) : (
                <Button
                  size="sm"
                  asChild
                  className={project.github ? "flex-1" : "w-full"}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Credentials Message - Floating Bottom Center */}
      {showMessage && project.requiresCredentials && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] max-w-md w-full mx-4">
          <div className="bg-background border border-primary/50 rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-2">
                  Credentials Required
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Email or call Michael Sabino for username and password
                </p>
                <div className="flex gap-3">
                  <a
                    href="mailto:michaels6355@gmail.com"
                    className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="h-3 w-3" />
                    Email
                  </a>
                  <a
                    href="tel:+639358693624"
                    className="inline-flex items-center gap-2 text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    Call
                  </a>
                </div>
              </div>
              <button
                onClick={() => setShowMessage(false)}
                className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                aria-label="Close message"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
