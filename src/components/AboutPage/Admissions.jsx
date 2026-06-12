"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  UserPlus,
  ClipboardList,
  CalendarDays,
} from "lucide-react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AdmissionsCta() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const processingSteps = [
    {
      icon: UserPlus,
      title: "1. Apply Online",
      desc: "Fill our simple digital application form and upload previous records.",
    },
    {
      icon: ClipboardList,
      title: "2. Assessment",
      desc: "A brief, encouraging review to find your child's perfect class fit.",
    },
    {
      icon: CalendarDays,
      title: "3. Welcome Day",
      desc: "Complete documentation, pick up uniforms, and begin active learning.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-background py-20 border-t border-slate-200/50 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center">
        {/* Core Conversion Copy Header */}
        <div className="text-center max-w-2xl mb-16 flex flex-col items-center gap-4">
          <label className="label-eyebrow text-secondary justify-center uppercase tracking-[0.2em] font-bold text-sm">
            Enrolling Now
          </label>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Ready to Build Their <span className="text-primary">Future?</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
            Admissions are actively open for the current academic session. Give
            your child access to a vibrant, state-of-the-art community
            engineered for absolute growth, innovation, and global impact.
          </p>
        </div>

        {/* Clean 3-Step Practical Process Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-14 relative group/container">
          {processingSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative flex flex-col p-7 rounded-lg transition-all duration-300 group border-2 ${
                  index === 0
                    ? "bg-primary dark:bg-secondary dark:border-white border-primary text-white group-hover/container:bg-white group-hover/container:dark:bg-card group-hover/container:border-slate-200/60 group-hover/container:dark:border-zinc-800 group-hover/container:text-slate-900 group-hover/container:dark:text-zinc-100 hover:!bg-primary dark:hover:!bg-secondary dark:hover:!border-white hover:!border-primary hover:!text-white"
                    : "bg-white dark:bg-card border-slate-200/60 dark:border-zinc-800 hover:bg-primary dark:hover:bg-secondary dark:hover:border-white hover:border-primary text-slate-900 dark:text-zinc-100 hover:text-white"
                }`}
              >
                {/* Large background step number */}
                <span
                  className={`absolute top-3 right-4 font-heading text-6xl font-black transition-colors duration-300 select-none leading-none ${
                    index === 0
                      ? "text-white/10 group-hover/container:text-slate-100 group-hover/container:dark:text-zinc-800/80 hover:!text-white/10"
                      : "text-slate-100 dark:text-zinc-800/80 group-hover:text-white/10"
                  }`}
                >
                  {index + 1}
                </span>

                <div
                  className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 shrink-0 border-2 ${
                    index === 0
                      ? "border-white/30 bg-white/10 text-white group-hover/container:text-primary group-hover/container:border-primary/20 group-hover/container:bg-transparent hover:!border-white/30 hover:!bg-white/10 hover:!text-white"
                      : "text-primary border-primary/20 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <h3
                  className={`relative z-10 mt-4 font-heading text-base font-black uppercase tracking-tighter mb-2 transition-colors duration-300 ${
                    index === 0
                      ? "text-white group-hover/container:text-slate-900 group-hover/container:dark:text-zinc-100 hover:!text-white"
                      : "text-slate-900 dark:text-zinc-100 group-hover:text-white"
                  }`}
                >
                  {step.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <p
                  className={`relative z-10 font-sans text-xs transition-colors duration-300 ${
                    index === 0
                      ? "text-white/80 group-hover/container:text-muted-foreground hover:!text-white/80"
                      : "text-muted-foreground group-hover:text-white/80"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
        {/* Dynamic Interactive Gateway Action Button */}
        <div className="flex flex-col items-center gap-4">
          {user ? (
            <Link
              href="/dashboard"
              className="group bg-secondary text-white font-sans font-bold hover:bg-secondary/90 px-12 py-4 rounded-full inline-flex items-center gap-2.5 transition-all shadow-lg shadow-secondary/20 hover:scale-[1.02] text-sm md:text-base"
            >
              <span>Go to Your Dashboard</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          ) : (
            <Link
              href="/auth/signup"
              className="group bg-secondary text-white font-sans font-bold hover:bg-secondary/90 px-12 py-4 rounded-full inline-flex items-center gap-2.5 transition-all shadow-lg shadow-secondary/20 hover:scale-[1.02] text-sm md:text-base"
            >
              <span>Begin Online Application</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          )}
          <p className="font-sans text-xs text-muted-foreground">
            Have questions? Feel free to{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline font-medium"
            >
              contact our support desk
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
