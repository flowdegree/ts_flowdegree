"use client"

import { Card } from "@/components/ui/card"
import { Eye, Bell, Shield, Zap, Code } from "lucide-react"

export function TechnologyWatchdogSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Eye className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Keep Watch So You Don't Have To
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            In today's day and age, it's almost impossible to keep track of all the technology changes. 
            APIs evolve, protocols update, security patches release, and frameworks deprecate features. 
            <strong className="text-foreground"> This is our bread and butter.</strong>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Bell, title: "Breaking Changes", desc: "Instant alerts on API deprecations" },
              { icon: Shield, title: "Security Updates", desc: "Critical vulnerability monitoring" },
              { icon: Zap, title: "Performance Shifts", desc: "Rate limit & endpoint changes" },
              { icon: Code, title: "Framework Evolution", desc: "Library updates & migrations" },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="bg-card/50 border-border p-3 lg:p-6 text-center">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-1 lg:mb-3" />
                  <h3 className="font-semibold text-foreground mb-0 lg:mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 