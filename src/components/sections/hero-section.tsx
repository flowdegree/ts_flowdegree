"use client"

import { Button } from "@/components/ui/button"
import { Bot, Zap, Database, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-gradient-to-r from-muted/40 to-muted/5" aria-hidden="true" />
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse" aria-hidden="true">
        <Bot className="h-8 w-8 text-muted-foreground/30" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000" aria-hidden="true">
        <Zap className="h-6 w-6 text-muted-foreground/30" />
      </div>
      <div className="absolute bottom-20 left-20 animate-pulse delay-2000" aria-hidden="true">
        <Database className="h-10 w-10 text-muted-foreground/30" />
      </div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <header className="text-center max-w-4xl mx-auto">
          <h1 id="hero-heading" className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Bots, Automations &{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Integrations
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-10 font-thin leading-relaxed max-w-3xl mx-auto" role="doc-subtitle">
            We play protocols like never before, master both public and private APIs, and optimize with serverless, microservices, and CDNs. We keep our eyes on technology changes so you don't need to - this is our bread and butter.
          </p>
          <Button
            size="lg"
            className="px-8 py-6 text-normal lg:text-lg font-normal rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Navigate to contact form to discuss your project"
          >
            Let's Discuss Your Challenging Idea
            <ArrowRight className="ml-1 lg:ml-2" aria-hidden="true" />
          </Button>
        </header>
      </div>
    </section>
  )
} 