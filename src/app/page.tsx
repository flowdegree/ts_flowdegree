"use client"

import { ModeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import {
  HeroSection,
  TechnologyStackSection,
  TechnologyWatchdogSection,
  CodeShowcaseSection,
  ServicesSection,
  ContactSection,
  FooterSection,
} from "@/components/sections"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background/95 to-background rounded-md lg:rounded-xl shadow-lg shadow-primary/40">
      {/* Skip to main content link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 transition-all"
      >
        Skip to main content
      </a>
      
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-4" role="banner" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/icon0.svg" 
              alt="FlowDegree Logo" 
              width={32} 
              height={32}
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
            <span className="text-lg font-semibold text-foreground hidden sm:inline">
              FlowDegree
            </span>
          </div>
          <ModeToggle />
        </div>
      </nav>

      <main id="main-content" role="main">
        <HeroSection />
        <ServicesSection />
        <CodeShowcaseSection />
        <TechnologyStackSection />
        <TechnologyWatchdogSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
