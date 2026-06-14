import React from "react";
import { BookOpen, ShieldCheck, Clock } from "lucide-react";

const rules = [
  {
    number: "01",
    icon: BookOpen,
    iconBg: "bg-primary/10 dark:bg-primary/20 text-primary",
    tag: "Borrowing",
    title: "Borrowing Limits",
    body: "Students may borrow up to 2 physical books at a time for a 14-day home-study window. Extensions must be requested in person before the due date.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    iconBg: "bg-secondary/10 dark:bg-secondary/20 text-secondary",
    tag: "Digital Access",
    title: "Virtual Reading Room",
    body: "Registered students access interactive exam sets, e-journals, and digital simulations remotely via their campus portal passphrase at any time.",
  },
  {
    number: "03",
    icon: Clock,
    iconBg:
      "bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
    tag: "Policy",
    title: "Return & Overdue",
    body: "Late returns result in temporary borrowing suspension or replacement processing fees to keep circulation healthy for all students.",
  },
];

export default function LibraryOperations() {
  return (
    <section className="w-full bg-white dark:bg-card py-24 text-foreground border-t border-slate-100 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary font-sans">
                Operational Guidelines
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Lending Rules & <span className="text-primary">Support.</span>
              </h2>
            </div>
          </div>
          <div>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light max-w-sm ">
              Guidelines designed to maintain resource availability, ensure fair
              sharing, and protect campus inventory.
            </p>
          </div>
        </div>

        {/* Rules */}
        <div className="flex flex-col divide-y divide-slate-100 dark:divide-zinc-800/80">
          {rules.map((rule, i) => {
            const Icon = rule.icon;
            return (
              <div
                key={i}
                className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_200px] gap-6 md:gap-10 py-8 md:py-10 items-start md:items-center hover:bg-slate-50/60 dark:hover:bg-zinc-900/30 transition-colors duration-200 px-2 -mx-2 rounded-xl"
              >
                {/* Number */}
                <span className="font-mono text-4xl font-black text-slate-100 dark:text-zinc-800 group-hover:text-primary/20 transition-colors leading-none select-none">
                  {rule.number}
                </span>

                {/* Icon + Tag */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-11 h-11 flex items-center justify-center rounded-2xl shrink-0 ${rule.iconBg}`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-sans">
                      {rule.tag}
                    </span>
                    <h3 className="font-heading text-base font-black text-slate-900 dark:text-white leading-tight">
                      {rule.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <p className="font-sans text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                  {rule.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
