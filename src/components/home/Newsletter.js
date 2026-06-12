"use client";

import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Direct submission to higherschools database instance logs
      await addDoc(collection(db, "newsletter"), {
        email: email.trim().toLowerCase(),
        subscribedAt: new Date().toISOString(),
      });

      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Newsletter submission error:", err);
      setError(
        "Something went wrong. Please check your network and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      className="py-20 bg-primary dark:bg-zinc-950 text-white overflow-hidden relative transition-colors duration-300"
    >
      {/* Subtle ambient accent glow ring inside vector frame */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary opacity-10 blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center text-center">
        {/* Core Header Text Block */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <label className="label-eyebrow text-secondary uppercase tracking-[0.2em] font-bold text-sm justify-center">
            Stay Updated
          </label>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight">
            Join Our School <span className="text-secondary">Community.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed font-light max-w-xl mt-1">
            Subscribe to our weekly newsletter to get the latest announcements,
            campus stories, and upcoming events delivered straight to your
            inbox.
          </p>
        </div>

        {/* Input Form Layer */}
        <div className="w-full max-w-lg">
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <div className="relative flex-grow">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="email"
                required
                disabled={loading || success}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-white/40 transition-all disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={loading || success}
              className="bg-secondary text-white font-sans font-bold hover:bg-secondary/90 px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-200 active:scale-98 shrink-0 shadow-lg shadow-secondary/10 disabled:opacity-50 disabled:scale-100"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* Feedback Alerts Callout Rows */}
          {success && (
            <div className="mt-4 p-4 rounded-2xl bg-white/10 text-secondary text-xs md:text-sm font-semibold flex items-center justify-center gap-2.5 animate-in fade-in duration-300">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>
                Awesome! You have successfully joined our email community list.
              </span>
            </div>
          )}
          {error && (
            <div className="mt-4 p-4 rounded-2xl bg-destructive/20 text-white text-xs md:text-sm font-semibold flex items-center justify-center gap-2.5 animate-in fade-in duration-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
