"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Download,
  HardDrive,
  FileText,
  Smartphone,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const mediaTypes = ["All Media", "Digital", "Physical"];
const subjects = [
  "All Subjects",
  "Core Academics",
  "Tech & Coding",
  "Exam Prep",
];

const resourceInventory = [
  {
    id: 1,
    title: "Fundamentals of Physics",
    author: "Dr. A. B. Balogun",
    subject: "Core Academics",
    medium: "Physical",
    meta: "Shelf 2A · Available to Borrow",
    image: "/library/book1.jpg",
    desc: "A comprehensive analytical textbook detailing quantum mechanics, thermodynamics, and standard kinematics equations.",
  },
  {
    id: 2,
    title: "Introduction to JavaScript & React",
    author: "Tariq Musa",
    subject: "Tech & Coding",
    medium: "Digital",
    meta: "PDF Format · 14.2 MB Download",
    image: "/library/book2.jpg",
    desc: "The complete coding manual used inside our innovation hub labs for building fast, modern state-driven web applications.",
  },
  {
    id: 3,
    title: "WAEC Past Questions: 2021–2025",
    author: "HigherSchools Council",
    subject: "Exam Prep",
    medium: "Digital",
    meta: "Interactive CBT Module Access",
    image: "/library/book3.jpg",
    desc: "An exhaustive collection of verified regional past question banks complete with comprehensive answers and breakdowns.",
  },
  {
    id: 4,
    title: "Robotics & Machine Basics",
    author: "Prof. Chinedu Obi",
    subject: "Tech & Coding",
    medium: "Physical",
    meta: "Lab 3 Cabinet B · In-use",
    image: "/library/book4.jpg",
    desc: "A practical guide to assembling automated micro-controllers, testing circuitry blocks, and compiling simple C++ logic.",
  },
];

const mediumConfig = {
  Digital: {
    label: "Digital",
    icon: Smartphone,
    pill: "bg-primary/10 text-primary dark:bg-primary/20",
    btn: "bg-primary hover:bg-primary/90 text-white",
    ctaIcon: Download,
    ctaLabel: "Download Resource",
    metaIcon: FileText,
  },
  Physical: {
    label: "Physical",
    icon: BookOpen,
    pill: "bg-secondary/10 text-secondary dark:bg-secondary/20",
    btn: "bg-foreground hover:bg-foreground/90 text-background",
    ctaIcon: BookOpen,
    ctaLabel: "Reserve Copy",
    metaIcon: HardDrive,
  },
};

