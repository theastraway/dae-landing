import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stack } from "@/components/Stack";
import { TeamModel } from "@/components/TeamModel";
import { WhatDaeDoes } from "@/components/WhatDaeDoes";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#1a1410]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <WhatDaeDoes />
        <Stack />
        <TeamModel />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
