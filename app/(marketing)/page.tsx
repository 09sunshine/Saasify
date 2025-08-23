import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Section } from "@/components/shared/section"
import { FeatureCard } from "@/components/shared/feature-card"
import { TestimonialCard } from "@/components/shared/testimonial-card"
import { PricingCard } from "@/components/shared/pricing-card"
import { features, testimonials, pricingPlans, faqs, socialProofLogos } from "@/lib/data"
import { ArrowRight, Star } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            🎉 New: Dashboard Analytics & Team Features
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Launch faster with a <span className="text-primary">beautiful SaaS</span> starter
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Auth, theming, docs, and a polished dashboard—out of the box. Stop building the same features over and over.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="/auth/sign-up">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">View docs</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">Trusted by 1000+ developers</span>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section className="py-12 border-y bg-muted/30">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">Trusted by teams at leading companies</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {socialProofLogos.map((company) => (
              <Image
                key={company.name}
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to launch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop reinventing the wheel. Focus on what makes your product unique.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      {/* Feature Showcase */}
      <Section className="bg-muted/30">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Beautiful dashboard out of the box</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pre-built dashboard components with analytics, user management, billing, and settings. Fully responsive
              and accessible.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>Real-time analytics and metrics</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>User management and permissions</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>Billing and subscription management</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/modern-dashboard.png"
              alt="Dashboard preview"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by developers</h2>
          <p className="mt-4 text-lg text-muted-foreground">See what developers are saying about SaaSify</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section className="bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose the plan that's right for you</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/pricing">View detailed pricing</Link>
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">Everything you need to know about SaaSify</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to launch your SaaS?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers who have launched their SaaS products faster with SaaSify.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/sign-up">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">Contact sales</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">No credit card required • Cancel anytime • 14-day free trial</p>
        </div>
      </Section>
    </>
  )
}
