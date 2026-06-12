"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneCallIcon, MailIcon } from "lucide-react";

const team = [
  {
    name: "Prof. Chinedu Obi",
    role: "Chairman & Board Director",
    bio: "Over 25 years of global academic management, shaping high-impact curricula and setting institutional standards.",
    imageClass: "bg-[url('/about/team1.jpg')]",
  },
  {
    name: "Dr. Funmi Alao",
    role: "School Principal",
    bio: "Passionate educator specializing in smart learning strategies and early leadership personal growth models.",
    imageClass: "bg-[url('/about/team2.jpg')]",
  },
  {
    name: "Mr. Tariq Musa",
    role: "Head of Innovation & Tech",
    bio: "Engineered our advanced practical labs, robotics hub, and interactive digital coordination programs.",
    imageClass: "bg-[url('/about/team3.jpg')]",
  },
  {
    name: "Mrs. Amara Egwu",
    role: "Head of Student Welfare",
    bio: "Dedicated to building positive student character, encouraging healthy socialization, and global impact minds.",
    imageClass: "bg-[url('/about/team4.jpg')]",
  },
];

const SLIDE_INTERVAL = 4000;

function usePerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

export default function Leadership() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % team.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="leadership"
      className="w-full bg-white dark:bg-card py-20 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center gap-4"
        >
          <label className="label-eyebrow text-secondary justify-center uppercase tracking-[0.2em] font-bold text-sm">
            Our Faculty
          </label>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            The Minds Leading Our{" "}
            <span className="text-primary">Future Builders.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-xl mt-1">
            Meet our highly skilled, forward-thinking administrative team
            dedicated to sustaining an exceptional, secure educational
            community.
          </p>
        </motion.div>

        {/* Sliding Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `calc(-${index} * (100% / ${perView} + 1.5rem * (1 / ${perView})))`,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {team.map((member, i) => (
              <div
                key={i}
                className="shrink-0 rounded-3xl bg-slate-50 dark:bg-background border border-slate-200/60 dark:border-zinc-800/80 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 overflow-hidden group flex flex-col h-full min-h-[440px]"
                style={{
                  width: `calc((100% - 1.5rem * (${perView} - 1)) / ${perView})`,
                }}
              >
                {/* Image Portrait Block at Top Frame */}
                <div className="w-full h-72 md:h-64 overflow-hidden relative shrink-0 bg-slate-200 dark:bg-zinc-800">
                  <div
                    className={`absolute inset-0 bg-cover bg-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${member.imageClass}`}
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/0 transition-colors duration-500" />
                </div>

                {/* Professional Content Block at Bottom Frame */}
                <div className="p-6 flex flex-col gap-3 flex-grow text-left">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-heading text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="font-sans text-xs font-semibold text-secondary uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal flex-grow">
                    {member.bio}
                  </p>

                  {/* Clean Professional Interactive Channels */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-zinc-800/50 text-slate-400">
                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-200"
                      aria-label="Email Address"
                    >
                      <MailIcon size={16} />
                    </a>

                    <a
                      href="#"
                      className="hover:text-primary transition-colors duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <PhoneCallIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-slate-300 dark:bg-zinc-700"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
