"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import {
  Menu,
  X,
  LayoutDashboard,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Pull states cleanly from your AuthContext to avoid race conditions
  const { user, userRole, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Events", href: "/events" },
    { name: "Library", href: "/library" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  // Helper function to return portal configs ONLY when valid
  const getPortalButton = (isMobile = false) => {
    if (loading) return null;

    if (!user) {
      return (
        <Link
          href="/auth/signin"
          className={
            isMobile
              ? "bg-primary text-primary-foreground font-black py-4 rounded-full uppercase tracking-widest hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              : "btn-primary text-center py-2 px-6 rounded-full"
          }
          onClick={() => isMobile && setIsOpen(false)}
        >
          Sign In
        </Link>
      );
    }

    // Explicitly configure buttons based on the user's role parameters
    let label = "Dashboard";
    let href = "/dashboard";
    let Icon = LayoutDashboard;

    if (userRole === "student") {
      label = "Student Portal";
      href = "/portal/student";
      Icon = GraduationCap;
    } else if (userRole === "teacher") {
      label = "Teacher Portal";
      href = "/portal/teacher";
      Icon = Briefcase;
    }

    return (
      <Link
        href={href}
        className={
          isMobile
            ? "bg-primary text-primary-foreground font-black py-4 rounded-full uppercase tracking-widest hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            : "btn-secondary flex items-center justify-center gap-2 py-2 px-5 shadow-md shadow-secondary/25"
        }
        onClick={() => isMobile && setIsOpen(false)}
      >
        <Icon size={isMobile ? 18 : 14} />
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white dark:bg-card border-b ${
        scrolled ? "border-border/50 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Identity Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-heading text-xl md:text-2xl font-black tracking-tight text-primary">
            HIGHER<span className="text-secondary">SCHOOLS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Interactive Call To Action */}
        <div className="hidden md:flex items-center">
          {getPortalButton(false)}
        </div>

        {/* Mobile Interface Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-xl md:hidden text-foreground hover:bg-muted transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Centered Mobile Drawer Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-background border-b border-border shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6 p-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-heading text-foreground hover:text-primary transition-colors tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <hr className="border-border" />

            {/* Mobile Dynamic CTA Render */}
            {getPortalButton(true)}
          </div>
        </div>
      )}
    </header>
  );
}
