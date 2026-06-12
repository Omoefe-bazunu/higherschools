import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: "Admissions", href: "/admissions" },
    { name: "Innovations & Awards", href: "/innovations" },
    { name: "Live Stream", href: "/live-stream" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ];

  return (
    <footer className="w-full bg-card border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-4">
            <span className="font-heading text-xl font-black tracking-tight text-primary">
              HIGHER<span className="text-secondary">SCHOOLS</span>
            </span>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
              A simple platform built to make school management easy, organize
              resources, and keep teachers, students, and parents connected.
            </p>
          </div>

          {/* Column 2: Academics & Innovation links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Academics & Life
            </h3>
            <ul className="flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory governance links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              COMPLIANCE & LEGAL
            </h3>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-light text-center sm:text-left">
            &copy; {currentYear} HigherSchools. Built and maintained by HIGH-ER
            ENTERPRISES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
