"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const steps = [
  {
    title: "Smart Learning Spaces",
    desc: "Our bright, air-conditioned classrooms are fully equipped with smart boards and modern learning tools to make every lesson exciting and clear.",
  },
  {
    title: "Well-Furnished Library",
    desc: "A calm, spacious room filled with a massive collection of the latest textbooks, storybooks, and digital research materials for all ages.",
  },
  {
    title: "Practical Science Labs",
    desc: "Modern chemistry, physics, and biology laboratories built for hands-on experiments so students can practice exactly what they learn.",
  },
  {
    title: "Sports Facilities",
    desc: "Excellent green playing fields and courts where students discover sports talents, stay active, and build team spirit safely outside the classroom.",
  },
  {
    title: "Innovation Hubs",
    desc: "Creative workspaces designed for collaborative projects, robotic engineering, and technological discovery to prepare students for a global future.",
  },
];

const WhatWeOffer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [slideWidth, setSlideWidth] = useState(100);
  const [paused, setPaused] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const update = () => setSlideWidth(window.innerWidth < 768 ? 100 : 33.33);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="what-we-offer"
      className="py-20 bg-primary text-white overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image faded in */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/home/schoolbg.jpg')" }}
      />

      {/* Primary color overlay to preserve brand bg */}
      <div className="absolute inset-0 z-0 bg-primary/70 dark:bg-slate-950/70" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-5 blur-[120px] z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-secondary mb-4">
            <span className="uppercase tracking-[0.2em] font-bold text-sm">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight">
            Everything Your Child Needs to{" "}
            <span className="text-secondary">Excel.</span>
          </h2>
        </div>

        {/* Stepper Track */}
        <div className="relative overflow-hidden -mx-4 px-4">
          <motion.div
            className="flex"
            animate={{ x: `-${currentStep * slideWidth}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {steps.map((step, index) => (
              <div key={index} className="min-w-[100%] md:min-w-[33.33%] px-4">
                <div
                  className={`relative p-8 rounded-2xl border transition-all duration-500 h-full flex flex-col ${
                    currentStep === index
                      ? "bg-white/5 border-white shadow-2xl shadow-secondary/10"
                      : "bg-transparent border-white/10 opacity-40"
                  }`}
                >
                  <div className="flex justify-between items-center mb-8">
                    <span
                      className={`text-5xl font-heading font-black transition-colors ${
                        currentStep === index
                          ? "text-secondary"
                          : "text-white/10"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    {index < currentStep && (
                      <div className="bg-secondary/20 p-2 rounded-full">
                        <Check className="text-secondary" size={20} />
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-heading font-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              suppressHydrationWarning
              className={`transition-all duration-300 rounded-full ${
                currentStep === index
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-white mb-8 font-sans">
            Give your child access to a vibrant community built for absolute
            growth.
          </p>
          {user ? (
            <Link
              href="/dashboard"
              className="bg-secondary text-white hover:bg-secondary/90 font-sans font-bold rounded-full px-12 py-4 hover:scale-105 transition-transform inline-block"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/auth/admissions"
              className="bg-secondary text-white hover:bg-secondary/90 font-sans font-bold rounded-full px-12 py-4 hover:scale-105 transition-transform inline-block"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
