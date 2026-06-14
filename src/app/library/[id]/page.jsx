import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Download,
  Smartphone,
  HardDrive,
  ArrowLeft,
  CheckCircle,
  User,
  Bookmark,
  HelpCircle,
  Home,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// Localized resource directory mapping to your exact numerical grid IDs
const libraryRegistry = {
  1: {
    title: "Fundamentals of Physics",
    author: "Dr. A. B. Balogun",
    subject: "Core Academics",
    medium: "Physical",
    meta: "Shelf 2A · Available to Borrow",
    image: "/library/book1.jpg",
    desc: "A comprehensive analytical textbook detailing quantum mechanics, thermodynamics, and standard kinematics equations. This version includes step-by-step breakdowns of regional examination criteria, practical lab experiments, and advanced problem-solving tracks designed for senior secondary scholars.",
    specifications: [
      { label: "Format", value: "Hardcover Textbook" },
      { label: "Pages", value: "542 Pages" },
      { label: "Edition", value: "2025 Revised Edition" },
      { label: "Publisher", value: "HigherSchools Press" },
    ],
  },
  2: {
    title: "Introduction to JavaScript & React",
    author: "Tariq Musa",
    subject: "Tech & Coding",
    medium: "Digital",
    meta: "PDF Format · 14.2 MB Download",
    image: "/library/book2.jpg",
    desc: "The complete coding manual used inside our innovation hub labs for building fast, modern state-driven web applications. Students will learn the essentials of JavaScript ES6+, functional components, hooks, asynchronous data streams, and Tailwind CSS layouts.",
    specifications: [
      { label: "Format", value: "Digital E-Book (PDF)" },
      { label: "File Size", value: "14.2 MB" },
      { label: "Language", value: "JavaScript / React 19" },
      { label: "Access", value: "Immediate Portal Download" },
    ],
  },
  3: {
    title: "WAEC Past Questions: 2021-2025",
    author: "HigherSchools Council",
    subject: "Exam Prep",
    medium: "Digital",
    meta: "Interactive CBT Module Access",
    image: "/library/book3.jpg",
    desc: "An exhaustive collection of verified regional past question banks complete with comprehensive answers and structural solution breakdowns. Includes real testing environments to simulate Computer Based Tests (CBT) for Mathematics, English, Physics, and Chemistry.",
    specifications: [
      { label: "Format", value: "Interactive CBT Software" },
      { label: "Coverage", value: "Years 2021 - 2025" },
      { label: "Subjects", value: "9 Core Secondary Subjects" },
      { label: "Access", value: "Web App Portal Integration" },
    ],
  },
  4: {
    title: "Robotics & Machine Basics",
    author: "Prof. Chinedu Obi",
    subject: "Tech & Coding",
    medium: "Physical",
    meta: "Lab 3 Cabinet B · In-use",
    image: "/library/book4.jpg",
    desc: "A practical guide to assembling automated micro-controllers, testing circuitry blocks, and compiling simple C++ logic script tracks. This manual accompanies the junior engineering lab curriculum blocks, focusing on sensory feedback loops and robotic locomotion.",
    specifications: [
      { label: "Format", value: "Spiral-bound Lab Manual" },
      { label: "Pages", value: "188 Pages" },
      { label: "Equipment", value: "Arduino & Raspberry Pi Kits" },
      { label: "Publisher", value: "HigherSchools STEM Guild" },
    ],
  },
};

// Next.js 15+ Async metadata resolution handler
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const resource = libraryRegistry[resolvedParams.id];

  return {
    title: resource
      ? `${resource.title} | HigherSchools Library`
      : "Resource Details",
    description: resource ? resource.desc : "Access school learning resources.",
  };
}

