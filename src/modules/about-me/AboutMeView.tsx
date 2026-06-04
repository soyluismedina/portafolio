"use client";

import { useLanguage } from "@/hooks/useLanguage";

const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Clerk",
  "Supabase",
  "Zustand",
  "Node.js",
  "Git",
];

export default function AboutMeView() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="text-2xl font-semibold text-foreground">
            {t["about.title"]}
          </h2>
          <div className="flex-1 h-px bg-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {t["about.description"]}
            </p>

            <div className="flex items-center gap-3 py-4">
              <span className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent"></span>
              <span className="font-mono text-primary text-sm glow">
                {t["about.experienceYears"]}
              </span>
              <span className="h-px flex-1 bg-linear-to-l from-primary/50 to-transparent"></span>
            </div>

            <div>
              <h3 className="font-mono text-primary text-sm mb-4">
                {t["about.tech"]}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm text-muted-foreground link-hover"
                  >
                    <span className="text-primary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imagen/Avatar con efecto mejorado */}
          <div className="relative group mx-auto md:mx-0 card-hover">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-xl shadow-primary/10">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src="/generatedimage.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            {/* Borde decorativo con animación */}
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
