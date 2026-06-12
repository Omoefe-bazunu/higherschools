import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  MapPin,
  ChevronRight,
  Home,
  ShieldAlert,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

// Localized registry mapping to your exact numerical IDs
const eventsRegistry = {
  1: {
    title: "Inter-House Sports Festival",
    category: "Sports & Culture",
    date: "24",
    month: "OCT",
    year: "2026",
    time: "08:00 AM WAT",
    location: "National Stadium Track",
    status: "Student",
    image: "/events/event1.jpg",
    desc: "Our highly anticipated annual track, field, and cultural drill competitions are engineered to foster healthy sportsmanship, resilience, and deep cross-house teamwork. This event brings together students, faculty, and families for a day of peak athletic excellence.",
    schedule: [
      {
        time: "08:00 AM",
        task: "Opening March Past & Torch Lighting ceremony",
      },
      { time: "09:30 AM", task: "Track Events (100m, 200m, 4x100m Relays)" },
      { time: "12:30 PM", task: "Interval & Cultural Drill Presentations" },
      { time: "02:00 PM", task: "Medal Trophy Ceremony & Closing Remarks" },
    ],
  },
  2: {
    title: "PTA Open-Day Conference",
    category: "Parent-Teacher",
    date: "07",
    month: "NOV",
    year: "2026",
    time: "10:00 AM WAT",
    location: "School Assembly Hall",
    status: "Parent",
    image: "/events/event2.jpg",
    desc: "A dedicated collaborative framework session for parents and guardians to review terminal performance metrics, interface directly with course educators, and align strategic development goals for student welfare and character development.",
    schedule: [
      { time: "10:00 AM", task: "Welcome Address & Academic Roadmap Review" },
      { time: "11:00 AM", task: "One-on-One Parent-Teacher Academic Audits" },
      {
        time: "01:30 PM",
        task: "Open Floor Feedback & Portal Enhancement Sync",
      },
    ],
  },
  3: {
    title: "Creative Arts & Music Gala",
    category: "Sports & Culture",
    date: "12",
    month: "DEC",
    year: "2026",
    time: "04:00 PM WAT",
    location: "Main Auditorium",
    status: "All",
    image: "/events/event3.jpg",
    desc: "Celebrating creative expression through orchestral performances, stage plays, and fine art gallery exhibitions. Our students showcase their artistic and musical talents developed throughout the semester in an elegant cultural evening.",
    schedule: [
      { time: "04:00 PM", task: "Art Gallery Exhibition & Red Carpet Welcome" },
      { time: "05:00 PM", task: "Orchestral Performances & Classical Solos" },
      { time: "06:30 PM", task: "Drama Club Stage Play Presentation" },
      { time: "07:30 PM", task: "Closing Curtains & Vote of Thanks" },
    ],
  },
  4: {
    title: "Inter-School Debate Championship",
    category: "Academic & Tech",
    date: "18",
    month: "JAN",
    year: "2027",
    time: "09:00 AM WAT",
    location: "Conference Hall B",
    status: "Student",
    image: "/events/events4.jpg",
    desc: "HigherSchools proudly hosts elite regional academic institutions for an intellectual discourse on global economic policies. Watch top debaters analyze complex issues and exhibit sharp critical thinking, public speaking, and rhetorical skill.",
    schedule: [
      { time: "09:00 AM", task: "Registration & Debater Briefing Session" },
      { time: "09:45 AM", task: "Preliminary Rounds & Elimination Matches" },
      { time: "01:00 PM", task: "Grand Finale Debates & Knockout Stage" },
      { time: "02:30 PM", task: "Awards Declaration & Keynote Address" },
    ],
  },
};

// Next.js 15 Async metadata resolution handler
export async function generateMetadata({ params }) {
  const resolvedParams = await params; // ◄ Await the parameters promise
  const event = eventsRegistry[resolvedParams.id];

  return {
    title: event ? `${event.title} | HigherSchools` : "Event Details",
    description: event ? event.desc : "View upcoming campus event schedules.",
  };
}

