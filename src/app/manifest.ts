import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Frontend Developer — Portfolio - Luis Medina",
    short_name: "Luis Medina",
    description: "Frontend Developer — Portfolio - Luis Medina",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
