"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import {
  Bot,
  Zap,
  Smartphone,
  Package,
  Container,
  Layers,
  RefreshCw,
  Bell,
  Eye,
  Globe,
  Layers3,
  Gauge,
  Users,
  Search,
} from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-20 bg-primary/5" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Specialized Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From protocol mastery and serverless optimization to multi-channel notifications and technology monitoring - we deliver enterprise solutions that scale globally while keeping watch on the ever-changing tech landscape.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" role="list" aria-label="Our specialized services and expertise">
          {[
            { 
              icon: Bot, 
              title: "Bot Development", 
              desc: "Intelligent automation bots that revolutionize workflows across platforms",
              features: ["Discord Bots", "Telegram Bots", "Slack Integrations", "Custom Chatbots"]
            },
            { 
              icon: Zap, 
              title: "Protocol & API Mastery", 
              desc: "We play protocols and APIs like never before - public, private, and everything in between",
              features: ["Private API Discovery", "Protocol Reverse Engineering", "Custom API Clients", "Real-time Integrations"]
            },
            { 
              icon: Smartphone, 
              title: "Apple Technologies", 
              desc: "Deep expertise in Apple ecosystems, from Wallet integrations to native iOS solutions",
              features: ["Apple Wallet Integration", "iOS Payment Systems", "Apps Development", "Apple Watch Development"]
            },
            { 
              icon: Package, 
              title: "Custom Package Development", 
              desc: "We create and publish packages for NPM, Composer, and other package managers",
              features: ["NPM Packages", "Composer Libraries", "PyPI Distributions", "Custom SDKs"]
            },
            { 
              icon: Container, 
              title: "Laravel & Containerization", 
              desc: "Laravel containerization and orchestration expertise that sets new standards",
              features: ["Laravel Docker Templates", "K8s Orchestration", "Production Optimization", "Auto-scaling Setup"]
            },
            { 
              icon: Layers, 
              title: "Production Docker Templates", 
              desc: "Meticulously crafted, production-ready Docker templates and container images",
              features: ["Optimized Images", "Multi-stage Builds", "Security Hardening", "Performance Tuning"]
            },
            { 
              icon: RefreshCw, 
              title: "Data Migration Mastery", 
              desc: "Comprehensive migration scripts handling transitions from almost any system to any system",
              features: ["Database Migrations", "Service Provider Transfers", "Content Migrations", "Zero-downtime Moves"]
            },
            { 
              icon: Bell, 
              title: "Multi-Channel Notifications", 
              desc: "Comprehensive notification delivery across mobile, SMS, and email channels",
              features: ["Push Notifications", "SMS Delivery", "Email Automation", "Cross-Platform Alerts"]
            },
            { 
              icon: Eye, 
              title: "Technology Watchdog", 
              desc: "We keep our eyes open at technology changes so you don't need to - this is our bread and butter",
              features: ["API Monitoring", "Breaking Changes", "Security Updates", "Tech Stack Evolution"]
            },
            { 
              icon: Gauge, 
              title: "Performance Optimization", 
              desc: "We optimize with serverless, microservices, and CDNs for maximum performance and scalability",
              features: ["Serverless Architecture", "Microservices Design", "CDN Integration", "Edge Computing"]
            },
            { 
              icon: Globe, 
              title: "Web Scraping & Extraction", 
              desc: "Advanced data extraction that bypasses modern anti-bot systems",
              features: ["Dynamic Content", "Anti-Bot Bypass", "Data Processing", "Scheduled Extraction"]
            },
            { 
              icon: Users, 
              title: "Accessibility & i18n", 
              desc: "WCAG 2.1 AA compliance and internationalization (i18n) for global reach",
              features: ["WCAG 2.1 AA Standards", "Screen Reader Support", "Multi-language Support", "RTL Text Direction"]
            },
            { 
              icon: Search, 
              title: "SEO Optimization", 
              desc: "Technical SEO, structured data, and search engine optimization for maximum visibility",
              features: ["Technical SEO Audits", "Schema.org Markup", "Core Web Vitals", "Search Console Setup"]
            },
          ].map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-card/50 border-border hover:border-border/70 transition-all duration-300 hover:scale-105 group"
                role="listitem"
              >
                <CardContent className="p-2 lg:p-6 text-center">
                  <IconComponent 
                    className="h-12 w-12 text-muted-foreground mx-auto mb-4 group-hover:text-primary transition-colors" 
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="text-sm text-muted-foreground space-y-1" role="list" aria-label={`${service.title} features`}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center" role="listitem">
                        <CheckCircle className="h-3 w-3 text-primary mr-2" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 