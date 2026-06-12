"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What age groups or classes do you accommodate?",
    answer:
      "We offer comprehensive academic tracks from early childhood education and primary classes up to senior secondary levels, ensuring a smooth learning journey for your child.",
  },
  {
    question: "How can parents track their child's academic performance?",
    answer:
      "Parents receive unique login credentials to access real-time records. Through our simple online dashboard, you can instantly review grades, check daily attendance logs, and track overall progress.",
  },
  {
    question: "Are practical learning and sciences prioritized?",
    answer:
      "Absolutely. We strongly believe in hands-on discovery. Our campus features fully equipped, modern chemistry, physics, and biology laboratories alongside an innovative robotics and tech workspace.",
  },
  {
    question: "What is the process for textbook and uniform purchases?",
    answer:
      "All school items, uniforms, and recommended textbooks are accessible directly through our integrated campus online shop, allowing parents to order securely and pick up items on school grounds.",
  },
  {
    question: "How do we apply for fresh admissions?",
    answer:
      "Admissions are open! Simply navigate to our Admissions portal page to fill out the digital application form, drop your child's previous academic certificates, and book a physical tour.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-20 bg-slate-50 dark:bg-background text-foreground transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-3xl flex flex-col items-center">
        {/* Centered Headers */}
        <div className="text-center mb-16 flex flex-col items-center gap-3">
          <label className="label-eyebrow text-secondary uppercase tracking-[0.2em] font-bold text-sm">
            Have Questions?
          </label>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-slate-900 dark:text-white">
            Frequently Asked <span className="text-primary">Questions.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-xl mt-2">
            Clear, straightforward answers to the most common inquiries
            regarding our school operations, facilities, and enrollment.
          </p>
        </div>

        {/* Accordion Stack Frame */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="w-full rounded-2xl bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 transition-all duration-300 overflow-hidden shadow-sm"
              >
                {/* Trigger Button Row */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/50 dark:hover:bg-zinc-900/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base md:text-lg font-bold text-slate-800 dark:text-zinc-100 group-hover:text-primary">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full shrink-0 transition-colors ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-slate-100 dark:bg-zinc-800 text-slate-500"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Animated Disclosure Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-4 border-t border-slate-100 dark:border-zinc-800/40 text-sm md:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
