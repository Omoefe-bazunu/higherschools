import TermsHeader from "@/components/TermsPage/Hero";
import TermsContent from "@/components/TermsPage/Content";

export const metadata = {
  title: "Terms & Conditions | HigherSchools",
  description:
    "Read our straightforward terms of service agreement outlining the user rules for our secondary school resources.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start">
      <main className="w-full flex flex-col">
        <TermsHeader />
        <TermsContent />
      </main>
    </div>
  );
}
