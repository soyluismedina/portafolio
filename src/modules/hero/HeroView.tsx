"use client";
import { useLanguage } from "@/hooks/useLanguage";
import { useNavigation } from "@/hooks/useNavegation";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroView() {
  const { t } = useLanguage();
  const { scrollToSection } = useNavigation();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-5xl w-full">
        <div className="flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground">
            {t["hero.available"]}
          </span>
        </div>

        <p className="font-mono text-primary mb-4">{t["hero.greeting"]}</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
          {t["hero.name"]}
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8 tracking-tight">
          {t["hero.role"]}
        </h2>

        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-12">
          {t["hero.intro"]}
        </p>

        <div className="flex items-center gap-6 mb-12">
          <a
            title="GitHub"
            href="https://github.com/soyluismedina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/soyluismedina/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:lamc3005@gmail.com"
            target="_blank"
            title="Email"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("work")}
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors group font-mono text-sm"
        >
          {t["hero.cta"]}
          <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
