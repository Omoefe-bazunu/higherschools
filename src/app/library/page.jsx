import LibraryHeader from "@/components/LibraryPage/Hero";
import LibraryGrid from "@/components/LibraryPage/Grid";
import LibraryOperations from "@/components/LibraryPage/Operations";

export const metadata = {
  title: "Digital & Physical Library | HigherSchools",
  description:
    "Browse our comprehensive inventory of academic textbooks, exam prep tools, and technical robotics documentation.",
};

export default function LibraryPage() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start">
      <main className="w-full flex flex-col">
        <LibraryHeader />
        <LibraryGrid />
        <LibraryOperations />
      </main>
    </div>
  );
}
