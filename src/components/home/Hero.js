"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/Herobg.jpg" // your generated African students image
          alt="Students"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay — left heavy, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/70 md:bg-none md:[background:linear-gradient(to_right,rgba(0,0,0,0.90),rgba(0,0,0,0.80),rgba(0,0,0,0.50))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6 max-w-2xl">
          <span className="text-sm font-bold tracking-widest text-secondary">
            Welcome to HigherSchools
          </span>

          <h1 className=" text-4xl uppercase md:text-5xl lg:text-6xl font-black leading-tight text-white">
            Where Nation <br />
            Builders Are Made
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            Empowering the next generation of leaders through world-class
            education, innovation, and a community built for excellence.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <Link
              href="/dashboard"
              className="btn-primary py-3 px-8 text-base font-bold rounded-full"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="py-3 px-8 text-base font-bold rounded-full border border-white/50 text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