// Next.js 15 Async main render layout engine
export default async function EventSlugPage({ params }) {
  const resolvedParams = await params; // ◄ Await the parameters promise
  const event = eventsRegistry[resolvedParams.id];

  // Route protection gate handler
  if (!event) {
    notFound();
  }

  return (
    <section className="w-full bg-slate-50 dark:bg-background min-h-screen text-foreground pt-12 transition-colors duration-300">
      {/* Dynamic Sub-Header Canvas */}
      <div className="w-full bg-white dark:bg-card border-b border-slate-200 dark:border-zinc-800/80 py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-4">
          {/* Internal Navigation Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium text-muted-foreground">
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Home size={14} /> <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-slate-300 shrink-0" />
            <Link
              href="/events"
              className="hover:text-primary transition-colors"
            >
              Events
            </Link>
            <ChevronRight size={14} className="text-slate-300 shrink-0" />
            <span className="text-slate-900 dark:text-white font-semibold truncate max-w-[200px] md:max-w-none">
              {event.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Details Structural Section Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN: Media Cover & In-Depth Details (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Portrait Framed Image Layer Mask Frame */}
          <div className="w-full h-[320px] md:h-[400px] relative rounded-3xl overflow-hidden shadow-md border border-slate-200/50 dark:border-zinc-800/80">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>

          {/* Context Content Description Text Box */}
          <div className="flex flex-col gap-4 bg-white dark:bg-card p-8 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-sm text-left">
            <span className="w-fit px-3 py-1 bg-primary/5 dark:bg-primary/20 text-primary font-sans text-xs font-bold uppercase tracking-wider rounded-md">
              About The Event
            </span>
            <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Detailed Briefing
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              {event.desc}
            </p>
          </div>

          {/* Operational Program Schedule Timeline Stack */}
          {event.schedule && (
            <div className="flex flex-col gap-5 bg-white dark:bg-card p-8 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-sm text-left">
              <h3 className="font-heading text-xl font-black text-slate-900 dark:text-white tracking-tight">
                Order of Program Sequence
              </h3>
              <div className="flex flex-col border-l-2 border-slate-100 dark:border-zinc-800 pl-4 ml-2 gap-6 font-sans mt-2">
                {event.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6"
                  >
                    {/* Ring Indicator Point node */}
                    <div className="absolute left-[-23px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-card" />
                    <span className="text-xs font-bold text-primary shrink-0 font-mono w-24">
                      {item.time}
                    </span>
                    <span className="text-sm font-medium text-slate-700 dark:text-zinc-300">
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Quick Sticky Parameters & Booking Form (5 Columns) */}
        <div className="lg:col-span-5 w-full lg:sticky lg:top-24 flex flex-col gap-6">
          {/* Metadata Fact Sheet Information Card */}
          <div className="w-full bg-white dark:bg-card p-8 rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-xl shadow-slate-200/20 dark:shadow-none text-left flex flex-col gap-6">
            <div className="flex gap-4 items-center border-b border-slate-100 dark:border-zinc-800/60 pb-5">
              <div className="flex flex-col bg-slate-900 text-white rounded-2xl p-3 items-center min-w-[65px] shrink-0 font-heading">
                <span className="text-lg font-black leading-none">
                  {event.date}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1 text-secondary">
                  {event.month}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <h1 className="font-heading text-xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  {event.title}
                </h1>
                <span className="text-[11px] font-sans font-bold text-secondary uppercase tracking-wider">
                  {event.status} Target
                </span>
              </div>
            </div>

            {/* Micro Parameters Layout Grid */}
            <div className="flex flex-col gap-4 font-sans text-xs md:text-sm text-slate-600 dark:text-zinc-400">
              <div className="flex gap-3 items-start">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-200 text-xs uppercase tracking-wider mb-0.5">
                    Execution Time
                  </h4>
                  <p className="font-light">{event.time}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-200 text-xs uppercase tracking-wider mb-0.5">
                    Venue Location
                  </h4>
                  <p className="font-light leading-relaxed">{event.location}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <ShieldAlert
                  size={16}
                  className="text-primary mt-0.5 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-200 text-xs uppercase tracking-wider mb-0.5">
                    Admittance Guardrails
                  </h4>
                  <p className="font-light">
                    Guest pass configuration code required upon point entry
                    clearance verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Form Conversion Gateway */}
            <div className="pt-2 border-t border-slate-100 dark:border-zinc-800/60 flex flex-col gap-3">
              <button className="w-full bg-primary hover:bg-primary/95 text-white font-sans font-bold py-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
                <CheckCircle size={16} />
                <span>Confirm My Attendance</span>
              </button>
              <p className="text-[11px] text-center font-sans text-muted-foreground leading-relaxed">
                Need verification support? Get in touch with our{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:underline font-medium"
                >
                  campus admissions desk
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
