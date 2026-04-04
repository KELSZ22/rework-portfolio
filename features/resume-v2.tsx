"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "motion/react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MILKY_WAY_SRC = "/app-images/milkyway.webp";

/** Full-bleed Milky Way photo + frosted backdrop (resume section only) */
function ResumeMilkyBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <Image
        src={MILKY_WAY_SRC}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
        priority={false}
      />
      {/* Frosted glass: blurs the image through a tinted veil */}
      <div className="absolute inset-0 bg-background/45 backdrop-blur-md dark:bg-background/55 dark:backdrop-blur-lg" />
      {/* Soft vignette so text stays readable at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_45%,transparent_30%,color-mix(in_oklab,var(--background)_75%,transparent)_100%)] dark:bg-[radial-gradient(ellipse_90%_80%_at_50%_50%,transparent_25%,color-mix(in_oklab,var(--background)_85%,transparent)_100%)]" />
    </div>
  );
}

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  color: string;
}

const WORK_DATA: TimelineItem[] = [
  {
    id: "w1",
    year: "2025",
    title: "Full Stack Developer",
    description: "Springboard Philippines · Philippines",
    color: "bg-indigo-600",
  },
  {
    id: "w2",
    year: "2024",
    title: "Intern Full Stack Developer",
    description: "Negosyante I.T Solutions Corp. · Philippines",
    color: "bg-blue-600",
  },
  {
    id: "w3",
    year: "2023",
    title: "Intern Java Developer",
    description: "Intellyx ICT · Philippines",
    color: "bg-sky-600",
  },
  {
    id: "w4",
    year: "2019",
    title: "Intern Software Developer",
    description: "First Academy of Computer Arts · Philippines",
    color: "bg-cyan-600",
  },
];

const EDUCATION_DATA: TimelineItem[] = [
  {
    id: "e1",
    year: "2024",
    title: "Bachelor of Science in Computer Engineering",
    description: "Universidad De Manila · Philippines",
    color: "bg-cyan-600",
  },
  {
    id: "e2",
    year: "2018",
    title: "ICT (Information Communication Technology)",
    description: "Arellano University · Philippines",
    color: "bg-teal-600",
  },
  {
    id: "e3",
    year: "2023-2024",
    title: "Java NC III, UI & UX Design (TESDA)",
    description:
      "Java Programming NC III; Developing Designs for User Interface and User Experience — TESDA (Technical Education and Skills Development Authority) · Philippines",
    color: "bg-orange-600",
  },
  {
    id: "e4",
    year: "2024",
    title: "Frontend & Data Analytics Bootcamps",
    description:
      "Frontend Fundamentals Bootcamp and Data Analytics Fundamentals Bootcamp — One Code Camp · Philippines",
    color: "bg-purple-600",
  },
];

const PDF_URL =
  "https://drive.google.com/file/d/1C4SityJQXc0Em4dQErThGPWMR9QqF14l/view?usp=sharing";

interface ResumeTimelineProps {
  items: TimelineItem[];
  title: string;
  subtitle?: string;
}

function TimelineNode({ color }: { color: string }) {
  return (
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 scale-125 rounded-full opacity-35 blur-lg",
          color,
        )}
      />
      <div
        className="relative h-4 w-4 rounded-full border-2 border-primary bg-background shadow-[0_0_14px_color-mix(in_oklab,var(--primary)_45%,transparent)] md:h-[18px] md:w-[18px]"
        aria-hidden
      />
    </div>
  );
}

function TimelineCopy({ item }: { item: TimelineItem }) {
  return (
    <>
      <p className="font-mono text-sm font-bold uppercase tracking-widest text-primary md:text-base lg:text-lg [text-shadow:0_1px_2px_rgb(0_0_0_/_0.55),0_0_20px_rgb(0_0_0_/_0.35),0_0_1px_rgb(0_0_0_/_0.8)]">
        {item.year}
      </p>
      <h4 className="text-balance pt-1 text-sm font-semibold text-foreground md:text-base lg:text-lg">
        {item.title}
      </h4>
      <p className="text-pretty pt-2 text-xs leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </>
  );
}

/** Mobile: vertical rail. Desktop: horizontal row + connector line. */
const ResumeTimeline: React.FC<ResumeTimelineProps> = ({
  items,
  title,
  subtitle,
}) => {
  return (
    <div className="relative z-10 py-12 md:py-16">
      <div className="mb-10 text-center md:mb-12">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="relative mx-auto max-w-4xl pb-4 md:max-w-none">
        {/* ——— Mobile: vertical timeline ——— */}
        <div className="relative md:hidden">
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-[1.375rem] w-px bg-gradient-to-b from-primary/20 via-primary/35 to-primary/20"
            aria-hidden
          />
          <ul className="relative m-0 list-none p-0">
            {items.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative grid grid-cols-[2.75rem_1fr] gap-x-4 gap-y-1 pb-14 last:pb-3"
              >
                <div className="col-start-2 min-w-0 text-left">
                  <TimelineCopy item={item} />
                </div>
                <div className="col-start-1 row-start-1 flex justify-center">
                  <TimelineNode color={item.color} />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ——— Desktop: horizontal timeline ——— */}
        <div className="relative hidden md:block md:px-2 lg:px-4">
          <div className="relative">
            {/* Horizontal connector line */}
            <div
              className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-primary/15 via-primary/45 to-primary/15"
              style={{ top: "1" }}
              aria-hidden
            />
            <ul className="relative m-0 flex list-none flex-row flex-wrap justify-center gap-y-16 gap-x-3 pb-6 lg:gap-x-5 xl:flex-nowrap xl:justify-between xl:gap-x-4">
              {items.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group relative z-10 flex w-[calc(50%-0.375rem)] min-w-[200px] max-w-[280px] flex-col items-center text-center lg:w-52 lg:min-w-[200px] lg:max-w-none xl:w-auto xl:flex-1 xl:min-w-0 xl:max-w-[260px]"
                >
                  <motion.div
                    className="mb-6"
                    style={{ marginTop: "-1.375rem" }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TimelineNode color={item.color} />
                  </motion.div>
                  <motion.div
                    className="flex w-full flex-col items-center px-1 pt-2 lg:pt-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TimelineCopy item={item} />
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ResumeV2() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-secondary/30 py-20 font-sans selection:bg-primary/20"
    >
      <ResumeMilkyBackdrop />
      <motion.div
        className="pointer-events-none fixed top-0 right-0 left-0 z-50 h-1 origin-left bg-primary"
        style={{ scaleX }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="animate-fade-in mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">My Resume</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
            A comprehensive overview of my professional experience, education,
            and skills that showcase my journey as a developer.
          </p>
          <Button
            className="gradient-primary text-primary-foreground shadow-hero transition-smooth hover:shadow-glow"
            onClick={() => window.open(PDF_URL, "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <ResumeTimeline
          items={WORK_DATA}
          title="Work experience"
          subtitle="Professional roles"
        />
        <ResumeTimeline
          items={EDUCATION_DATA}
          title="Education"
          subtitle="Academic & training"
        />
      </div>
    </section>
  );
}
