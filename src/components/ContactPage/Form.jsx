"use client";

import React, { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MailIcon,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "contact_inquiries"), {
        ...formData,
        submittedAt: new Date().toISOString(),
        status: "unread",
      });
      setSuccess(true);
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Failed to log entry. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-background py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN: Organized Direct Corporate Channels (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          <div className="flex flex-col gap-3">
            <label className="label-eyebrow text-secondary uppercase tracking-[0.2em] font-bold text-sm">
              Get In Touch
            </label>
            <h2 className="font-heading text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              We Are Always Ready to{" "}
              <span className="text-primary">Connect.</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light">
              Have questions about our smart classrooms, admissions schedules,
              or student portals? Reach out to our dedicated desks directly.
            </p>
          </div>

          <hr className="border-slate-200 dark:border-zinc-800" />

          {/* Channels Stack Grid */}
          <div className="flex flex-col gap-6 font-sans">
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-card text-primary border border-slate-200/60 dark:border-zinc-800 shadow-sm flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-0.5">
                  Direct Lines
                </h4>
                <p className="text-sm text-slate-600 dark:text-zinc-400 font-light">
                  +234 904 397 0401
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-card text-primary border border-slate-200/60 dark:border-zinc-800 shadow-sm flex items-center justify-center shrink-0">
                <MailIcon size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-0.5">
                  Email Support
                </h4>
                <p className="text-sm text-slate-600 dark:text-zinc-400 font-light">
                  info@higherenterprises.co.uk
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-card text-primary border border-slate-200/60 dark:border-zinc-800 shadow-sm flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-0.5">
                  Campus Headquarters
                </h4>
                <p className="text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-card text-primary border border-slate-200/60 dark:border-zinc-800 shadow-sm flex items-center justify-center shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-0.5">
                  Desk Office Hours
                </h4>
                <p className="text-sm text-slate-600 dark:text-zinc-400 font-light">
                  Monday ── Friday | 8:00 AM – 4:00 PM
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* RIGHT COLUMN: Clean Routing Entry Form Box (7 Columns) */}
        <div className="lg:col-span-7 w-full">
          <div className="w-full p-8 md:p-10 bg-white dark:bg-card rounded-3xl border border-slate-200/60 dark:border-zinc-800/80 shadow-xl shadow-slate-200/30 dark:shadow-none relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 text-left font-sans"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        disabled={loading}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-background border border-slate-200/80 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        disabled={loading}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-background border border-slate-200/80 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                      Reason for Inquiry
                    </label>
                    <select
                      disabled={loading}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-background border border-slate-200/80 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground appearance-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admissions Desk">Admissions Desk</option>
                      <option value="Technical Portal Support">
                        Technical Portal Support
                      </option>
                      <option value="Employment Operations">
                        Employment Operations
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      disabled={loading}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-background border border-slate-200/80 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground resize-none"
                      placeholder="Write your message details here..."
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-destructive/10 text-destructive text-xs font-semibold flex items-center gap-2">
                      <AlertCircle size={16} /> <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 bg-primary hover:bg-primary/95 text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/10 active:scale-98 transition-all"
                  >
                    {loading ? "Logging Entry..." : "Send Message"}
                    <Send size={16} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="flex flex-col items-center text-center gap-4 py-8 font-sans"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-2">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-slate-900 dark:text-white">
                    Message Logged Successfully!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm leading-relaxed font-light">
                    Thank you for contacting us. Your entry has been securely
                    routed to our <strong>{formData.subject}</strong> team. We
                    will get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
