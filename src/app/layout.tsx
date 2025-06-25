import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FlowDegree - Bots, Automations & Integrations",
    template: "%s | FlowDegree"
  },
  description: "Professional automation and integration services. We specialize in bots, web scraping, API development, serverless optimization, and cutting-edge technologies like Rust, PHP, Kubernetes, Docker, and microservices.",
  keywords: [
    "automation",
    "bots",
    "integrations",
    "API development",
    "web scraping",
    "reverse engineering",
    "Python",
    "Kubernetes",
    "Docker",
    "TypeScript",
    "workflow automation",
    "Rust",
    "PHP",
    "serverless",
    "microservices",
    "CDN",
    "edge computing",
    "Queues",
    "Pipelines",
    "API development",
    "accessibility",
    "WCAG 2.1 AA",
    "internationalization",
    "i18n",
    "n8n",
    "workflow automation",
    "SEO optimization",
    "technical SEO",
    "structured data",
    "schema markup",
    "search engine optimization",
    "Core Web Vitals",
  ],
  authors: [{ name: "FlowDegree" }],
  creator: "FlowDegree",
  publisher: "FlowDegree",
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? "https://flowdegree.com" 
    : "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FlowDegree - Bots, Automations & Integrations",
    description: "Professional automation and integration services. We specialize in bots, web scraping, API development, and serverless optimization.",
    url: process.env.NODE_ENV === 'production' 
      ? "https://flowdegree.com" 
      : "http://localhost:3000",
    siteName: "FlowDegree",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "FlowDegree - Automation & Integration Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowDegree - Bots, Automations & Integrations",
    description: "Professional automation and integration services. We specialize in bots, web scraping, API development, and serverless optimization.",
    images: ["/web-app-manifest-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="FlowDegree" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FlowDegree",
              "url": process.env.NODE_ENV === 'production' 
                ? "https://flowdegree.com" 
                : "http://localhost:3000",
              "logo": (process.env.NODE_ENV === 'production' 
                ? "https://flowdegree.com" 
                : "http://localhost:3000") + "/icon1.png",
              "description": "Transform your ideas into seamless automations and integrations. We tackle complex problems with precision using cutting-edge technologies.",
              "email": "root@flowdegree.com",
              "sameAs": [],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "root@flowdegree.com",
                "contactType": "customer service"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "FlowDegree Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bot Development",
                      "description": "Intelligent automation bots that revolutionize workflows across platforms"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Protocol & API Mastery",
                      "description": "We play protocols and APIs like never before - public, private, and everything in between"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Apple Technologies Integration",
                      "description": "Deep expertise in Apple ecosystems, from Wallet integrations to native iOS solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Package Development",
                      "description": "We create and publish packages for NPM, Composer, and other package managers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Laravel & Containerization",
                      "description": "Laravel containerization and orchestration expertise that sets new standards"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Production Docker Templates",
                      "description": "Meticulously crafted, production-ready Docker templates and container images"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Data Migration Mastery",
                      "description": "Comprehensive migration scripts handling transitions from almost any system to any system"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Multi-Channel Notifications",
                      "description": "Comprehensive notification delivery across mobile, SMS, and email channels"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Technology Watchdog",
                      "description": "We keep our eyes open at technology changes so you don't need to - this is our bread and butter"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Performance Optimization",
                      "description": "We optimize with serverless, microservices, and CDNs for maximum performance and scalability"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Scraping & Extraction",
                      "description": "Advanced data extraction that bypasses modern anti-bot systems"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Accessibility & Internationalization",
                      "description": "WCAG 2.1 AA compliance and internationalization (i18n) for global reach"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Optimization",
                      "description": "Technical SEO, structured data, and search engine optimization for maximum visibility"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-neutral-200 dark:bg-neutral-900 p-2 lg:p-4`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
