"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  Key,
  RefreshCw,
} from "lucide-react";
import AdmissionHero from "@/components/Admissions/Hero";
import SimulatedPaymentButton from "@/components/Shared/SimulatedPaymentButton";

export default function ApplicationFormPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "Male",
    dob: "",
    level: "JSS 1",
  });
  const [mockStudentID, setMockStudentID] = useState("");

  const handleInputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePaymentComplete = () => {
    setStep(2); // Instantly advance to Pending UI once our simulation button fires success
    localStorage.setItem(
      "higher_admission_app",
      JSON.stringify({ ...form, status: "Pending Review" }),
    );
  };

  const simulateAdminApproval = () => {
    const generatedID = `HS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setMockStudentID(generatedID);
    localStorage.setItem(
      "higher_admission_app",
      JSON.stringify({ ...form, status: "Admitted", studentId: generatedID }),
    );
    setStep(3);
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-background min-h-screen text-foreground transition-colors duration-300">
      {/* 1. REUSABLE HERO BANNER MODULATED BAR */}
      <AdmissionHero
        title={
          step === 1
            ? "Application Gateway"
            : step === 2
              ? "Review Processing"
              : "Admission Confirmed"
        }
        subtitle="Complete your institutional baseline entries to finalize application protocols."
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* STEP 1: INITIAL DATA COLLECTION WRAPPER */}
        {step === 1 && (
          <div className="bg-white dark:bg-card p-8 md:p-10 border border-slate-200/60 dark:border-zinc-800/80 rounded-3xl shadow-sm text-left grid grid-cols-1 md:grid-cols-2 gap-6">
            <h2 className="col-span-full font-heading text-lg font-black text-slate-900 dark:text-white border-b pb-3 border-slate-100 dark:border-zinc-800">
              Biographical Profile Logs
            </h2>

            <div className="space-y-1 font-sans">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                Student Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Chidi Chukwuma"
                  value={form.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-foreground outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 font-sans">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                Parent Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="parent@example.com"
                  value={form.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-foreground outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 font-sans">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                Contact Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+234 803 123 4567"
                  value={form.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-foreground outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 font-sans">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                Date of Birth
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-foreground outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 font-sans">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                Entry Level Targeted
              </label>
              <select
                name="level"
                value={form.level}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-foreground outline-none"
              >
                <option value="JSS 1">JSS 1 (Junior Secondary)</option>
                <option value="SSS 1">SSS 1 (Senior Secondary)</option>
              </select>
            </div>

            {/* 2. PLUGGING THE REUSABLE PAYMENT WIDGET BUTTON HERE */}
            <div className="col-span-full pt-4 border-t border-slate-100 dark:border-zinc-800">
              <SimulatedPaymentButton
                amount={10000}
                itemLabel="Application Processing Fee"
                onPaymentSuccess={handlePaymentComplete}
              />
            </div>
          </div>
        )}

        {/* STEP 2: SIMULATED ADMISSION PENDING REVIEWS GRAPHIC */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-card p-10 border border-slate-200/60 dark:border-zinc-800/80 rounded-3xl shadow-sm text-center flex flex-col items-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-4 animate-spin-slow">
                <RefreshCw size={24} />
              </div>
              <span className="text-[10px] font-sans font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Admission Status: Pending Review
              </span>
              <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white mt-4 tracking-tight">
                Processing Form Credentials
              </h2>
              <p className="font-sans text-sm text-slate-500 dark:text-zinc-400 mt-2 leading-relaxed font-light max-w-md">
                Application verification runs are processing for{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  {form.name}
                </span>
                . Upon administrative clearance verification, your Student
                access tokens will deploy.
              </p>
            </div>

            {/* Admin Controls Sandbox Toggle Wrapper */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl max-w-2xl mx-auto border border-slate-800 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans">
              <div>
                <h4 className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
                  <ShieldAlert size={14} /> Admin Dashboard Simulator
                </h4>
                <p className="text-[11px] text-slate-400 font-light">
                  Simulate the backend action of an admin reviewing and
                  accepting this application profile entry.
                </p>
              </div>
              <button
                onClick={simulateAdminApproval}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors shrink-0"
              >
                Approve Applicant →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: SUCCESS MERIT ENTRY CONFIRMED STATE */}
        {step === 3 && (
          <div className="bg-white dark:bg-card p-10 border border-slate-200/60 dark:border-zinc-800/80 rounded-3xl shadow-xl max-w-2xl mx-auto text-center flex flex-col items-center animate-in zoom-in-95 duration-400">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 size={28} />
            </div>
            <span className="text-[10px] font-sans font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Admission Status: Admitted
            </span>
            <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white mt-4 tracking-tight">
              Congratulations!
            </h2>

            <div className="w-full max-w-md bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 p-5 rounded-2xl text-left my-6 space-y-2 font-sans text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-zinc-800">
                <span className="text-muted-foreground">
                  Assigned Student ID Code:
                </span>
                <span className="font-mono font-bold text-primary flex items-center gap-1 bg-primary/5 px-2 py-0.5 rounded border border-primary/20">
                  <Key size={12} /> {mockStudentID}
                </span>
              </div>
            </div>

            <Link
              href="/portal-login"
              className="w-full max-w-md bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>Access Student Portal Gate</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
