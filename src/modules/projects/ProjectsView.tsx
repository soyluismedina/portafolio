"use client";
import apps from "@/apps.json";
import { useLanguage } from "@/hooks/useLanguage";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectsView() {
  const { t } = useLanguage();

  return (
    <section id="work" className="min-h-screen w-full mx-auto pb-7">
      <div className="max-w-5xl pt-32 mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-primary text-sm">01.</span>
          <h2 className="text-2xl font-semibold text-foreground">
            {t["work.title"]}
          </h2>
          <div className="flex-1 h-px bg-border ml-4"></div>
        </div>

        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          {t["projects.selection"]}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {apps.map((project, idx) => (
            <article
              key={idx}
              className="group relative bg-card border border-border/50 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col grow h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.name}
                  loading="eager"
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 grow flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tecnologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="flex gap-3 h-full  "
                  style={{ alignItems: "self-end" }}
                >
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t["projects.demo"]}
                    </Link>
                  )}
                  {project.repositorio && (
                    <Link
                      href={project.repositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-md hover:bg-muted transition-colors text-sm font-medium"
                    >
                      <FaGithub className="w-4 h-4" />
                      {t["projects.code"]}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
