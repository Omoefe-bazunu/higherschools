import { BookOpen, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      title: "Center of Learning",
      description:
        "A warm space where passionate teachers guide students to discover their talents and love learning every single day.",
      imageClass: "bg-[url('/home/ABT1.jpg')]",
      icon: BookOpen,
      accent: "from-primary to-primary/60",
      glow: "hover:shadow-primary/20",
      iconBg: "bg-primary/20 text-primary",
    },
    {
      title: "Innovation & Growth",
      description:
        "We inspire bright minds to build new things, solve real problems, and grow into bold, creative global leaders.",
      imageClass: "bg-[url('/home/ABT2.jpg')]",
      icon: Lightbulb,
      accent: "from-secondary to-secondary/60",
      glow: "hover:shadow-secondary/20",
      iconBg: "bg-secondary/20 text-secondary",
    },
    {
      title: "Socialization & Impact",
      description:
        "Our students connect deeply, build lifelong friendships, and learn how to make a lasting, positive difference in the world.",
      imageClass: "bg-[url('/home/ABT3.jpg')]",
      icon: Users,
      accent: "from-primary to-secondary",
      glow: "hover:shadow-primary/20",
      iconBg: "bg-white/10 text-white",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-card py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Left Block */}
          <div className="w-full lg:w-5/12 flex flex-col gap-5 text-left lg:sticky lg:top-28">
            <label className="uppercase tracking-[0.2em] font-bold text-sm text-secondary">
              Who We Are
            </label>
            <h2 className="font-heading text-display-sm md:text-display-md font-black text-foreground leading-tight">
              A Place Where <span className="text-primary">Every Child</span>{" "}
              Counts.
            </h2>
            <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light">
              HigherSchools is a vibrant community dedicated to raising the next
              generation of global impact builders. We blend rigorous academics
              with creative discovery and deep social character. Here, every
              student is seen, supported, and fully equipped to turn their
              biggest dreams into reality.
            </p>

            {/* Stat strip */}
            <div className="mt-4 flex items-center gap-8 border-t border-border pt-6">
              <div>
                <p className="text-2xl font-black text-foreground font-heading">
                  12k+
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Students
                </p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-black text-foreground font-heading">
                  98%
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Pass Rate
                </p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div>
                <p className="text-2xl font-black text-foreground font-heading">
                  15+
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Years
                </p>
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-3xl overflow-hidden group flex flex-col justify-end min-h-[260px] hover:shadow-2xl ${pillar.glow} transition-all duration-500 cursor-default`}
                >
                  {/* Image */}
                  <div
                    className={`absolute inset-0 z-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ${pillar.imageClass}`}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 z-10 bg-slate-950/70 group-hover:bg-slate-950/80 transition-colors duration-500" />

                  {/* Accent top bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r ${pillar.accent}`}
                  />

                  {/* Content */}
                  <div className="relative z-20 flex flex-col gap-3 p-7">
                    {/* Icon badge */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1 ${pillar.iconBg}`}
                    >
                      <Icon size={17} />
                    </div>

                    <h3 className="font-heading text-lg font-black tracking-tight text-white group-hover:text-secondary transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
