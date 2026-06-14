"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShoppingBag,
  Zap,
  Mail,
  User,
  Phone,
  X,
  Play,
  ChevronRight,
  Home,
} from "lucide-react";

// Localized store inventory registry matching parent catalog slugs
const shopRegistry = {
  "senior-secondary-uniform-set": {
    id: "prod-1",
    slug: "senior-secondary-uniform-set",
    name: "Premium Senior Secondary Uniform Set",
    category: "Apparel",
    type: "physical",
    price: 25000,
    currency: "NGN",
    imageUrl: "/shop/uniform.jpg",
    videoUrl: null,
    description:
      "Our authenticated senior school uniform pack is tailored to match exact high school structural requirements. Each set includes a premium lined institutional blazer with an embroidered shield emblem, two candy cotton button-up white dress shirts, an adjustable silk tie, and two pairs of durable pressed grey wool-blend trousers.",
    features: [
      "1x Premium Embroidered Blazer Shield Set",
      "2x Long-Sleeve Easy-Iron Cotton Shirts",
      "1x Adjustable Woven Crest Tie",
      "2x Crease-Resistant Trousers",
    ],
  },
  "waec-complete-answer-bundle-2026": {
    id: "prod-2",
    slug: "waec-complete-answer-bundle-2026",
    name: "WAEC Complete Solution Key Video Bundle (2026 Edition)",
    category: "Digital Guides",
    type: "digital",
    price: 12000,
    currency: "NGN",
    imageUrl: "/shop/waec-bundle.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample placeholder video stream path
    description:
      "Gain an immediate academic edge with our flagship 2026 video resource archive. This instant digital download pack contains over 40 hours of masterclass lecture screen recordings breaking down real past test questions across Mathematics, English, Physics, and Chemistry from the last five calendar cycles.",
    features: [
      "40+ Hours of On-Demand HD Video Lectures",
      "Step-by-Step Mathematical Proof Breakdowns",
      "Downloadable PDF Formula Sheet References",
      "Mobile-Friendly Portal Account Access Lifetime",
    ],
  },
  "higherschools-smart-rfid-id-card": {
    id: "prod-3",
    slug: "higherschools-smart-rfid-id-card",
    name: "Replacement Smart RFID Student ID Card",
    category: "Essentials",
    type: "physical",
    price: 3500,
    currency: "NGN",
    imageUrl: "/shop/id-card.jpg",
    videoUrl: null,
    description:
      "An official replacement contactless smart key card for authorized cardholders. Features an embedded encrypted passive proximity chip used to log gate attendance tracking metrics, access computer laboratory hub terminals, and utilize automated library borrow systems.",
    features: [
      "High-Frequency Encrypted RFID Safety Core",
      "Pre-Drilled Slot for Standard Lanyard Tracks",
      "Scratch-Resistant Matte Finish Printing",
      "Instant Registration on Campus Security Hubs",
    ],
  },
  "advanced-science-lab-manual": {
    id: "prod-4",
    slug: "advanced-science-lab-manual",
    name: "Comprehensive STEM Laboratory Practical Guide",
    category: "Textbooks",
    type: "digital",
    price: 6500,
    currency: "NGN",
    imageUrl: "/shop/lab-manual.jpg",
    videoUrl: null,
    description:
      "A beautifully structured interactive workspace manual covering all core laboratory experiments required for senior high school physics, biology, and chemistry coursework sequences. Contains data logging sheets, sample graph equations, and safety rule matrices.",
    features: [
      "Interactive Form-Fillable PDF Document",
      "35+ Standard High School Lab Procedures",
      "High-Resolution Diagram Blueprint Explanations",
      "Instant Email and Student Dashboard Delivery",
    ],
  },
};

function formatPrice(amount, currency) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency || "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

/* ── Success Modal Component ── */
function SuccessModal({ open, onClose, customerEmail }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in">
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 bg-white dark:bg-card border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
          Payment Successful!
        </h2>
        <p className="font-sans text-xs md:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
          Thank you for your order request. A confirmation summary receipt along
          with corresponding full delivery updates will be channeled to{" "}
          <span className="font-bold text-slate-900 dark:text-white">
            {customerEmail}
          </span>{" "}
          momentarily.
        </p>
        <div className="flex items-center gap-3 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-4 text-left mb-6 font-sans">
          <Mail className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
            Check your secure inbox folder shortly to access your product
            logistics delivery credentials.
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-full h-12 rounded-xl bg-primary hover:bg-primary/95 text-white font-sans font-bold transition-colors shadow-sm"
        >
          Done
        </button>
      </div>
    </div>
  );
}

