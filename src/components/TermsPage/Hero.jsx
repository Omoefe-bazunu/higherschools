"use client";

import Link from "next/link";
import { ChevronRight, Home, FileText } from "lucide-react";

export default function TermsHeader() {
  return (
    <section className="relative w-full h-[45vh] min-h-[320px] flex flex-col items-center justify-center text-center overflow-hidden pt-16">
      {/* Immersive Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/terms.jpg')`, // Save your generated asset with this filename
        }}
      >
        {/* Deep Semi-Transparent Dark Overlay for Perfect Text Contrast */}
        <div className="absolute inset-0 bg-slate-950/80 dark:bg-slate-950/90" />
      </div>

      {/* Centered Content Block */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-4 text-white">
        {/* Centered Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium text-white/60 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm animate-in fade-in slide-in-from-top-3 duration-500">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>

          <ChevronRight size={14} className="text-white/30 shrink-0" />

          <span className="text-white font-semibold">Terms & Conditions</span>
        </nav>

        {/* Impactful Centered Title Header */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mt-2 animate-in fade-in slide-in-from-bottom-4 duration-600">
          Rules & Service <span className="text-secondary">Agreement.</span>
        </h1>

        {/* Simple Supportive Tagline */}
        <p className="font-sans text-sm md:text-base text-slate-300 max-w-xl font-light leading-relaxed animate-in fade-in duration-700">
          Please read the simple guidelines that manage your usage of our school
          portal, digital library, and store resources.
        </p>
      </div>
    </section>
  );
}
