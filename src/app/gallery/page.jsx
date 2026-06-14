import Hero from "@/components/GalleryPage/Hero";
import GalleryContent from "@/components/GalleryPage/Content";

export const metadata = {
  title: "Gallery | HigherSchools",
  description:
    "Explore our gallery of events, achievements, and campus life moments.",
};

export default function GalleryPage() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start">
      <main className="w-full flex flex-col">
        <Hero />
        <GalleryContent />
      </main>
    </div>
  );
}
