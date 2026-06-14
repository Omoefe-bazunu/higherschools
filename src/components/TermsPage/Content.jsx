"use client";

import React from "react";
import { FileText, HelpCircle, Scale, RefreshCw } from "lucide-react";

export default function TermsContent() {
  return (
    <section className="w-full bg-slate-50 dark:bg-background text-foreground py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: Quick Summary Highlights Panel (4 Columns) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-white dark:bg-card p-6 border border-slate-200/60 dark:border-zinc-800/80 rounded-3xl shadow-sm text-left flex flex-col gap-5">
            <h3 className="font-heading text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <Scale className="text-primary" size={20} />
              <span>Quick Agreement</span>
            </h3>

            <div className="space-y-4 font-sans text-xs md:text-sm">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-slate-50 dark:bg-background rounded-xl text-primary mt-0.5">
                  <FileText size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-200">
                    Fair Usage
                  </h4>
                  <p className="text-muted-foreground font-light text-xs mt-0.5">
                    Resources are strictly for student learning and personal
                    development.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-slate-50 dark:bg-background rounded-xl text-primary mt-0.5">
                  <HelpCircle size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-200">
                    Got Questions?
                  </h4>
                  <p className="text-muted-foreground font-light text-xs mt-0.5">
                    Reach out to HIGH-ER Enterprises if any rule seems unclear.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-slate-100 dark:border-zinc-800/60" />

            <p className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5 justify-center">
              <RefreshCw size={12} className="animate-spin-slow" />
              <span>Last Updated: June 2026</span>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Clear Plain-Language Clauses (8 Columns) */}
        <div className="lg:col-span-8 bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 p-8 md:p-10 rounded-3xl shadow-sm text-left space-y-8 font-sans">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              By accessing this website, purchasing from our store, or
              downloading material from our library, you agree to follow these
              simple rules. If you do not agree with any part of these terms,
              please stop using our digital services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              2. Account Registration & Safety
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              When creating an account on our platform, you are responsible for
              maintaining the safety of your login credentials. You must provide
              true, current, and complete information. Any suspicious behavior
              on your account should be reported to our school administration
              desk immediately.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              3. Intellectual Property Rights
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              All learning material, digital answer bundles, laboratory guides,
              graphics, logos, and custom code modules available on this
              platform belong to **HIGH-ER Enterprises**. You may download
              digital guides for your personal educational use, but you are not
              allowed to resell, copy, or redistribute our materials for
              commercial gain.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              4. Purchases & Refund Policies
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              We try our best to ensure all product items are priced correctly.
              Digital downloads are delivered immediately upon successful
              payment verification. Due to the instant delivery nature of
              digital e-books and past video solutions, all digital sales are
              final and non-refundable unless a technical file defect prevents
              access.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              5. Changes to This Agreement
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              HIGH-ER Enterprises reserves the right to modify these guidelines
              at any point to match new portal updates or legal standards. We
              will notify users of any major policy updates by adding a
              prominent notification alert on our website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
