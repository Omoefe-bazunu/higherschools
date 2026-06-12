"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  Home,
  Ticket,
} from "lucide-react";

export default function EventsHeader() {
  // Target date set for an upcoming flagship event
  const targetDate = new Date("July 15, 2026 09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) return;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white dark:bg-card pt-24 pb-16 text-foreground relative overflow-hidden border-b border-slate-200/50 dark:border-zinc-800/60 transition-colors duration-300">
      {/* Background Micro Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-[0.02] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-12">
        {/* Centered Breadcrumb Paths */}
        <nav className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium text-muted-foreground bg-slate-50 dark:bg-background px-4 py-2 rounded-full border border-slate-200/40 dark:border-zinc-800 w-fit mx-auto md:mx-0">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>
          <ChevronRight
            size={14}
            className="text-slate-300 dark:text-zinc-700 shrink-0"
          />
          <span className="text-slate-900 dark:text-white font-semibold">
            Campus Events
          </span>
        </nav>

        {/* SPLIT HERO SCREEN: Featured Spotlight Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT SIDE: Metadata Copy & Countdown Metrics (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-3">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                Annual Robotics &{" "}
                <span className="text-primary">Tech Expo.</span>
              </h1>
              <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-xl mt-1">
                Join us as our exceptionally bright secondary school students
                display creative engineering solutions, smart home automation
                workflows, and machine learning components built inside our
                campus innovation hubs.
              </p>
            </div>

            {/* Quick Metrics Badge Block */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-slate-600 dark:text-zinc-300 font-sans text-xs md:text-sm border-y border-slate-100 dark:border-zinc-800/60 py-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span>Wednesday, July 15, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span>09:00 AM WAT</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Main Auditorium, Lagos Campus</span>
              </div>
            </div>

            {/* Live Countdown Grid Panels */}
            <div className="flex items-center gap-3 md:gap-4 font-heading">
              {[
                { label: "Days", val: timeLeft.days },
                { label: "Hours", val: timeLeft.hours },
                { label: "Mins", val: timeLeft.minutes },
                { label: "Secs", val: timeLeft.seconds },
              ].map((slot, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-3 md:p-4 bg-slate-50 dark:bg-background border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl min-w-[70px] md:min-w-[85px] shadow-sm"
                >
                  <span className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-none">
                    {slot.val < 10 ? `0${slot.val}` : slot.val}
                  </span>
                  <span className="font-sans text-[10px] uppercase font-bold text-muted-foreground tracking-wider mt-1.5">
                    {slot.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Conversion CTA Trigger */}
            <div className="pt-2">
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-primary/95 text-white font-sans font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-md shadow-primary/5 active:scale-98"
              >
                <Ticket size={16} />
                <span>Reserve Guest Seat</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Dedicated Portrait Photo Window (5 Columns) */}
          <div className="lg:col-span-5 w-full ">
            <div className="w-full h-[460px] rounded-3xl overflow-hidden relative border border-slate-200/40 dark:border-zinc-800/60 shadow-xl shadow-slate-100/50 dark:shadow-none bg-slate-100 dark:bg-zinc-900 group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-103 transition-transform duration-700"
                style={{ backgroundImage: "url('/events/headerbg.jpg')" }}
              />
              <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-slate-950/0 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
