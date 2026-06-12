"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flag, School, Trophy, Rocket, Globe } from "lucide-react";

const milestones = [
  {
    year: "2010",
    title: "The Foundation",
    desc: "HigherSchools was established with a small, dedicated team and a big vision to redefine quality education in the region.",
    icon: Flag,
  },
  {
    year: "2015",
    title: "Campus Expansion",
    desc: "Opened our ultra-modern campus facilities, including our first smart classrooms and air-conditioned learning halls.",
    icon: School,
  },
  {
    year: "2019",
    title: "Academic Excellence Award",
    desc: "Recognized as the 'Most Innovative Private Institution' for our unique blend of labs and character-building curricula.",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "The Innovation Hub",
    desc: "Launched our dedicated Robotics and Tech centers, allowing students to build real solutions for global impact.",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "Global Impact Reach",
    desc: "Our alumni now attend top-tier universities worldwide, proving our mission of raising global leaders is in full effect.",
    icon: Globe,
  },
];

export default function Milestones() {
  return (
    <section className="w-full bg-primary py-20 dark:bg-slate-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background vector accent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 L100 0 V100 H0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center gap-4">
          <label className="label-eyebrow text-secondary justify-center uppercase tracking-[0.2em] font-bold text-sm">
            Our Journey
          </label>
          <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight leading-tight">
            A Track Record of{" "}
            <span className="text-secondary">Excellence.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed font-light max-w-xl mt-1">
            Over a decade of consistent growth, innovation, and success stories
            that have shaped our vibrant community.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-7 left-0 w-full h-0.5 bg-white/10" />

          <div className="grid grid-cols-5 gap-4">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                    <Icon size={24} className="text-primary" />
                  </div>

                  <span className="font-heading text-2xl font-black text-secondary mt-2">
                    {milestone.year}
                  </span>
                  <h3 className="font-heading text-base font-bold tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="font-sans text-xs text-white/60 leading-relaxed font-light">
                    {milestone.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden relative border-l-2 border-white/10 ml-4">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 pl-8"
              >
                {/* Node */}
                <div className="absolute left-[-25px] top-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)] border-4 border-primary">
                  <Icon size={18} className="text-primary" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-heading text-2xl font-black text-secondary">
                    {milestone.year}
                  </span>
                  <h3 className="font-heading text-lg font-bold tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="font-sans text-sm text-white/60 leading-relaxed font-light">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
