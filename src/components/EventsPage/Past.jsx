"use client";

import React from "react";
import Image from "next/image";
import { Award, Sparkles, Users2 } from "lucide-react";

const recaps = [
  {
    title: "SME Hackathon Challenge 2025",
    summary:
      "Three of our senior teams built functional white-label SaaS invoice tool models designed to automate small business cash flows.",
    metric: "12 Projects Built",
    icon: <Sparkles size={16} />,
    image: "/events/pastevent1.jpg",
  },
  {
    title: "Inter-School Science Olympiad",
    summary:
      "HigherSchools secured 1st place in the regional physics lab experiments and chemistry analytical frameworks division.",
    metric: "1st Place Trophy",
    icon: <Award size={16} />,
    image: "/events/pastevent2.jpg",
  },
  {
    title: "Alumni Career Mentorship Day",
    summary:
      "Graduates returning from global tech networks spent the session restructuring CV standards and giving roadmap insights to students.",
    metric: "200+ Students Channeled",
    icon: <Users2 size={16} />,
    image: "/events/pastevent3.jpg",
  },
];

export default function PastHighlights() {
  return (
    <section
      id="past-highlights"
      className="w-full bg-slate-900 dark:bg-zinc-950 py-24 text-white border-t border-slate-800 dark:border-zinc-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle brand ambient color splash to soften the dark background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Typography Headers */}
        <div className="max-w-3xl mb-16 text-left flex flex-col gap-3">
          <label className="label-eyebrow text-secondary uppercase tracking-[0.2em] font-bold text-sm">
            Campus History
          </label>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Moments of Absolute <span className="text-secondary">Impact.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-400 leading-relaxed font-light max-w-xl">
            Take a retrospective glance through some of our recently concluded
            flagship sessions, academic triumphs, and community milestones.
          </p>
        </div>

        {/* Clean 3-Column Fixed Dimensions Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recaps.map((item) => (
            <div
              key={item.title}
              className="flex flex-col bg-white/[0.03] dark:bg-zinc-900/40 rounded-3xl border border-white/10 dark:border-zinc-800/60 shadow-xl overflow-hidden group hover:shadow-2xl hover:border-primary/40 transition-all duration-500 h-full"
            >
              {/* Image Box Container Frame using strict Aspect Video Ratio */}
              <div className="w-full aspect-video relative overflow-hidden shrink-0 bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Dark masking layer over image to look great in the dark frame */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-500" />

                {/* Absolute Pinned Summary Success Metrics Badge */}
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-slate-950/90 backdrop-blur-sm shadow-md text-white border border-white/10 z-10">
                  <span className="text-secondary">{item.icon}</span>
                  <span>{item.metric}</span>
                </span>
              </div>

              {/* Text Layout Content Area */}
              <div className="p-6 flex flex-col gap-2.5 flex-grow text-left">
                <h3 className="font-heading text-lg font-black tracking-tight text-white group-hover:text-secondary transition-colors duration-300 line-clamp-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed font-normal flex-grow">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
