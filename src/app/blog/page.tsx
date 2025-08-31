"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { useIntersectionObserver } from "../../../hooks/use-inter-section-observer";

const BlogPage = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const blogPosts = [
    {
      id: "1",
      title: "Building Modern Web Applications with Next.js and TypeScript",
      excerpt:
        "Learn how to create scalable and maintainable web applications using Next.js 15 and TypeScript. This comprehensive guide covers best practices, performance optimization, and deployment strategies.",
      content: "Full content of the blog post...",
      author: "Michael Z. Sabino",
      date: "December 15, 2024",
      readTime: "8 min read",
      tags: ["Next.js", "TypeScript", "Web Development"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop",
    },
    {
      id: "2",
      title: "The Future of Frontend Development: Trends to Watch in 2025",
      excerpt:
        "Explore the emerging trends in frontend development including new frameworks, tools, and methodologies that will shape the industry in 2025 and beyond.",
      content: "Full content of the blog post...",
      author: "Michael Z. Sabino",
      date: "December 10, 2024",
      readTime: "6 min read",
      tags: ["Frontend", "Trends", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=300&fit=crop",
    },
    {
      id: "3",
      title: "Database Optimization Techniques for Better Performance",
      excerpt:
        "Discover practical database optimization strategies that can significantly improve your application's performance, from query optimization to indexing best practices.",
      content: "Full content of the blog post...",
      author: "Michael Z. Sabino",
      date: "December 5, 2024",
      readTime: "10 min read",
      tags: ["Database", "Performance", "MySQL", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=300&fit=crop",
    },
    {
      id: "4",
      title: "Creating Responsive Designs with Tailwind CSS",
      excerpt:
        "Master the art of responsive web design using Tailwind CSS. Learn advanced techniques for building beautiful, mobile-first interfaces that work across all devices.",
      content: "Full content of the blog post...",
      author: "Michael Z. Sabino",
      date: "November 28, 2024",
      readTime: "7 min read",
      tags: ["CSS", "Tailwind", "Responsive Design"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
    },
    {
      id: "5",
      title: "From Student to Developer: My Programming Journey",
      excerpt:
        "A personal reflection on my journey from computer engineering student to full-stack developer, including the challenges faced and lessons learned along the way.",
      content: "Full content of the blog post...",
      author: "Michael Z. Sabino",
      date: "November 20, 2024",
      readTime: "5 min read",
      tags: ["Career", "Personal", "Learning"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
    },
    {
      id: "6",
      title: "API Development Best Practices with Laravel and PHP",
      excerpt:
        "Learn how to build robust and secure APIs using Laravel and PHP. This guide covers authentication, validation, error handling, and API documentation.",
      content: "Full content of the blog post...",
      author: "Michael Z. Sabino",
      date: "November 15, 2024",
      readTime: "9 min read",
      tags: ["Laravel", "PHP", "API", "Backend"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop",
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
                Blog
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts on web development,
              programming, and technology. Join me on my learning journey!
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className={`gradient-card shadow-card hover:shadow-glow transition-all duration-700 border-border/50 overflow-hidden group cursor-pointer ${
                  isVisible
                    ? "animate-fade-in opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      size="sm"
                      className="w-full gradient-primary shadow-hero hover:shadow-glow transition-smooth"
                    >
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8"
            >
              Load More Posts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