export default function LibraryGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMedia, setActiveMedia] = useState("All Media");
  const [activeSubject, setActiveSubject] = useState("All Subjects");
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filteredResources = resourceInventory.filter((item) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q);
    const matchesMedia =
      activeMedia === "All Media" || item.medium === activeMedia;
    const matchesSubject =
      activeSubject === "All Subjects" || item.subject === activeSubject;
    return matchesSearch && matchesMedia && matchesSubject;
  });

  const visibleCount = isMobile ? 1 : 3;

  // Reset on filter change
  useEffect(() => {
    setStartIndex(0);
  }, [searchQuery, activeMedia, activeSubject]);

  // Auto-advance: shifts by 1 each tick
  useEffect(() => {
    if (paused || filteredResources.length <= visibleCount) return;
    const timer = setInterval(() => {
      setDirection(1);
      setStartIndex((prev) => (prev + 1) % filteredResources.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [paused, filteredResources.length, visibleCount]);

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) =>
      prev === 0 ? filteredResources.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % filteredResources.length);
  };

  const visibleCards = Array.from(
    { length: Math.min(visibleCount, filteredResources.length) },
    (_, i) => {
      const index = (startIndex + i) % filteredResources.length;
      return { ...filteredResources[index], _carouselIndex: index };
    },
  );

  // Dot = one dot per card (each card is a "slide position")
  const dotCount = filteredResources.length;

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section
      className="w-full bg-slate-50 dark:bg-background py-20 text-foreground transition-colors duration-300"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary font-sans">
            Library Resources
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            Browse the Collection
          </h2>
        </div>

        {/* Search + Filters */}
        <div className="bg-white dark:bg-card border border-slate-200/70 dark:border-zinc-800 rounded-2xl p-5 md:p-6 flex flex-col gap-5 shadow-sm">
          <div className="relative w-full">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by title or author…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              suppressHydrationWarning
              className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground font-sans placeholder:text-slate-400 dark:placeholder:text-zinc-500 transition"
            />
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-zinc-600 font-sans">
            <SlidersHorizontal size={13} />
            <span className="uppercase tracking-widest font-semibold">
              Filters
            </span>
            <div className="flex-1 h-px bg-slate-100 dark:bg-zinc-800" />
          </div>

          <div className="flex flex-col gap-3 font-sans">
            <FilterRow
              label="Medium"
              options={mediaTypes}
              active={activeMedia}
              onChange={setActiveMedia}
            />
            <FilterRow
              label="Subject"
              options={subjects}
              active={activeSubject}
              onChange={setActiveSubject}
            />
          </div>
        </div>

        {/* Result count */}
        <p className="text-xs text-muted-foreground font-sans">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredResources.length}
          </span>{" "}
          {filteredResources.length === 1 ? "resource" : "resources"}
        </p>

        {/* Carousel */}
        {filteredResources.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 text-muted-foreground font-sans gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
              <BookOpen
                size={20}
                className="text-slate-400 dark:text-zinc-500"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                No results found
              </p>
              <p className="text-xs mt-0.5">
                Try adjusting your search or filters.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {/* Sliding track */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={startIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`grid gap-5 ${
                    visibleCards.length === 1
                      ? "grid-cols-1 max-w-sm mx-auto"
                      : visibleCards.length === 2
                        ? "grid-cols-2 max-w-2xl mx-auto"
                        : "grid-cols-1 md:grid-cols-3"
                  }`}
                >
                  {visibleCards.map((book, i) => (
                    <BookCard key={`${book.title}-${i}`} book={book} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            {filteredResources.length > visibleCount && (
              <div className="flex flex-col items-center gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    suppressHydrationWarning
                    aria-label="Previous"
                    className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 hover:bg-primary hover:text-white hover:border-primary text-slate-600 dark:text-zinc-300 transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    suppressHydrationWarning
                    aria-label="Next"
                    className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 hover:bg-primary hover:text-white hover:border-primary text-slate-600 dark:text-zinc-300 transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Dot tracker */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: dotCount }).map((_, i) => (
                    <button
                      key={i}
                      suppressHydrationWarning
                      onClick={() => {
                        setDirection(i > startIndex ? 1 : -1);
                        setStartIndex(i);
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`transition-all duration-300 rounded-full h-2 ${
                        i === startIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-slate-200 dark:bg-zinc-800 hover:bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Filter Row ── */
function FilterRow({ label, options, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground w-16 shrink-0">
        {label}
      </span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          suppressHydrationWarning
          className={`px-3.5 py-1 rounded-full text-xs font-semibold border transition-all duration-200 ${
            active === opt
              ? "bg-primary border-primary text-white shadow-sm shadow-primary/20"
              : "bg-transparent text-muted-foreground border-slate-200 dark:border-zinc-700 hover:border-slate-400 dark:hover:border-zinc-500"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

/* ── Book Card ── */
function BookCard({ book }) {
  const cfg = mediumConfig[book.medium];
  const PillIcon = cfg.icon;
  const CtaIcon = cfg.ctaIcon;
  const MetaIcon = cfg.metaIcon;

  return (
    <div className="group bg-white dark:bg-card border border-slate-200/70 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:border-primary/25 dark:hover:border-primary/30 transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-44 bg-slate-100 dark:bg-zinc-900 overflow-hidden shrink-0">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-bold font-sans uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/20 shadow-sm ${cfg.pill}`}
        >
          <PillIcon size={9} />
          {cfg.label}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow p-5 gap-4">
        <div className="flex flex-col gap-1.5 flex-grow">
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary font-sans">
            {book.subject}
          </span>
          <h3 className="font-heading text-base font-black text-slate-900 dark:text-white leading-snug line-clamp-2">
            {book.title}
          </h3>
          <p className="font-sans text-xs text-muted-foreground">
            {book.author}
          </p>
          <p className="font-sans text-xs text-slate-500 dark:text-zinc-400 leading-relaxed line-clamp-3 mt-1">
            {book.desc}
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
          <span className="font-mono text-[10px] text-slate-400 dark:text-zinc-500 flex items-center gap-1.5 leading-none">
            <MetaIcon size={11} className="shrink-0" />
            {book.meta}
          </span>
          <button
            suppressHydrationWarning
            className={`w-full font-sans font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors duration-200 ${cfg.btn}`}
          >
            <CtaIcon size={12} />
            {cfg.ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
