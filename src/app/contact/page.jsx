import ContactHeader from "@/components/ContactPage/Hero";
import ContactForm from "@/components/ContactPage/Form";
import CampusMap from "@/components/ContactPage/Map";

export const metadata = {
  title: "Contact Our Office | HigherSchools",
  description:
    "Get in touch with our admissions coordinators or technical portal desks instantly.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start">
      <main className="w-full flex flex-col">
        {/* Section 1: Top Navigation Banner */}
        <ContactHeader />

        {/* Section 2: Split-Screen Form & Address Metrics Channels */}
        <ContactForm />

        {/* Section 3: Full-Width Map Anchor Frame */}
        <CampusMap />
      </main>
    </div>
  );
}
