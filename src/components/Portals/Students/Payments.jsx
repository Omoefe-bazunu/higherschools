"use client";

import React, { useState } from "react";
import { CreditCard, CheckCircle } from "lucide-react";
import SimulatedPaymentButton from "@/components/shared/SimulatedPaymentButton";

export default function PaymentsPanel() {
  const [fees, setFees] = useState([
    {
      id: "fee-1",
      name: "Academic Session Tuition Per-Term Fee",
      amount: 180000,
      paid: true,
      note: "Cleared via Bank Transfer",
    },
    {
      id: "fee-2",
      name: "Terminal Science Lab & Consumables Fee",
      amount: 15000,
      paid: true,
      note: "Cleared via Flutterwave Checkout",
    },
    {
      id: "fee-3",
      name: "Grading Exam & Portal Infrastructure Levy",
      amount: 5000,
      paid: false,
      note: "Awaiting Electronic Settlement",
    },
  ]);

  const handleFeePaymentSuccess = (id) => {
    setFees((prev) =>
      prev.map((f) =>
        f.id === id
          ? { ...f, paid: true, note: "Cleared via Flutterwave Simulation" }
          : f,
      ),
    );
  };

  return (
    <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 p-8 rounded-2xl shadow-sm text-left space-y-6 animate-in fade-in duration-300">
      <div className="border-b pb-3 border-slate-100 dark:border-zinc-800">
        <h2 className="font-heading text-lg font-black text-slate-900 dark:text-white">
          Tuition Fee Ledger
        </h2>
        <p className="text-xs text-muted-foreground font-light mt-0.5">
          Track financial clearance frameworks for the current educational
          cycle.
        </p>
      </div>

      <div className="space-y-4 font-sans text-xs md:text-sm">
        {fees.map((fee) => (
          <div
            key={fee.id}
            className="p-5 bg-slate-50 dark:bg-background border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white leading-tight">
                {fee.name}
              </h4>
              <p className="text-xs text-muted-foreground font-light font-mono">
                {fee.note}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0 justify-between sm:justify-end w-full sm:w-auto">
              <span className="font-black text-slate-900 dark:text-white font-mono">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                }).format(fee.amount)}
              </span>

              {fee.paid ? (
                <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] rounded-lg uppercase tracking-wider flex items-center gap-1 shrink-0">
                  <CheckCircle size={12} /> Paid
                </span>
              ) : (
                <div className="w-full sm:w-44 shrink-0">
                  <SimulatedPaymentButton
                    amount={fee.amount}
                    itemLabel="Portal Fee Settlement"
                    onPaymentSuccess={() => handleFeePaymentSuccess(fee.id)}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
