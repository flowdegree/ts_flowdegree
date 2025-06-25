"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Container,
  Code,
  Cpu,
  Shield,
  Workflow,
  Cloud,
  Settings,
  Network,
  Database,
  Search,
  GitBranch,
  Server,
  Zap,
  Bell,
  MessageSquare,
  Mail,
  Globe,
  Layers3,
} from "lucide-react"

const technologies = [
  { name: "Kubernetes", icon: Container, description: "Container orchestration at enterprise scale" },
  { name: "Docker", icon: Container, description: "Production-ready containerization" },
  { name: "Laravel", icon: Code, description: "Advanced PHP framework orchestration" },
  { name: "Python", icon: Code, description: "Versatile automation scripting" },
  { name: "Rust", icon: Cpu, description: "High-performance system programming" },
  { name: "PHP", icon: Code, description: "Web development and APIs" },
  { name: "TypeScript", icon: Code, description: "Type-safe JavaScript development" },
  { name: "JavaScript", icon: Code, description: "Dynamic web applications" },
  { name: "Apple Wallet", icon: Shield, description: "iOS payment integration mastery" },
  { name: "Windmill", icon: Workflow, description: "Workflow automation platform" },
  { name: "n8n", icon: Workflow, description: "Visual workflow automation and integration" },
  { name: "Terraform", icon: Cloud, description: "Infrastructure as code" },
  { name: "Ansible", icon: Settings, description: "Configuration management" },
  { name: "GraphQL", icon: Network, description: "Flexible API queries" },
  { name: "WebSockets", icon: Network, description: "Real-time communication" },
  { name: "Redis", icon: Database, description: "High-performance caching" },
  { name: "Docker Compose", icon: Container, description: "Multi-container applications" },
  { name: "Serverless", icon: Cloud, description: "Scalable cloud functions" },
  { name: "Elasticsearch", icon: Search, description: "Real-time search and analytics" },
  { name: "GitHub Actions", icon: GitBranch, description: "CI/CD automation" },
  { name: "Nginx", icon: Server, description: "Reverse proxy and load balancing" },
  { name: "FastAPI", icon: Zap, description: "High-performance Python APIs" },
  { name: "NPM Packages", icon: Code, description: "Custom package development" },
  { name: "Composer", icon: Code, description: "PHP package management" },
  { name: "Push Notifications", icon: Bell, description: "Mobile & web push delivery" },
  { name: "SMS Gateway", icon: MessageSquare, description: "Global SMS delivery systems" },
  { name: "Email Delivery", icon: Mail, description: "Transactional email automation" },
  { name: "Microservices", icon: Layers3, description: "Distributed architecture patterns" },
  { name: "CDN Networks", icon: Globe, description: "Global content delivery optimization" },
  { name: "Edge Computing", icon: Zap, description: "Ultra-low latency processing" },
]

export function TechnologyStackSection() {
  return (
    <section className="py-20 bg-muted/30" aria-labelledby="tech-stack-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="tech-stack-heading" className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From protocol mastery to serverless optimization and CDN networks, we leverage cutting-edge technologies including microservices and edge computing to build enterprise-grade solutions that scale globally.
          </p>
        </header>

        <div className="grid grid-cols-3 gap-3 lg:grid-cols-8 lg:gap-6" role="list" aria-label="Technology stack and expertise">
          {technologies.map((tech) => {
            const IconComponent = tech.icon
            return (
              <Card
                key={tech.name}
                className="group bg-card/50 border-none hover:border-border/70 transition-all duration-300 hover:shadow-lg hover:z-10 relative hover:scale-105"
                role="listitem"
              >
                <CardContent className="p-1 lg:p-4 text-center relative">
                  <IconComponent 
                    className="h-8 w-8 text-muted-foreground mx-auto mb-3 group-hover:text-foreground transition-colors" 
                    aria-hidden="true"
                  />
                  <h3 className="text-xs lg:text-sm font-normal lg:font-semibold text-foreground mb-0 lg:mb-2">{tech.name}</h3>
                  
                  {/* Expandable description overlay */}
                  <div 
                    className="absolute inset-x-0 top-full left-0 right-0 bg-card border border-border rounded-b-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto z-20"
                    role="tooltip"
                    aria-label={`${tech.name} description`}
                  >
                    <div className="p-3">
                      <p className="text-xs text-muted-foreground leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 