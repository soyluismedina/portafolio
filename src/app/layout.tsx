import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const _inter = Inter({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Developer — Portfolio - Luis Medina",
  description:
    "Desarrollador Frontend especializado en React, Next.js y experiencias web modernas.",
  keywords:
    "frontend, developer, react, nextjs, typescript, javascript, portfolio, luis medina, lamc305, ingenerio, luis, medina, soyluismedina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning className={`font-sans antialiased`}>
        {children}
      </body>
      <SpeedInsights />
    </html>
  );
}
