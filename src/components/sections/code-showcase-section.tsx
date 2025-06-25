"use client";

import { CodeEditor } from "@/components/code-editor";

const botScrapingCode = `// Smart Web Scraping Bot - Native TypeScript
interface ScrapeResult {
  url: string;
  status: 'success' | 'failed';
  data?: string;
  time: number;
  headers?: Record<string, string>;
}

interface ScrapingConfig {
  userAgent: string;
  timeout: number;
  retries: number;
  delay: number;
}

class WebScrapingBot {
  private config: ScrapingConfig = {
    userAgent: 'FlowDegree-Bot/2.0',
    timeout: 10000,
    retries: 3,
    delay: 500
  };

  async scrapeUrls(urls: string[]): Promise<ScrapeResult[]> {
    console.log('🚀 Starting scraping session...');
    const results: ScrapeResult[] = [];
    
    for (const url of urls) {
      console.log('🤖 Processing:', url);
      
      const result = await this.scrapeWithRetry(url);
      results.push(result);
      
      // Respectful delay between requests
      await this.delay(this.config.delay);
    }
    
    this.printSummary(results);
    return results;
  }

  private async scrapeWithRetry(url: string): Promise<ScrapeResult> {
    for (let attempt = 1; attempt <= this.config.retries; attempt++) {
      try {
        const startTime = performance.now();
        
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': this.config.userAgent,
            'Accept': 'text/html,application/json,*/*',
            'Accept-Language': 'en-US,en;q=0.9'
          },
          signal: AbortSignal.timeout(this.config.timeout)
        });

        if (!response.ok) {
          throw new Error('HTTP ' + response.status + ': ' + response.statusText);
        }

        const data = await response.text();
        const time = Math.round(performance.now() - startTime);
        
        const result: ScrapeResult = {
          url,
          status: 'success',
          data: this.extractPreview(data),
          time,
          headers: this.getResponseHeaders(response)
        };
        
        console.log('✅ Success:', url, '(' + time + 'ms)');
        return result;
        
      } catch (error) {
        console.log('⚠️  Attempt', attempt, 'failed for', url + ':', error.message);
        
        if (attempt === this.config.retries) {
          console.log('❌ Final failure:', url);
          return {
            url,
            status: 'failed',
            time: 0
          };
        }
        
        // Exponential backoff
        await this.delay(this.config.delay * attempt);
      }
    }
  }

  private extractPreview(html: string): string {
    // Extract title or first meaningful content
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      return 'Title: ' + titleMatch[1].trim();
    }
    
    // Fallback to first 100 chars of cleaned text
    const cleanText = html.replace(/<[^>]*>/g, '').trim();
    return cleanText.slice(0, 100) + '...';
  }

  private getResponseHeaders(response: Response): Record<string, string> {
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    return headers;
  }

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private printSummary(results: ScrapeResult[]): void {
    const successful = results.filter(r => r.status === 'success').length;
    const failed = results.length - successful;
    const avgTime = results
      .filter(r => r.status === 'success')
      .reduce((sum, r) => sum + r.time, 0) / successful || 0;

    console.log('\\n📊 Scraping Summary:');
    console.log('✅ Successful:', successful);
    console.log('❌ Failed:', failed);
    console.log('⏱️  Average time:', Math.round(avgTime) + 'ms');
  }
}

// Usage Example
const bot = new WebScrapingBot();

const targetUrls = [
  'https://example.com',
  'https://httpbin.org/json',
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://api.github.com/users/octocat'
];

// Execute scraping
bot.scrapeUrls(targetUrls).then(results => {
  console.log('\\n🎯 All results:', results);
  
  // Process successful results
  const successfulScrapes = results.filter(r => r.status === 'success');
  successfulScrapes.forEach(result => {
    console.log('📄', result.url, '->', result.data);
  });
});`;

export function CodeShowcaseSection() {
    return (
        <section className="py-20" aria-labelledby="code-showcase-heading">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left side - Text content */}
                    <div className="space-y-6">
                        <header>
                            <h2 id="code-showcase-heading" className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Professional Web Scraping in Action</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                See how we build enterprise-grade scraping bots with native TypeScript, featuring retry logic, error handling, and performance monitoring.
                            </p>
                        </header>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-foreground">Key Features:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        <strong className="text-foreground">Retry Logic:</strong> Exponential backoff with configurable attempts
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        <strong className="text-foreground">Error Handling:</strong> Graceful failures with detailed logging
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        <strong className="text-foreground">Performance Monitoring:</strong> Precise timing and success metrics
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        <strong className="text-foreground">Content Extraction:</strong> Smart title detection and text processing
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span className="text-muted-foreground">
                                        <strong className="text-foreground">Respectful Scraping:</strong> Rate limiting and timeout controls
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4">
                            <p className="text-sm text-muted-foreground italic">
                                Built with enterprise-grade TypeScript patterns for production environments.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Code editor */}
                    <div className="lg:sticky lg:top-8">
                        <CodeEditor 
                            lang="typescript"
                            title="WebScrapingBot.ts"
                            copyButton={true}
                            writing={false}
                            className="w-full h-[600px]"
                        >
                            {botScrapingCode}
                        </CodeEditor>
                    </div>
                </div>
            </div>
        </section>
    );
}
