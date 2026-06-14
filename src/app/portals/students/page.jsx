"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  GraduationCap,
  CreditCard,
  History,
  CalendarCheck,
  LogOut,
  Loader2,
} from "lucide-react";
import PortalHero from "@/components/Portals/Students/PortalHero";

// IMPORT MODULATED COMPONENT SUB-MODULES
import ProfilePanel from "@/components/Portals/Students/ProfilePanel";
import GradesPanel from "@/components/Portals/Students/GradesPanel";
import PaymentsPanel from "@/components/Portals/Students/PaymentsPanel";
import ShopHistoryPanel from "@/components/Portals/Students/ShopHistoryPanel";
import AttendancePanel from "@/components/Portals/Students/AttendancePanel";

export default function StudentDashboardPage() {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  const mockBackup = {
    name: "Omoefe Bazunu",
    studentId: "HS-2026-DEMO",
    email: "efe@higher.com",
    phone: "+234803",
    dob: "2012-04-12",
    gender: "Male",
    level: "SSS 1",
    status: "Admitted",
  };

  const [student, setStudent] = useState(() => {
    if (typeof window === "undefined") return null;
    const session = localStorage.getItem("portal_session_auth");
    return session ? JSON.parse(session) : mockBackup;
  });

  const handleLogout = () => {
    localStorage.removeItem("portal_session_auth");
    router.push("/portal-login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-background flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 dark:bg-background min-h-screen text-foreground transition-colors duration-300">
      {/* GLOBAL IMPORTED PORTAL HERO */}
      <PortalHero
        studentName={student.name}
        currentLevel={student.level}
        status={student.status}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SUBMENU SIDE PANEL */}
        <aside className="lg:col-span-3 w-full bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl p-4 shadow-sm space-y-2 font-sans text-left">
          {[
            { id: "profile", label: "My Profile", icon: User },
            { id: "grades", label: "Grading Dashboard", icon: GraduationCap },
            {
              id: "payments",
              label: "Payment Status & Fees",
              icon: CreditCard,
            },
            { id: "shop-history", label: "Shop Order History", icon: History },
            {
              id: "attendance",
              label: "Attendance Record",
              icon: CalendarCheck,
            },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:bg-slate-50"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
          <hr className="border-slate-100 dark:border-zinc-800/60 my-2" />
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all"
          >
            <LogOut size={16} /> <span>Terminate Session</span>
          </button>
        </aside>

        {/* WORKSPACE SWITCH ENGINE */}
        <main className="lg:col-span-9 w-full">
          {activeTab === "profile" && <ProfilePanel studentData={student} />}
          {activeTab === "grades" && (
            <GradesPanel currentLevel={student.level} />
          )}
          {activeTab === "payments" && <PaymentsPanel />}
          {activeTab === "shop-history" && <ShopHistoryPanel />}
          {activeTab === "attendance" && <AttendancePanel />}
        </main>
      </div>
    </div>
  );
}
