"use client";

import React from "react";
import { CalendarCheck } from "lucide-react";

export default function AttendancePanel() {
  return (
    <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 p-8 rounded-2xl shadow-sm text-left space-y-6 animate-in fade-in duration-300">
      <div className="border-b pb-3 border-slate-100 dark:border-zinc-800">
        <h2 className="font-heading text-lg font-black text-slate-900 dark:text-white">
          Attendance Metrics Record
        </h2>
        <p className="text-xs text-muted-foreground font-light mt-0.5">
          Realtime statistical insights drawn from smart RFID reader systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans">
        <div className="p-5 bg-slate-50 dark:bg-background border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl">
          <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
            Total Calendar Days
          </h4>
          <p className="text-2xl font-black text-slate-900 dark:text-white font-mono mt-1">
            90 Days
          </p>
        </div>
        <div className="p-5 bg-slate-50 dark:bg-background border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl">
          <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
            Present Verification Logs
          </h4>
          <p className="text-2xl font-black text-emerald-600 font-mono mt-1">
            86 Days
          </p>
        </div>
        <div className="p-5 bg-slate-50 dark:bg-background border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl">
          <h4 className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
            Terminal Attendance Rate
          </h4>
          <p className="text-2xl font-black text-primary font-mono mt-1">
            95.5%
          </p>
        </div>
      </div>
    </div>
  );
}
