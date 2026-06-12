"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowRight,
  LayoutGrid,
  School,
  Trophy,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const catMeta = {
  "All Events": {
    icon: <LayoutGrid size={14} />,
    activeClass:
      "bg-primary dark:bg-zinc-100 border-slate-900 dark:border-zinc-100 text-white dark:text-zinc-900",
    accent: "text-slate-700 dark:text-zinc-300",
  },
  "Academic & Tech": {
    icon: <School size={14} />,
    activeClass: "bg-primary dark:bg-primary/20 border-primary text-white",
    accent: "text-primary",
  },
  "Sports & Culture": {
    icon: <Trophy size={14} />,
    activeClass: "bg-primary dark:bg-primary/20 border-primary text-white",
    accent: "text-primary",
  },
  "Parent-Teacher": {
    icon: <Users size={14} />,
    activeClass: "bg-primary dark:bg-primary/20 border-primary text-white",
    accent: "text-primary",
  },
};

const eventsData = [
  {
    id: 1,
    title: "Inter-House Sports Festival",
    category: "Sports & Culture",
    date: "24 OCT",
    time: "08:00 AM",
    location: "National Stadium Track",
    status: "Student",
    image: "/events/event1.jpg",
    desc: "Annual track, field, and cultural drill competitions fostering sportsmanship and teamwork across all houses.",
  },
  {
    id: 2,
    title: "PTA Open-Day Conference",
    category: "Parent-Teacher",
    date: "07 NOV",
    time: "10:00 AM",
    location: "School Assembly Hall",
    status: "Parent",
    image: "/events/event2.jpg",
    desc: "A collaborative session for parents to review performance metrics, meet educators, and align on student welfare.",
  },
  {
    id: 3,
    title: "Creative Arts & Music Gala",
    category: "Sports & Culture",
    date: "12 DEC",
    time: "04:00 PM",
    location: "Main Auditorium",
    status: "All",
    image: "/events/event3.jpg",
    desc: "Celebrating creative expression through orchestral performances, stage plays, and fine art gallery exhibitions.",
  },
  {
    id: 4,
    title: "Inter-School Debate Championship",
    category: "Academic & Tech",
    date: "18 JAN",
    time: "09:00 AM",
    location: "Conference Hall B",
    status: "Student",
    image: "/events/events4.jpg",
    desc: "HigherSchools hosts elite regional institutions for an intellectual discourse on global economic policies.",
  },
];

function useVisible() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

export default function EventsGrid() {
  const [activeFilter, setActiveFilter] = useState("All Events");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const visible = useVisible();

  const filteredEvents = eventsData.filter((event) =>
    activeFilter === "All Events" ? true : event.category === activeFilter,
  );

  const totalSlides = Math.max(0, filteredEvents.length - visible);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter, visible]);

  const slide = (dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (dir === "next") return Math.min(prev + 1, totalSlides);
      return Math.max(prev - 1, 0);
    });
    setTimeout(() => setIsAnimating(false), 350);
  };

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < totalSlides;

  const GAP = visible === 1 ? 16 : 20;

  return (
    <section
      id="events-grid"
      className="w-full bg-slate-50 dark:bg-background text-foreground py-20 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Filter Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-zinc-800">
          <div className="flex flex-wrap gap-2">
            {Object.entries(catMeta).map(([cat, meta]) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-xs font-medium font-sans transition-all duration-200 ${
                    isActive
                      ? meta.activeClass
                      : "bg-white dark:bg-card border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {meta.icon}
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Count + Nav Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto font-sans">
            <p className="text-xs text-muted-foreground shrink-0">
              Showing{" "}
              <span className="text-slate-900 dark:text-white font-bold">
                {Math.min(visible, filteredEvents.length)}
              </span>{" "}
              of {filteredEvents.length} events
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => slide("prev")}
                disabled={!canPrev}
                className="p-1.5 rounded-md border border-slate-200 dark:border-zinc-700 text-slate-400 dark:text-zinc-500 hover:text-slate-800 dark:hover:text-zinc-200 hover:border-slate-400 dark:hover:border-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => slide("next")}
                disabled={!canNext}
                className="p-1.5 rounded-md border border-slate-200 dark:border-zinc-700 text-slate-400 dark:text-zinc-500 hover:text-slate-700 dark:hover:text-zinc-200 hover:border-slate-400 dark:hover:border-zinc-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(-${currentIndex} * (100% / ${visible} + ${GAP - GAP / visible}px)))`,
            }}
          >
            {filteredEvents.map((event, index) => {
              const meta = catMeta[event.category];
              return (
                <div
                  key={event.title}
                  className="flex-shrink-0 bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
                  style={{
                    width: `calc((100% - ${(visible - 1) * GAP}px) / ${visible})`,
                  }}
                >
                  {/* Image Frame with object-top correction */}
                  <div className="relative w-full h-44 shrink-0 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-slate-950/0 transition-colors duration-500" />

                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] font-bold font-sans uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/95 dark:bg-zinc-900/95 dark:text-white backdrop-blur-sm border border-slate-200/40 dark:border-zinc-800 shadow-sm text-primary">
                      {meta.icon}
                      {event.category}
                    </span>
                    <span className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm px-2 py-1 rounded-md border border-slate-200/40 dark:border-zinc-800 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Unified Flexbox Content Container */}
                  <div className="p-5 flex flex-col justify-between flex-grow text-left bg-white dark:bg-card min-h-[260px]">
                    {/* Top Segment: Typography Layout */}
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex flex-col shrink-0">
                          <span className="text-xl font-heading font-black text-slate-900 dark:text-white leading-none">
                            {event.date.split(" ")[0]}
                          </span>
                          <span className="text-xs font-sans text-muted-foreground uppercase font-bold tracking-wider mt-0.5">
                            {event.date.split(" ")[1]}
                          </span>
                        </div>
                        <h3 className="font-heading text-base font-black tracking-tight text-slate-900 dark:text-white leading-snug line-clamp-2 flex-grow group-hover:text-primary transition-colors duration-300">
                          {event.title}
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal line-clamp-3">
                        {event.desc}
                      </p>
                    </div>

                    {/* Bottom Segment: Uniform Badges & Action CTA */}
                    <div className="flex flex-col gap-3 mt-4">
                      {/* Meta Timestamps */}
                      <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-zinc-800 font-sans text-xs font-light text-slate-500 dark:text-zinc-400">
                        <Calendar size={12} />
                        <span>{event.time}</span>
                        <Clock size={12} className="ml-3" />
                        <span className="truncate">{event.location}</span>
                      </div>

                      {/* Unified Interactive Button Trigger */}
                      <div className="pt-2 flex justify-end">
                        <Link
                          href={`/events/${event.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold font-sans bg-primary hover:bg-primary/90 text-white px-4 py-1.5 rounded-full shadow-md shadow-primary/10 transition-colors"
                        >
                          <span>Register</span>
                          <ArrowRight
                            size={12}
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot Indicators */}
        {totalSlides > 0 && (
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: totalSlides + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all duration-300 h-1.5 ${
                  i === currentIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
