"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Amara Okafor",
    status: "Parent",
    location: "Lagos, Nigeria",
    rating: 5,
    statement:
      "My daughter loves this school! The learning environment is so encouraging, and I can easily track her structural progress and stay in touch with her teachers. It's truly a wonderful community.",
  },
  {
    name: "Mr. Tunde Alao",
    status: "Teacher",
    location: "Abuja, Nigeria",
    rating: 5,
    statement:
      "Teaching here gives me access to modern labs and classrooms that make passing down knowledge beautiful. The students are eager to innovate, and the support is completely top-tier.",
  },
  {
    name: "Chidi Emmanuel",
    status: "Student",
    location: "Enugu, Nigeria",
    rating: 5,
    statement:
      "The practical science labs and the new innovation hubs are my favorite places. We don't just read textbooks; we get to build real projects that prepare us to make an impact globally.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-zinc-950 text-foreground transition-colors duration-300 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center text-center">
        {/* Centered Section Header */}
        <div className="mb-14 flex flex-col items-center gap-3">
          <label className="label-eyebrow text-secondary uppercase tracking-[0.2em] font-bold text-sm">
            Our Testimonials
          </label>
          <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight text-slate-900 dark:text-white">
            What Our Family <span className="text-primary">Says.</span>
          </h2>
        </div>

        {/* Sliding Card Frame Container */}
        <div className="relative w-full min-h-[340px] md:min-h-[280px] flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full p-8 md:p-10 bg-slate-50 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 rounded-3xl shadow-xl shadow-slate-100/50 dark:shadow-none flex flex-col items-center justify-center gap-6"
            >
              {/* Profile Meta Info Block */}
              <div className="flex flex-col items-center text-center gap-1">
                <h3 className="text-xl md:text-2xl font-heading font-black text-slate-900 dark:text-white">
                  {reviews[activeIndex].name}
                </h3>
                <p className="text-xs font-sans font-bold text-primary tracking-wide uppercase">
                  {reviews[activeIndex].status} ──{" "}
                  <span className="text-muted-foreground font-normal normal-case">
                    {reviews[activeIndex].location}
                  </span>
                </p>
              </div>

              {/* Dynamic Star Rating Block */}
              <div className="flex items-center gap-1 text-orange-500">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Centered Quote Statement */}
              <p className="text-slate-600 dark:text-zinc-300 font-sans text-base md:text-lg leading-relaxed max-w-2xl font-light italic">
                &quot;{reviews[activeIndex].statement}&quot;
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Directional Controls & Slide Indicators */}
        <div className="flex flex-col items-center gap-6 mt-10 w-full">
          {/* Arrow Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-100 ..."
              aria-label="Previous Testimonial"
              suppressHydrationWarning
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-100 ..."
              aria-label="Next Testimonial"
              suppressHydrationWarning
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dot Tracker Track */}
          <div className="flex items-center gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all ...`}
                aria-label={`Go to slide ${index + 1}`}
                suppressHydrationWarning // add here
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
