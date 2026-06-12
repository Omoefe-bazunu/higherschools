import HeroSection from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import WhatWeOfferSection from "@/components/home/WhatWeOffer";
import Testimonial from "@/components/home/Testimonial";
import Faq from "@/components/home/Faq";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start">
      <main className="w-full flex flex-col">
        <HeroSection />
        <AboutSection />
        <WhatWeOfferSection />
        <Testimonial />
        <Faq />
        <Newsletter />
      </main>
    </div>
  );
}
