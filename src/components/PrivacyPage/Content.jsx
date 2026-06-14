"use client";

import React from "react";
import { Eye, Lock, RefreshCw } from "lucide-react";

export default function PrivacyContent() {
  return (
    <section className="w-full bg-slate-50 dark:bg-background text-foreground py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: Quick Summary Highlights Panel (4 Columns) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 rounded-3xl p-6 shadow-sm text-left flex flex-col gap-5">
            <h3 className="font-heading text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <span>Our Core Promises</span>
            </h3>

            <div className="space-y-4 font-sans text-xs md:text-sm">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-slate-50 dark:bg-background rounded-xl text-primary mt-0.5">
                  <Eye size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-200">
                    Total Transparency
                  </h4>
                  <p className="text-muted-foreground font-light text-xs mt-0.5">
                    We never hide terms or sell student info data points to
                    brokers.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-slate-50 dark:bg-background rounded-xl text-primary mt-0.5">
                  <Lock size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-200">
                    Strict Safety Control
                  </h4>
                  <p className="text-muted-foreground font-light text-xs mt-0.5">
                    All banking, verification codes, and phone files are
                    encrypted.
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
              1. Information We Collect
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              When you use our school portal, library, or shop checkout, we ask
              for simple identification parameters to make things run smoothly.
              This includes your **Full Name**, **Email Address**, and **Phone
              Number**. We collect these only when you fill out forms or run
              transaction payments manually.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              2. How We Use Your Data
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              We do not abuse your private files. We use your details strictly
              to:
            </p>
            <ul className="list-disc list-inside text-xs md:text-sm text-slate-600 dark:text-zinc-400 space-y-1.5 pl-2 font-normal">
              <li>
                Process store orders and send automated confirmation product
                receipts.
              </li>
              <li>
                Deliver digital download manuals, past question answer bundles,
                and access badges.
              </li>
              <li>
                Notify you regarding immediate changes to sports schedules or
                open-day cancellations.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              3. Secure Financial Payments
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              All payment parameters are locked down safely. When you use credit
              cards or banking transfers, the transactions run entirely inside
              the **Flutterwave Payment Gateway**. HIGH-ER Enterprises never
              views, copies, or stores your raw card pins or bank credentials on
              our local servers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              4. Your Personal Rights
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-light">
              You own your data files completely. At any single moment, you have
              the right to contact our admin desk and request that we delete
              your phone, account history, or email logs from our systems
              entirely. We respect your instructions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
