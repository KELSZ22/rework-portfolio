"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PaletteIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ArtWork {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  tags: string[];
}

const artworks: ArtWork[] = [
  {
    id: 1,
    title: "Digital Art #1",
    description:
      "Creative digital artwork exploring visual storytelling and composition.",
    image: "/kelArts/1.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Creative", "Design", "Digital Painting"],
  },
  {
    id: 2,
    title: "Digital Art #2",
    description:
      "Artistic expression through digital medium and innovative techniques.",
    image: "/kelArts/2.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Illustration", "Visual Design", "Low polygonal art"],
  },
  {
    id: 3,
    title: "Digital Art #3",
    description:
      "Exploring colors, textures, and visual harmony in digital space.",
    image: "/kelArts/3.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Color Theory", "Composition"],
  },
  {
    id: 4,
    title: "Digital Art #4",
    description:
      "Contemporary digital artwork with unique aesthetic perspective.",
    image: "/kelArts/4.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Contemporary", "Creative"],
  },
  {
    id: 5,
    title: "Digital Art #5",
    description:
      "Innovative digital creation blending style and artistic vision.",
    image: "/kelArts/5.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Innovation", "Style"],
  },
  {
    id: 6,
    title: "Digital Art #6",
    description: "Dynamic digital composition showcasing creative expression.",
    image: "/kelArts/6.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Dynamic", "Expression"],
  },
  {
    id: 7,
    title: "Digital Art #7",
    description: "Artistic exploration of form, color, and digital techniques.",
    image: "/kelArts/7.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Form", "Technique"],
  },
  {
    id: 8,
    title: "Digital Art #8",
    description: "Creative digital work featuring unique visual storytelling.",
    image: "/kelArts/8.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Storytelling", "Visual"],
  },
  {
    id: 9,
    title: "Digital Art #9",
    description: "Expressive digital artwork with bold creative choices.",
    image: "/kelArts/9.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Expressive", "Bold"],
  },
  {
    id: 10,
    title: "Digital Art #10",
    description: "Contemporary digital piece with artistic innovation.",
    image: "/kelArts/10.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Contemporary", "Innovation"],
  },
  {
    id: 11,
    title: "Digital Art #11",
    description: "Unique digital creation showcasing artistic versatility.",
    image: "/kelArts/11.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Versatile", "Unique"],
  },
  {
    id: 12,
    title: "Digital Art #12",
    description:
      "Striking digital artwork with thoughtful composition and design.",
    image: "/kelArts/12.png",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Composition", "Design"],
  },
  {
    id: 13,
    title: "Digital Art #13",
    description: "Captivating digital piece exploring visual aesthetics.",
    image: "/kelArts/13.png",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Aesthetics", "Visual"],
  },
  {
    id: 14,
    title: "Digital Art #14",
    description: "Imaginative digital creation with artistic depth and style.",
    image: "/kelArts/14.png",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Imaginative", "Style", "Photo Manipulation"],
  },
  {
    id: 15,
    title: "Digital Art #15",
    description:
      "Creative digital masterpiece showcasing technical skill and artistry.",
    image: "/kelArts/15.png",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Masterpiece", "Artistry"],
  },
  {
    id: 16,
    title: "Digital Art #16",
    description:
      "Expressive digital work with vibrant colors and dynamic composition.",
    image: "/kelArts/16.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Vibrant", "Dynamic"],
  },
  {
    id: 17,
    title: "Digital Art #17",
    description:
      "Artistic exploration combining traditional and digital techniques.",
    image: "/kelArts/17.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Mixed Media", "Artistic"],
  },
  {
    id: 18,
    title: "Digital Art #18",
    description:
      "Contemporary digital piece showcasing creative vision and style.",
    image: "/kelArts/18.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Contemporary", "Vision"],
  },
  {
    id: 19,
    title: "Digital Art #19",
    description:
      "Innovative digital artwork with unique aesthetic and composition.",
    image: "/kelArts/19.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Innovative", "Aesthetic"],
  },
  {
    id: 20,
    title: "Digital Art #20",
    description:
      "Creative digital masterwork blending imagination and technique.",
    image: "/kelArts/20.jpg",
    category: "Digital Art",
    year: "2024",
    tags: ["Digital Art", "Imagination", "Technique"],
  },
];

export default function ArtsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    "All",
    "Digital Art",
    "Motion Graphics",
    "Abstract",
    "Illustration",
    "3D Art",
  ];

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  // Reset to first slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedCategory]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === filteredArtworks.length - 1 ? 0 : prev + 1
    );
  }, [filteredArtworks.length]);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? filteredArtworks.length - 1 : prev - 1
    );
  }, [filteredArtworks.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Auto-play slideshow every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <PaletteIcon className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            My <span className="text-primary">Art Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my creative journey through digital art, illustrations, and
            visual experiments.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Art Gallery Slideshow */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredArtworks.length > 0 ? (
            <div className="relative">
              {/* Main Slide */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {filteredArtworks.map((artwork) => (
                    <div key={artwork.id} className="min-w-full">
                      <Card className="overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image Section */}
                          <div className="relative aspect-square md:aspect-auto bg-muted min-h-[400px]">
                            <Image
                              src={artwork.image}
                              alt={artwork.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority={
                                currentSlide ===
                                filteredArtworks.indexOf(artwork)
                              }
                            />
                          </div>

                          {/* Content Section */}
                          <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                              <Badge variant="secondary" className="text-sm">
                                {artwork.category}
                              </Badge>
                              {/* <Badge variant="outline" className="text-sm">
                                {artwork.year}
                              </Badge> */}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                              {artwork.title}
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                              {artwork.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {artwork.tags.map((tag) => (
                                <Badge key={tag} variant="outline">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {/* Slide Counter */}
                            <div className="mt-8 pt-6 border-t border-border">
                              <p className="text-sm text-muted-foreground">
                                Artwork {currentSlide + 1} of{" "}
                                {filteredArtworks.length}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {filteredArtworks.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-all shadow-lg"
                    aria-label="Previous slide"
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-all shadow-lg"
                    aria-label="Next slide"
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Slide Indicators */}
              {filteredArtworks.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {filteredArtworks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Keyboard Navigation Hint */}
              {filteredArtworks.length > 1 && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Use arrow keys ← → to navigate
                </p>
              )}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <PaletteIcon className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No artworks found</h3>
              <p className="text-muted-foreground">
                Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always open to new creative projects and collaborations.
          </p>
          <a
            href="mailto:michaels6355@gmail.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