// Next.js 15+ Async main render layout engine
export default async function LibrarySlugPage({ params }) {
  const resolvedParams = await params;
  const resource = libraryRegistry[resolvedParams.id];

  // Route protection gate handler
  if (!resource) {
    notFound();
  }

  return (
    <section className="w-full bg-slate-50 dark:bg-background min-h-screen text-foreground pt-12 transition-colors duration-300">
      {/* Sub-Header Breadcrumb Area */}
      <div className="w-full bg-white dark:bg-card border-b border-slate-200 dark:border-zinc-800/80 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-3">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium text-muted-foreground">
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Home size={14} /> <span>Home</span>
            </Link>
            <ChevronLeft size={14} className="text-slate-300 shrink-0" />
            <Link
              href="/library"
              className="hover:text-primary transition-colors"
            >
              Library
            </Link>
            <ChevronRight size={14} className="text-slate-300 shrink-0" />
            <span className="text-slate-900 dark:text-white font-semibold truncate max-w-[200px] md:max-w-none">
              {resource.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Structural Layout Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN: Book Cover & In-Depth Content Manuals (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Framed Book Mockup Window Frame */}
          <div className="w-full h-[340px] md:h-[420px] relative rounded-3xl overflow-hidden shadow-md border border-slate-200/50 dark:border-zinc-800/80 bg-slate-900">
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
          </div>

          {/* Book Briefing Box */}
          <div className="flex flex-col gap-4 bg-white dark:bg-card p-8 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-sm text-left">
            <span className="w-fit px-3 py-1 bg-primary/5 dark:bg-primary/20 text-primary font-sans text-xs font-bold uppercase tracking-wider rounded-md">
              Resource Synopsis
            </span>
            <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Detailed Description
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              {resource.desc}
            </p>
          </div>

          {/* Technical Specifications Sheet */}
          <div className="flex flex-col gap-4 bg-white dark:bg-card p-8 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-sm text-left">
            <h3 className="font-heading text-xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
              Resource Metadata Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm">
              {resource.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-zinc-800/60"
                >
                  <span className="text-muted-foreground font-light">
                    {spec.label}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sticky Reservation & Action Control Widgets (5 Columns) */}
        <div className="lg:col-span-5 w-full lg:sticky lg:top-24 flex flex-col gap-6">
          <div className="w-full bg-white dark:bg-card p-8 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-xl shadow-slate-200/20 dark:shadow-none text-left flex flex-col gap-6">
            {/* Header Block inside Card */}
            <div className="flex gap-4 items-start border-b border-slate-100 dark:border-zinc-800/60 pb-5">
              <div
                className={`p-3 rounded-2xl shrink-0 text-white ${
                  resource.medium === "Digital" ? "bg-primary" : "bg-secondary"
                }`}
              >
                {resource.medium === "Digital" ? (
                  <Smartphone size={24} />
                ) : (
                  <BookOpen size={24} />
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold font-sans text-secondary uppercase tracking-wider">
                  {resource.subject}
                </span>
                <h1 className="font-heading text-xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  {resource.title}
                </h1>
                <p className="font-sans text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                  <User size={12} /> By {resource.author}
                </p>
              </div>
            </div>

            {/* Quick Status Parameters */}
            <div className="flex flex-col gap-4 font-sans text-xs md:text-sm text-slate-600 dark:text-zinc-400">
              <div className="flex gap-3 items-start">
                <Bookmark size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-200 text-xs uppercase tracking-wider mb-0.5">
                    Lending Status & Storage
                  </h4>
                  <p className="font-light">{resource.meta}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <HelpCircle
                  size={16}
                  className="text-primary mt-0.5 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-200 text-xs uppercase tracking-wider mb-0.5">
                    Who Is This For?
                  </h4>
                  <p className="font-light leading-relaxed">
                    Registered senior secondary students and corresponding
                    subject instructors.
                  </p>
                </div>
              </div>
            </div>

            {/* Contextual Action Button Conversion Trigger */}
            <div className="pt-2 border-t border-slate-100 dark:border-zinc-800/60 flex flex-col gap-3">
              <button
                className={`w-full text-white font-sans font-bold py-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                  resource.medium === "Digital"
                    ? "bg-primary hover:bg-primary/95 shadow-primary/5"
                    : "bg-slate-900 hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                }`}
              >
                <CheckCircle size={16} />
                <span>
                  {resource.medium === "Digital"
                    ? "Download E-Resource Copy"
                    : "Confirm Physical Log Reservation"}
                </span>
              </button>
              <p className="text-[11px] text-center font-sans text-muted-foreground leading-relaxed">
                Physical logs are held at the front desk for 48 hours maximum.
                Need help? Access our{" "}
                <Link
                  href="/library"
                  className="text-primary hover:underline font-medium"
                >
                  library support desk
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
