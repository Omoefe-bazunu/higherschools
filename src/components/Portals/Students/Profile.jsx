"use client";

import React from "react";
import { User, ShieldCheck } from "lucide-react";

export default function ProfilePanel({ studentData }) {
  // Fallback fallback track for instant testing review profiles
  const profile = studentData || {
    name: "Omoefe Bazunu",
    studentId: "HS-2026-DEMO",
    email: "efe@higherenterprises.com",
    phone: "+234 803 000 0000",
    dob: "2012-04-12",
    gender: "Male",
    level: "SSS 1",
  };

  return (
    <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 p-8 rounded-2xl shadow-sm text-left space-y-6 animate-in fade-in duration-300">
      <div className="border-b pb-3 border-slate-100 dark:border-zinc-800">
        <h2 className="font-heading text-lg font-black text-slate-900 dark:text-white">
          Personal Profile Parameters
        </h2>
        <p className="text-xs text-muted-foreground font-light mt-0.5">
          Verified structural credentials registered during public enrollment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans text-xs md:text-sm">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Full Scholar Name
          </span>
          <p className="p-3 bg-slate-50 dark:bg-background border rounded-xl font-medium text-slate-800 dark:text-zinc-200">
            {profile.name}
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Assigned Identity Code
          </span>
          <p className="p-3 bg-slate-50 dark:bg-background border rounded-xl font-mono font-bold text-primary">
            {profile.studentId}
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Parent Contact Email
          </span>
          <p className="p-3 bg-slate-50 dark:bg-background border rounded-xl text-slate-700 dark:text-zinc-300">
            {profile.email}
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Contact Phone Track
          </span>
          <p className="p-3 bg-slate-50 dark:bg-background border rounded-xl text-slate-700 dark:text-zinc-300">
            {profile.phone}
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Date of Birth
          </span>
          <p className="p-3 bg-slate-50 dark:bg-background border rounded-xl text-slate-700 dark:text-zinc-300">
            {profile.dob}
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Gender Orientation
          </span>
          <p className="p-3 bg-slate-50 dark:bg-background border rounded-xl text-slate-700 dark:text-zinc-300">
            {profile.gender}
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Current Placement Class
          </span>
          <p className="p-3 bg-slate-50 dark:bg-background border rounded-xl font-bold text-secondary">
            {profile.level}
          </p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Assigned Library ID Token
          </span>
          <p className="p-3 bg-slate-50 dark:bg-background border rounded-xl font-mono text-slate-700 dark:text-zinc-300">
            LIB-2026-{profile.studentId.split("-")[2]}
          </p>
        </div>
      </div>
    </div>
  );
}
