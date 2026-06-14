"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Key, ArrowRight, ShieldAlert, Home, ArrowLeft } from "lucide-react";

export default function PortalLoginPage() {
  const [studentId, setStudentId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGateAuthentication = (e) => {
    e.preventDefault();
    setError("");

    // Fetch the registry submission token from local storage keys
    const rawApp = localStorage.getItem("higher_admission_app");
    const parsedApp = rawApp ? JSON.parse(rawApp) : null;

    if (!studentId.trim()) {
      return setError("Please enter an official clearance access code.");
    }

    // Validation Check: Match against local session parameters
    if (parsedApp && parsedApp.studentId === studentId.trim()) {
      // Establish valid temporary authorization token track
      localStorage.setItem("portal_session_auth", JSON.stringify(parsedApp));
      router.push("/portal"); // Route straight to student workspace environment!
    } else if (studentId.trim() === "HS-2026-DEMO") {
      // Fallback fallback track for instant testing review profiles
      const demoUser = {
        name: "Omoefe Bazunu",
        email: "efe@higher.com",
        phone: "+234803000",
        gender: "Male",
        dob: "2012-04-12",
        level: "SSS 1",
        status: "Admitted",
        studentId: "HS-2026-DEMO",
      };
      localStorage.setItem("portal_session_auth", JSON.stringify(demoUser));
      router.push("/portal");
    } else {
      setError(
        "Invalid Student ID token code. Please crosscheck your approved admission email layout.",
      );
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-background flex flex-col justify-between text-foreground font-sans">
      {/* Mini Breadcrumb bar */}
      <div className="w-full max-w-md mx-auto pt-10 px-6">
        <Link
          href="/admissions"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary font-bold transition-colors"
        >
          <ArrowLeft size={14} /> Back to Admissions
        </Link>
      </div>

      {/* Access Gate Input Matrix Panel */}
      <main className="max-w-md w-full mx-auto px-6 py-12 flex-grow flex items-center justify-center">
        <div className="w-full bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 rounded-3xl p-8 shadow-xl text-left space-y-6">
          <div className="space-y-1.5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
              <Key size={20} />
            </div>
            <h2 className="font-heading text-xl font-black text-slate-900 dark:text-white tracking-tight">
              Portal Clearance Entry
            </h2>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Input the unique Student ID code sent to your parent registration
              email address when your admission batch file was cleared.
            </p>
          </div>

          <form onSubmit={handleGateAuthentication} className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="student-id-field"
                className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider"
              >
                Official Student ID Code
              </label>
              <input
                id="student-id-field"
                type="text"
                placeholder="e.g., HS-2026-4821"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-mono tracking-wide outline-none text-foreground focus:border-primary"
              />
            </div>

            {error && (
              <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-xl text-xs text-rose-600 dark:text-rose-400 flex gap-2 items-start leading-normal">
                <ShieldAlert size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full h-11 bg-slate-900 hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
            >
              <span>Verify Access Clearance</span>
              <ArrowRight size={14} />
            </button>
          </form>

          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-center">
            <p className="text-[10px] text-slate-400 font-semibold tracking-wide uppercase">
              💡 Testing Sandbox Code:{" "}
              <span className="text-primary font-mono select-all">
                HS-2026-DEMO
              </span>
            </p>
          </div>
        </div>
      </main>

      {/* Mini Footer Spacer */}
      <footer className="py-6 text-center text-xs text-muted-foreground">
        &copy; 2026 HIGH-ER Enterprises School Ecosystem.
      </footer>
    </div>
  );
}
