"use client";

import React, { useState } from "react";
import { GraduationCap, Award } from "lucide-react";

export default function GradesPanel({ currentLevel }) {
  const [level, setLevel] = useState(currentLevel || "SSS 1");
  const [term, setTerm] = useState("1st Term");

  const mockGrades = [
    {
      subject: "Mathematics & Computations",
      ca1: 18,
      ca2: 17,
      exam: 54,
      total: 89,
      grade: "A1",
    },
    {
      subject: "Physics & Kinetic Systems",
      ca1: 15,
      ca2: 16,
      exam: 48,
      total: 79,
      grade: "B2",
    },
    {
      subject: "English Language & Rhetoric",
      ca1: 14,
      ca2: 15,
      exam: 45,
      total: 74,
      grade: "B3",
    },
    {
      subject: "Web Programming Basics (SaaS Hub)",
      ca1: 20,
      ca2: 19,
      exam: 58,
      total: 97,
      grade: "A1",
    },
  ];

  return (
    <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 p-8 rounded-2xl shadow-sm text-left space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-slate-100 dark:border-zinc-800">
        <div>
          <h2 className="font-heading text-lg font-black text-slate-900 dark:text-white">
            Grading Analytics Ledger
          </h2>
          <p className="text-xs text-muted-foreground font-light mt-0.5">
            Filter terminal reports to trace performance matrices across cycles.
          </p>
        </div>

        <div className="flex items-center gap-2 font-sans text-xs">
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="px-3 py-1.5 bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl outline-none text-foreground font-semibold"
          >
            <option value="JSS 1">JSS 1</option>
            <option value="JSS 2">JSS 2</option>
            <option value="SSS 1">SSS 1</option>
            <option value="SSS 2">SSS 2</option>
          </select>
          <select
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="px-3 py-1.5 bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl outline-none text-foreground font-semibold"
          >
            <option value="1st Term">1st Term</option>
            <option value="2nd Term">2nd Term</option>
            <option value="3rd Term">3rd Term</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto font-sans text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-background border-b border-slate-200 dark:border-zinc-800 uppercase text-[10px] font-bold text-muted-foreground tracking-wider">
              <th className="p-4">Subject</th>
              <th className="p-4">CA 1 (20)</th>
              <th className="p-4">CA 2 (20)</th>
              <th className="p-4">Exam (60)</th>
              <th className="p-4">Total (100)</th>
              <th className="p-4 text-center">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60 text-slate-700 dark:text-zinc-300">
            {mockGrades.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/30"
              >
                <td className="p-4 font-bold text-slate-900 dark:text-white">
                  {row.subject}
                </td>
                <td className="p-4 font-mono">{row.ca1}</td>
                <td className="p-4 font-mono">{row.ca2}</td>
                <td className="p-4 font-mono">{row.exam}</td>
                <td className="p-4 font-mono font-bold text-primary">
                  {row.total}
                </td>
                <td className="p-4 text-center font-bold font-mono">
                  <span className="px-2 py-1 rounded bg-primary/5 dark:bg-primary/20 text-primary border border-primary/10">
                    {row.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
