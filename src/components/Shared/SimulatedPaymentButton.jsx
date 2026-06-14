"use client";

import React, { useState } from "react";
import { Zap, RefreshCw } from "lucide-react";

export default function SimulatedPaymentButton({
  amount,
  itemLabel,
  onPaymentSuccess,
}) {
  const [loading, setLoading] = useState(false);

  const formatPrice = (value) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const executePaymentSimulation = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate standard payment gateway network latency
    setTimeout(() => {
      setLoading(false);
      onPaymentSuccess();
    }, 1800);
  };

  return (
    <div className="w-full space-y-3 font-sans">
      <button
        type="button"
        onClick={executePaymentSimulation}
        disabled={loading}
        className="w-full h-12 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:bg-primary/95 transition-all disabled:opacity-80 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Verifying Secure Channel ({formatPrice(amount)})...</span>
          </>
        ) : (
          <>
            <Zap size={16} />
            <span>Pay {formatPrice(amount)} via Flutterwave</span>
          </>
        )}
      </button>
      <p className="text-center text-[10px] font-semibold text-slate-400 tracking-wide uppercase">
        🔒 Secured by Flutterwave Sandbox &middot; {itemLabel}
      </p>
    </div>
  );
}
