import AboutHero from "@/components/AboutPage/Hero";
import Philosophy from "@/components/AboutPage/Philosophy";
import Leadership from "@/components/AboutPage/Leadership";
import Milestones from "@/components/AboutPage/Milestones";
import AdmissionsCta from "@/components/AboutPage/Admissions";

export const metadata = {
  title: "About Us | HigherSchools",
  description:
    "Learn more about our core philosophy, leadership team, and track record of academic excellence.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start">
      <main className="w-full flex flex-col">
        <AboutHero />
        <Philosophy />
        <Leadership />
        <Milestones />
        <AdmissionsCta />
      </main>
    </div>
  );
}
