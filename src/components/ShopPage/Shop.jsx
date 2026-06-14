"use client";

import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, Zap, ExternalLink } from "lucide-react";

const PAGE_SIZE = 8;

// Localized placeholder product dataset
const placeholderProducts = [
  {
    id: "prod-1",
    slug: "senior-secondary-uniform-set",
    name: "Premium Senior Secondary Uniform Set",
    category: "Apparel",
    type: "physical",
    price: 25000,
    currency: "NGN",
    imageUrl: "/shop/shop1.jpg",
    description:
      "Tailored institutional blazers, shirts, and trousers matching high school specifications.",
  },
  {
    id: "prod-2",
    slug: "waec-complete-answer-bundle-2026",
    name: "WAEC Complete Solution Key Video Bundle (2026 Edition)",
    category: "Digital Guides",
    type: "digital",
    price: 12000,
    currency: "NGN",
    imageUrl: "/shop/shop2.jpg",
    description:
      "Instant access download containing professional video explanations for 5 years of past questions.",
  },
  {
    id: "prod-3",
    slug: "higherschools-smart-rfid-id-card",
    name: "Replacement Smart RFID Student ID Card",
    category: "Essentials",
    type: "physical",
    price: 3500,
    currency: "NGN",
    imageUrl: "/shop/shop3.jpg",
    description:
      "Contactless access control card compatible with attendance trackers and laboratory check-ins.",
  },
  {
    id: "prod-4",
    slug: "advanced-science-lab-manual",
    name: "Comprehensive STEM Laboratory Practical Guide",
    category: "Textbooks",
    type: "digital",
    price: 6500,
    currency: "NGN",
    imageUrl: "/shop/shop4.jpg",
    description:
      "Interactive PDF workspace outlining procedures for secondary physics, chemistry, and biology tracks.",
  },
];

function formatPrice(amount, currency) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency || "NGN",
    minimumFractionDigits: 0,
  }).format(amount);
}

function ProductCard({ product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col justify-between">
        <div>
          <div className="relative aspect-[4/3] bg-slate-100 dark:bg-zinc-900 overflow-hidden">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground/30" />
              </div>
            )}
            <div className="absolute top-3 right-3">
              <span
                className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider rounded-md px-2.5 py-1 ${
                  product.type === "digital"
                    ? "bg-primary text-white"
                    : "bg-[#FF8C38] text-white"
                }`}
              >
                {product.type === "digital" ? (
                  <>
                    <Zap className="w-2.5 h-2.5" />
                    Digital
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-2.5 h-2.5" />
                    Physical
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="p-4 text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 font-sans">
              {product.category}
            </p>
            <h3 className="font-heading text-base font-black text-slate-900 dark:text-white leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
        </div>
        <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-zinc-800/60 mt-auto">
          <span className="text-base font-black text-slate-900 dark:text-white font-sans">
            {formatPrice(product.price, product.currency)}
          </span>
          <span className="text-xs font-bold text-primary group-hover:underline font-sans">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef(null);

  // Directly initialize products array using stable mock data variables
  useEffect(() => {
    setProducts(placeholderProducts);
    setLoading(false);
  }, []);

  const categories = useMemo(() => {
    const cats = [...new Set(products.map((p) => p.category))].sort();
    return ["All", ...cats];
  }, [products]);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "All")
      list = list.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q),
      );
    }
    return list;
  }, [products, activeCategory, search]);

  const visibleProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeCategory, search]);

  const handleObserver = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setVisibleCount((prev) => prev + PAGE_SIZE);
      }
    },
    [hasMore],
  );

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background text-foreground transition-colors duration-300">
      {/* Filters Toolbar Row */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-card/95 backdrop-blur border-b border-slate-200 dark:border-zinc-800/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Categories Filter Tabs Group */}
          <div className="flex flex-wrap items-center gap-1.5 border border-slate-200/60 dark:border-zinc-800/80 p-1 rounded-xl bg-slate-50 dark:bg-background">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-sans font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Realtime Search Input Box */}
          <div className="relative w-full sm:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              aria-hidden="true"
            />
            <input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-background border border-slate-200 dark:border-zinc-800 rounded-xl outline-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 transition-all font-sans"
            />
          </div>
        </div>
      </div>

      {/* Storefront Product Matrix Grid */}
      <div className="container mx-auto px-6 md:px-10 py-16 max-w-7xl">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="aspect-[4/3] bg-slate-200 dark:bg-zinc-800" />
                <div className="p-4 space-y-3">
                  <div className="h-2.5 bg-slate-200 dark:bg-zinc-800 rounded w-1/4" />
                  <div className="h-4 bg-slate-200 dark:bg-zinc-800 rounded w-3/4" />
                  <div className="h-5 bg-slate-200 dark:bg-zinc-800 rounded w-1/2 pt-2" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 bg-white dark:bg-card rounded-3xl border border-slate-200/60 dark:border-zinc-800/80">
            <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-muted-foreground font-sans font-medium">
              No inventory products match your search filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Infinite Scroll Intersection Boundary Trigger */}
        <div ref={sentinelRef} className="w-full flex justify-center py-8">
          {hasMore && (
            <span className="text-[11px] tracking-widest uppercase text-muted-foreground/50 font-sans font-bold animate-pulse">
              Loading alternative items...
            </span>
          )}
        </div>

        {/* Results Counter Summary Row */}
        {!loading && filtered.length > 0 && (
          <div className="border-t border-slate-200 dark:border-zinc-800/60 pt-6 text-[11px] tracking-widest uppercase font-sans text-muted-foreground font-bold text-left">
            Showing {visibleProducts.length} of {filtered.length} stock item
            {filtered.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>
    </div>
  );
}