/* ── Checkout Form Component with Flutterwave Simulation ── */
function CheckoutForm({ product, onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function startPayment(e) {
    e.preventDefault();
    const { name, email, phone } = form;
    if (!name.trim()) return alert("Please enter your full name.");
    if (!email.trim() || !email.includes("@"))
      return alert("Please enter a valid email address.");
    if (!phone.trim()) return alert("Please enter your phone number.");

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onSuccess(email);
    }, 1800);
  }

  return (
    <form onSubmit={startPayment} className="space-y-4 text-left">
      <h3 className="font-sans font-bold text-slate-900 dark:text-white text-sm">
        Your Customer Details
      </h3>
      {[
        {
          id: "co-name",
          name: "name",
          label: "Full Name",
          type: "text",
          placeholder: "Omoefe Bazunu",
          icon: User,
        },
        {
          id: "co-email",
          name: "email",
          label: "Email Address",
          type: "email",
          placeholder: "efe@higherenterprises.com",
          icon: Mail,
        },
        {
          id: "co-phone",
          name: "phone",
          label: "Phone Number",
          type: "tel",
          placeholder: "+234 803 000 0000",
          icon: Phone,
        },
      ].map((f) => (
        <div key={f.id} className="space-y-1 font-sans">
          <label
            htmlFor={f.id}
            className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider"
          >
            {f.label}
          </label>
          <div className="relative">
            <f.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id={f.id}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              value={form[f.name]}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl text-sm text-foreground outline-none focus:border-primary transition-colors placeholder:text-slate-400"
              required
            />
          </div>
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className={`w-full h-12 rounded-xl bg-primary text-white font-sans font-bold flex items-center justify-center gap-2 shadow-md shadow-primary/10 transition-all ${
          loading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/95"
        }`}
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Processing Transaction...
          </>
        ) : (
          <>
            <Zap className="w-4 h-4" />
            Pay {formatPrice(product.price, product.currency)}
          </>
        )}
      </button>
      <p className="text-center text-[10px] font-sans font-semibold text-slate-400 tracking-wide uppercase">
        🔒 Secured by Flutterwave · Card · Bank · USSD
      </p>
    </form>
  );
}

/* ── Main Dynamic Slug Render Page Component ── */
export default function ProductSlugPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug || "";

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successModal, setSuccessModal] = useState(false);
  const [successEmail, setSuccessEmail] = useState("");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const foundProduct = shopRegistry[slug];
    setProduct(foundProduct || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-background flex items-center justify-center font-sans">
        <div className="text-center">
          <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="text-muted-foreground font-semibold">
            Stock item index path could not be found.
          </p>
          <Link
            href="/shop"
            className="text-primary text-sm mt-2 inline-block font-bold hover:underline"
          >
            ← Return to main catalog display
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-12 dark:bg-background text-foreground transition-colors duration-300">
      <SuccessModal
        open={successModal}
        onClose={() => setSuccessModal(false)}
        customerEmail={successEmail}
      />

      {/* Dynamic Sub-Header Canvas with Integrated Breadcrumbs */}
      <div className="w-full bg-white dark:bg-card border-b border-slate-200 dark:border-zinc-800/80 py-8 mb-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-3">
          <nav className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium text-muted-foreground">
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Home size={14} /> <span>Home</span>
            </Link>
            <ChevronRight size={14} className="text-slate-300 shrink-0" />
            <Link href="/shop" className="hover:text-primary transition-colors">
              Store
            </Link>
            <ChevronRight size={14} className="text-slate-300 shrink-0" />
            <span className="text-slate-900 dark:text-white font-semibold truncate max-w-[200px] md:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left Block Side: Graphic Preview Framework Box (3 Columns) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="relative aspect-video bg-slate-200 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-slate-200/60 dark:border-zinc-800/80 shadow-md group">
              {product.imageUrl && !isPlayingVideo ? (
                <>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  {product.videoUrl && (
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="absolute bottom-4 left-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200/40 dark:border-zinc-800 text-[10px] font-sans font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all shadow-md z-10"
                    >
                      <Play className="w-3 h-3 fill-current stroke-none inline mr-1.5" />
                      Watch Preview Demo
                    </button>
                  )}
                </>
              ) : isPlayingVideo && product.videoUrl ? (
                <div className="w-full h-full relative bg-black">
                  <video
                    src={product.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    loop
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <button
                    onClick={() => setIsPlayingVideo(false)}
                    className="absolute top-3 right-3 z-20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm text-slate-800 dark:text-white border border-slate-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg text-[10px] font-sans font-bold uppercase tracking-widest hover:bg-slate-100"
                  >
                    Return to Cover Image
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/20" />
                </div>
              )}
            </div>

            {/* Description Text Segment */}
            <div className="text-left bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 p-8 rounded-3xl shadow-sm space-y-3">
              <h2 className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
                Product Overview
              </h2>
              <p className="font-sans text-sm md:text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                {product.description}
              </p>
            </div>

            {/* Features Manifest Checklist Block */}
            {product.features?.length > 0 && (
              <div className="text-left bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 p-8 rounded-3xl shadow-sm space-y-4">
                <h2 className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
                  What&apos;s Included In The Package
                </h2>
                <ul className="space-y-3 font-sans text-xs md:text-sm text-slate-700 dark:text-zinc-300 font-normal">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Block Side: Sticky Purchase / Checkout Panel Module */}
          <div className="lg:col-span-2 w-full lg:sticky lg:top-8">
            <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 rounded-3xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none text-left flex flex-col gap-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 font-sans">
                  {product.category}
                </p>
                <h1 className="font-heading text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl md:text-3xl font-sans font-black text-slate-900 dark:text-white">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  <span className="text-xs font-sans text-muted-foreground font-light">
                    one-time rate
                  </span>
                </div>
              </div>

              <hr className="border-slate-100 dark:border-zinc-800/60" />

              <CheckoutForm
                product={product}
                onSuccess={(email) => {
                  setSuccessEmail(email);
                  setSuccessModal(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
