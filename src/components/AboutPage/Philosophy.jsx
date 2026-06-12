"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Center of Learning",
    desc: "A warm, bright space where great teachers help students read, discover, and love learning every single day.",
    imageClass: "bg-[url('/about/phil1.jpg')]",
  },
  {
    title: "Innovation & Discovery",
    desc: "We inspire bright young minds to ask questions, practice in our labs, build new things, and solve real problems.",
    imageClass: "bg-[url('/about/phil2.jpg')]",
  },
  {
    title: "Socialization & Growth",
    desc: "Students connect deeply, build lifelong friendships, and learn the true value of teamwork and mutual respect.",
    imageClass: "bg-[url('/about/phil3.jpg')]",
  },
  {
    title: "Global Personal Impact",
    desc: "We shape strong moral character, helping our students grow into confident leaders ready to change the world for the better.",
    imageClass: "bg-[url('/about/phil4.jpg')]",
  },
];

// Staggered Animation Layout Schemas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 },
  },
};

export default function Philosophy() {
  return (
    <section className="w-full bg-slate-50 dark:bg-background py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Centered Main Layout Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center gap-4"
        >
          <label className="label-eyebrow text-secondary justify-center uppercase tracking-[0.2em] font-bold text-sm">
            Our Foundation
          </label>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Our Foundation for{" "}
            <span className="text-primary">Global Success.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-xl mt-1">
            We believe in raising the whole child. We blend top-tier lessons
            with creative tech and great character to prepare students for real
            impact.
          </p>
        </motion.div>

        {/* 4-Column Responsive Grid Layout displaying true Portrait Proportions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-3xl bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 shadow-md shadow-slate-100/40 dark:shadow-none hover:shadow-xl hover:border-primary/30 transition-all duration-500 overflow-hidden group flex flex-col h-full min-h-[420px]"
              >
                {/* 1. TOP SECTION: Fixed-Height Asset Window with Zoom Effect */}
                <div className="w-full h-48 overflow-hidden relative shrink-0">
                  <div
                    className={`absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-all duration-700 ${pillar.imageClass}`}
                  />
                  {/* Subtle clean protective graphic drop tint */}
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/0 transition-colors duration-500" />
                </div>

                {/* 2. BOTTOM SECTION: Structured High-Contrast Copy Space */}
                <div className="p-6 flex flex-col gap-3 flex-grow text-left bg-white dark:bg-card">
                  <h3 className="font-heading text-lg md:text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal flex-grow">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
