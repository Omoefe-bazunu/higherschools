import EventsHeader from "@/components/EventsPage/Hero";
import EventsGrid from "@/components/EventsPage/Grid";
import PastHighlights from "@/components/EventsPage/Past";

export const metadata = {
  title: "Campus Events & Calendars | HigherSchools",
  description:
    "Stay updated on our latest academic tech expos, sport festivals, and parent-teacher open days.",
};

export default function EventsPage() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start">
      <main className="w-full flex flex-col">
        <EventsHeader />
        <EventsGrid />
        <PastHighlights />
      </main>
    </div>
  );
}
