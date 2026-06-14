"use client";

import { useState, useEffect } from "react";
import {
  ChevronRight,
  Play,
  Loader2,
  Video,
  Camera,
  ChevronLeft,
  X,
  Image as ImageIcon,
} from "lucide-react";

const PAGE_SIZE = 3;

// Structured static gallery mock database tracking secondary school items
const mockGalleryRegistry = [
  {
    id: "gal-1",
    type: "video",
    title: "Annual Inter-House March Past Highlights",
    category: "Sports & Culture",
    duration: "02:45",
  },
  {
    id: "gal-2",
    type: "image",
    title: "Senior Science Lab Chemistry Practicals",
    category: "Academic & Tech",
    dimensions: "High-Res Photo",
  },
  {
    id: "gal-3",
    type: "image",
    title: "Robotics Exhibition Hub Projects Showcase",
    category: "Academic & Tech",
    dimensions: "High-Res Photo",
  },
  {
    id: "gal-4",
    type: "video",
    title: "Orchestral Performance at Creative Arts Gala",
    category: "Sports & Culture",
    duration: "05:12",
  },
  {
    id: "gal-5",
    type: "image",
    title: "Parent-Teacher Association General Meeting",
    category: "Parent-Teacher",
    dimensions: "High-Res Photo",
  },
];

export default function GalleryContent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTab, setActiveTab] = useState("video");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGalleryMedia = () => {
      setLoading(true);

      setTimeout(() => {
        const filteredAll = mockGalleryRegistry.filter(
          (item) => item.type === activeTab,
        );
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        const slicedItems = filteredAll.slice(
          startIndex,
          startIndex + PAGE_SIZE,
        );

        setItems(slicedItems);
        setTotalPages(Math.ceil(filteredAll.length / PAGE_SIZE) || 1);
        setLoading(false);
      }, 500);
    };

    fetchGalleryMedia();
  }, [currentPage, activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background text-foreground transition-colors duration-300">
      {/* IMMERSIVE SIMULATED VIDEO PLAYER MODAL LAYER */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col items-center justify-center p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 animate-pulse">
              <Video size={32} />
            </div>
            <h3 className="font-heading text-lg font-black text-white tracking-tight mb-2">
              {activeVideo.title}
            </h3>
            <p className="font-sans text-xs text-zinc-400 max-w-sm mb-6">
              Simulated Video Player Stream Sandbox. Live media files will loop
              safely within this aspect container interface layer.
            </p>

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all flex items-center gap-1.5"
            >
              <X size={14} />
              <span>Close Canvas</span>
            </button>
          </div>
        </div>
      )}

      {/* CORE CONTROLS AND INVENTORY MATRIX CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* TAB FILTERS ROW */}
        <header className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-zinc-800">
          <div className="flex flex-wrap gap-3 font-sans">
            <button
              onClick={() => handleTabChange("video")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all border shadow-sm ${
                activeTab === "video"
                  ? "bg-primary border-primary text-white"
                  : "bg-white dark:bg-card border-slate-200 dark:border-zinc-700 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Video size={14} />
              <span>Video Highlights</span>
            </button>

            <button
              onClick={() => handleTabChange("image")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all border shadow-sm ${
                activeTab === "image"
                  ? "bg-primary border-primary text-white"
                  : "bg-white dark:bg-card border-slate-200 dark:border-zinc-700 text-muted-foreground hover:text-foreground"
              }`}
            >
              <Camera size={14} />
              <span>Photo Logs</span>
            </button>
          </div>

          <div className="text-xs font-mono font-semibold text-muted-foreground/80 self-end sm:self-auto">
            Categorized Files &middot; Page {currentPage} of {totalPages}
          </div>
        </header>

        {/* LOADING & DISPLAY SWITCH PATHWAYS */}
        {loading ? (
          <div className="py-32 flex items-center justify-center">
            <Loader2 className="animate-spin text-primary" size={36} />
          </div>
        ) : (
          <>
            {items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group overflow-hidden flex flex-col h-full"
                  >
                    {/* GRAY CONTAINER MEDIA REPRESENTATION DIV BLOCK */}
                    <div
                      onClick={() =>
                        item.type === "video" && setActiveVideo(item)
                      }
                      className={`relative w-full aspect-[4/3] bg-slate-200 dark:bg-zinc-800 transition-colors flex flex-col items-center justify-center text-muted-foreground/40 dark:text-zinc-600 border-b border-slate-100 dark:border-zinc-800/40 ${
                        item.type === "video"
                          ? "cursor-pointer group-hover:bg-slate-300/60 dark:group-hover:bg-zinc-700/80"
                          : ""
                      }`}
                    >
                      {item.type === "video" ? (
                        <>
                          <div className="p-4 bg-white/80 dark:bg-zinc-900/80 rounded-full text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Play
                              size={18}
                              className="fill-primary stroke-none ml-0.5"
                            />
                          </div>
                          <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-slate-900/10 text-slate-600 dark:bg-black/30 dark:text-zinc-500 px-2 py-0.5 rounded-md">
                            {item.duration} Length
                          </span>
                        </>
                      ) : (
                        <>
                          <ImageIcon
                            size={32}
                            className="opacity-80 group-hover:scale-105 transition-transform duration-300"
                          />
                          <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-slate-900/10 text-slate-600 dark:bg-black/30 dark:text-zinc-500 px-2 py-0.5 rounded-md">
                            {item.dimensions}
                          </span>
                        </>
                      )}
                    </div>

                    {/* DETAILS CARD CAPTIONS TEXT CONTAINER */}
                    <div className="p-5 flex flex-col justify-between flex-grow text-left bg-white dark:bg-card">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary">
                          {item.category}
                        </span>
                        <h3 className="font-heading text-base font-black tracking-tight text-slate-900 dark:text-white leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 mt-4">
                        <p className="text-[10px] font-sans font-bold text-primary uppercase tracking-widest">
                          Simulated Placeholder {item.type} File
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center bg-white dark:bg-card border border-slate-200/60 dark:border-zinc-800/80 rounded-2xl font-sans">
                <p className="text-muted-foreground text-sm font-medium">
                  Media item logs are currently empty for this catalog tab row.
                </p>
              </div>
            )}

            {/* PAGINATION PROGRESS SEPARATION TRIGGER ROWS */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pt-12 border-t border-slate-200 dark:border-zinc-800 font-sans">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-card border border-slate-200 dark:border-zinc-700 rounded-xl text-xs font-bold shadow-sm hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={14} />
                  <span>Prev</span>
                </button>

                <div className="flex gap-1.5">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`w-8 h-8 text-xs font-bold rounded-xl border transition-all ${
                        currentPage === i + 1
                          ? "bg-primary border-primary text-white shadow-sm"
                          : "bg-white dark:bg-card border-slate-200 dark:border-zinc-700 text-foreground hover:border-primary"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-card border border-slate-200 dark:border-zinc-700 rounded-xl text-xs font-bold shadow-sm hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <span>Next</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
