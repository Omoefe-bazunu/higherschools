import PrivacyHeader from "@/components/PrivacyPage/Hero";
import PrivacyContent from "@/components/PrivacyPage/Content";

export const metadata = {
  title: "Privacy Policy & Data Security | HigherSchools",
  description:
    "Read our transparent plain-words summary outlining how we collect, safeguard, and secure your personal details.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start">
      <main className="w-full flex flex-col">
        <PrivacyHeader />
        <PrivacyContent />
      </main>
    </div>
  );
}
