"use client"

import { Github } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 text-center">
        <nav className="flex items-center justify-center gap-2 mb-4" aria-label="Social media links">
          <a 
            href="https://github.com/flowdegree" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline"
            aria-label="Follow FlowDegree on GitHub (opens in new tab)"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            <span>Follow us on GitHub</span>
          </a>
        </nav>
        <p className="text-muted-foreground">© 2024 FlowDegree. Transforming ideas into seamless automations.</p>
      </div>
    </footer>
  )
} 