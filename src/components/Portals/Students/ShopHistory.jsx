"use client";

import React from "react";
import { CheckCircle, AlertCircle, XCircle, History } from "lucide-react";

export default function ShopHistoryPanel() {
  const orders = [
    {
      id: "INV-9821",
      name: "Premium Senior Secondary Uniform Set",
      price: "₦25,000",
      status: "Fulfilled",
      icon: CheckCircle,
      style:
        "text-emerald-500 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900/40",
    },
    {
      id: "INV-4310",
      name: "Replacement Smart RFID Student ID Card",
      price: "₦3,500",
      status: "Pending",
      icon: AlertCircle,
      style:
        "text-amber-500 bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900/40",
    },
    {
      id: "INV-1104",
      name: "Custom Tracksuit Set (Olympiad Variant)",
      price: "₦12,000",
      status: "Rejected",
      icon: XCircle,
      style:
        "text-rose-500 bg-rose-50 border-rose-200 dark:bg-rose-950/20 dark:border-rose-900/40",
    },
  ];

  return (
    <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 p-8 rounded-2xl shadow-sm text-left space-y-6 animate-in fade-in duration-300">
      <div className="border-b pb-3 border-slate-100 dark:border-zinc-800">
        <h2 className="font-heading text-lg font-black text-slate-900 dark:text-white">
          Shop Order Registry
        </h2>
        <p className="text-xs text-muted-foreground font-light mt-0.5">
          Track procurement statuses raised inside the institutional store hub
          platform.
        </p>
      </div>

      <div className="overflow-x-auto font-sans text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-background border-b border-slate-200 dark:border-zinc-800 uppercase text-[10px] font-bold text-muted-foreground tracking-wider">
              <th className="p-4">Invoice ID</th>
              <th className="p-4">Item Details</th>
              <th className="p-4">Cost Basis</th>
              <th className="p-4 text-center">Log Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60 text-slate-700 dark:text-zinc-300">
            {orders.map((order) => {
              const StatusIcon = order.icon;
              return (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/30"
                >
                  <td className="p-4 font-mono font-bold text-slate-400">
                    {order.id}
                  </td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">
                    {order.name}
                  </td>
                  <td className="p-4 font-mono font-medium">{order.price}</td>
                  <td className="p-4 text-center font-bold">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] rounded-lg uppercase tracking-wider border ${order.style}`}
                    >
                      <StatusIcon size={12} /> {order.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
