"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  AlertCircle,
} from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!agreeTerms) {
      setError("You must accept the Terms and Conditions to proceed.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        phoneNumber,
        role: null,
        requestStatus: null,
        createdAt: new Date().toISOString(),
      });

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("This email profile is already registered.");
      } else if (err.code === "auth/weak-password") {
        setError("Password metric unmet. Choose a stronger string.");
      } else {
        setError("Could not complete registration. Try again.");
      }
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
              Create Account
            </h2>
            <p className="text-sm text-muted-foreground">
              Enter your personal details and start journey with us
            </p>
          </div>

          {error && (
            <div className="mb-5 p-4 rounded-xl bg-destructive/10 text-destructive text-xs font-semibold flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                required
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
              />
            </div>

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
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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

            <div className="flex items-start gap-2.5 mt-1">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 accent-primary rounded"
              />
              <label
                htmlFor="agreeTerms"
                className="text-xs text-muted-foreground leading-normal"
              >
                I read and explicitly accept the system guidelines, privacy
                protocols, and regulatory Terms and Conditions.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full mt-2 py-3.5 rounded-xl"
            >
              {loading ? "Creating..." : "SIGN UP"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground md:hidden">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-primary font-bold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Brand Panels (Right side) */}
        <div className="hidden md:flex w-1/2 bg-primary dark:bg-primary-dark text-white p-12 flex-col justify-center items-center text-center relative">
          <div className="max-w-md flex flex-col items-center gap-6">
            <h3 className="font-heading text-4xl font-black tracking-tight leading-tight">
              Welcome Back!
            </h3>
            <p className="text-sm font-light text-primary-foreground/80 leading-relaxed">
              To keep connected with your data, please login with your personal
              credentials.
            </p>
            <Link
              href="/auth/signin"
              className="mt-2 inline-flex items-center justify-center border-2 border-white/40 hover:border-white px-10 py-3 rounded-full text-xs font-black uppercase tracking-[0.15em] transition-all"
            >
              SIGN IN
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-tr-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
