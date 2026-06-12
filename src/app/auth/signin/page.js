"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isResetMode, setIsResetMode] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential"
      ) {
        setError("Invalid email or password parameters.");
      } else {
        setError("An unexpected authentication error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (!email) {
      setError("Please input your email address first.");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password recovery instructions transmitted to your inbox.");
      setIsResetMode(false);
    } catch (err) {
      console.error(err);
      setError("Failed to process request. Verify email integrity.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 md:p-10 pt-24 md:pt-28 font-sans">
      <div className="w-full max-w-5xl bg-white dark:bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
        {/* Form Inputs (Left side) */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="font-heading text-3xl font-black text-secondary mb-2">
              {isResetMode ? "Reset Password" : "Sign in"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isResetMode
                ? "Provide email credentials to retrieve access"
                : "Use your credentials to log into your account"}
            </p>
          </div>

          {error && (
            <div className="mb-5 p-4 rounded-xl bg-destructive/10 text-destructive text-xs font-semibold flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {message && (
            <div className="mb-5 p-4 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {isResetMode ? (
            <form
              onSubmit={handlePasswordReset}
              className="flex flex-col gap-4"
            >
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full mt-2"
              >
                {loading ? "Processing..." : "Send Reset Instructions"}
              </button>
              <button
                type="button"
                onClick={() => setIsResetMode(false)}
                className="text-xs text-primary font-bold text-center mt-2 hover:underline"
              >
                Back to Sign In
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignIn} className="flex flex-col gap-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-900 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setIsResetMode(true)}
                  className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Forgot your password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full mt-2 py-3.5 rounded-xl"
              >
                {loading ? "Verifying..." : "SIGN IN"}
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-xs text-muted-foreground md:hidden">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-primary font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Brand Panels (Right side) */}
        <div className="hidden md:flex w-1/2 bg-primary dark:bg-primary-dark text-white p-12 flex-col justify-center items-center text-center relative">
          <div className="max-w-md flex flex-col items-center gap-6">
            <h3 className="font-heading text-4xl font-black tracking-tight leading-tight">
              Hello, Friend!
            </h3>
            <p className="text-sm font-light text-primary-foreground/80 leading-relaxed">
              Enter your personal details and start your administrative or
              learning journey with us today.
            </p>
            <Link
              href="/auth/signup"
              className="mt-2 inline-flex items-center justify-center border-2 border-white/40 hover:border-white px-10 py-3 rounded-full text-xs font-black uppercase tracking-[0.15em] transition-all"
            >
              SIGN UP
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-tr-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
