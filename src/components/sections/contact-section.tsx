"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/root@flowdegree.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New inquiry from ${formData.name}`,
          _captcha: "false"
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="">
          <header className="text-center mb-12">
            <h2 id="contact-heading" className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-muted-foreground">Ready to automate your processes? Get in touch with us.</p>
          </header>

          <Card className="bg-card/80 border-border">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                      disabled={isSubmitting}
                      aria-label="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Your Email</label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                      disabled={isSubmitting}
                      aria-label="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Your Message</label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your automation challenge..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary min-h-[120px]"
                      required
                      disabled={isSubmitting}
                      aria-label="Your message describing your automation challenge"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? "Sending your message, please wait" : "Send your message to FlowDegree"}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Mail className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 