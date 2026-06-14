"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  CreditCard,
} from "lucide-react";
import AdmissionHero from "@/components/Admissions/Hero";

export default function AdmissionsPage() {
  // Simple countdown string ticker for the current academic session
  const [timeLeft] = useState("14d 06h 32m");

  return (
    <div className="w-full bg-slate-50 dark:bg-background min-h-screen text-foreground transition-colors duration-300">
      {/* 1. REUSABLE HERO BANNER MODULATED COMPONENT */}
      <AdmissionHero
        title={
          <>
            Enrollment & <span className="text-secondary">Entry.</span>
          </>
        }
        subtitle="Begin your child's transformative journey into elite, tech-infused secondary schooling frameworks."
      />

      {/* CORE INFORMATION OVERVIEW SUMMARY MATRIX */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Entry Requirements & Cost Structures (7 Columns) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* General Entry Requirements */}
          <div className="bg-white dark:bg-card p-8 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              <span>General Entry Guidelines</span>
            </h2>
            <ul className="space-y-3 font-sans text-sm text-slate-600 dark:text-zinc-400 font-light">
              <li className="flex gap-2 items-start">
                <ShieldCheck
                  size={16}
                  className="text-emerald-500 mt-0.5 shrink-0"
                />
                <span>
                  Passed primary terminal classes with strong credits in basic
                  calculation and vocabulary literacy.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <ShieldCheck
                  size={16}
                  className="text-emerald-500 mt-0.5 shrink-0"
                />
                <span>
                  Submission of terminal grade report cards from previous
                  standard elementary centers.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <ShieldCheck
                  size={16}
                  className="text-emerald-500 mt-0.5 shrink-0"
                />
                <span>
                  Completion of the mandatory baseline entry aptitude evaluation
                  test scorecard matrix.
                </span>
              </li>
            </ul>
          </div>

          {/* Tuition Brackets Breakdown */}
          <div className="bg-white dark:bg-card p-8 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-sm space-y-4">
            <h2 className="font-heading text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <CreditCard size={20} className="text-secondary" />
              <span>Tuition & Fee Thresholds</span>
            </h2>
            <div className="font-sans text-sm divide-y divide-slate-100 dark:divide-zinc-800">
              <div className="py-3 flex justify-between">
                <span className="text-muted-foreground font-light">
                  Application Processing Fee
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  ₦10,000
                </span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-muted-foreground font-light">
                  Junior Secondary Tuition (Per Term)
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  ₦150,000
                </span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-muted-foreground font-light">
                  Senior Secondary Tuition (Per Term)
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  ₦180,000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Deadline Ticker Widget & Action Gate (5 Columns) */}
        <div className="lg:col-span-5 w-full lg:sticky lg:top-24">
          <div className="w-full bg-white dark:bg-card p-8 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-xl shadow-slate-200/40 dark:shadow-none text-left flex flex-col gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-sans font-bold text-secondary uppercase tracking-widest bg-secondary/5 px-2 py-0.5 rounded">
                Active Term
              </span>
              <h3 className="font-heading text-xl font-black text-slate-900 dark:text-white tracking-tight">
                2026/2027 Session
              </h3>
            </div>

            {/* Simulated Countdown Ticker Box */}
            <div className="p-4 bg-slate-900 text-white rounded-2xl flex items-center gap-4 font-sans">
              <div className="p-3 bg-white/10 rounded-xl text-secondary">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Registration Portal Closes In
                </h4>
                <p className="font-mono text-lg font-bold text-white tracking-wide mt-0.5">
                  {timeLeft}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                Secure your scheduling track for entrance interviews. Terminal
                registration payments run safely via Flutterwave integrations.
              </p>
              <Link
                href="/admissions/apply"
                className="w-full bg-primary hover:bg-primary/95 text-white font-sans font-bold py-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Apply Now for Session</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
