"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Section } from "@/components/shared/section"
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "@/components/shared/page-header"
import { PricingCard } from "@/components/shared/pricing-card"
import { pricingPlans, faqs } from "@/lib/data"
import { Check, X } from "lucide-react"

const featureComparison = [
  { feature: "Projects", free: "3", starter: "10", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Team members", free: "1", starter: "5", pro: "25", enterprise: "Unlimited" },
  { feature: "Storage", free: "1GB", starter: "10GB", pro: "100GB", enterprise: "Unlimited" },
  { feature: "API calls", free: "1,000/mo", starter: "10,000/mo", pro: "100,000/mo", enterprise: "Unlimited" },
  { feature: "Support", free: "Community", starter: "Email", pro: "Priority", enterprise: "Dedicated" },
  { feature: "Custom domain", free: false, starter: true, pro: true, enterprise: true },
  { feature: "Advanced analytics", free: false, starter: false, pro: true, enterprise: true },
  { feature: "White-label", free: false, starter: false, pro: true, enterprise: true },
  { feature: "SSO", free: false, starter: false, pro: false, enterprise: true },
  { feature: "SLA", free: false, starter: false, pro: false, enterprise: true },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <>
      <PageHeader className="text-center">
        <PageHeaderHeading>Simple, transparent pricing</PageHeaderHeading>
        <PageHeaderDescription>
          Choose the plan that's right for you. Upgrade or downgrade at any time.
        </PageHeaderDescription>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <span className={`text-sm ${!isYearly ? "font-medium" : "text-muted-foreground"}`}>Monthly</span>
          <Button variant="outline" size="sm" onClick={() => setIsYearly(!isYearly)} className="relative">
            <div className={`w-12 h-6 rounded-full transition-colors ${isYearly ? "bg-primary" : "bg-muted"}`}>
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${isYearly ? "translate-x-6" : "translate-x-0.5"}`}
              />
            </div>
          </Button>
          <span className={`text-sm ${isYearly ? "font-medium" : "text-muted-foreground"}`}>
            Yearly
            <Badge variant="secondary" className="ml-2">
              Save 20%
            </Badge>
          </span>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} isYearly={isYearly} />
          ))}
        </div>
      </Section>

      {/* Feature Comparison */}
      <Section className="bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Compare features</h2>
            <p className="mt-4 text-lg text-muted-foreground">See what's included in each plan</p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Features</th>
                      <th className="text-center p-4 font-medium">Free</th>
                      <th className="text-center p-4 font-medium">Starter</th>
                      <th className="text-center p-4 font-medium">Pro</th>
                      <th className="text-center p-4 font-medium">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureComparison.map((row, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          {typeof row.free === "boolean" ? (
                            row.free ? (
                              <Check className="h-4 w-4 text-accent mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            row.free
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof row.starter === "boolean" ? (
                            row.starter ? (
                              <Check className="h-4 w-4 text-accent mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            row.starter
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof row.pro === "boolean" ? (
                            row.pro ? (
                              <Check className="h-4 w-4 text-accent mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            row.pro
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof row.enterprise === "boolean" ? (
                            row.enterprise ? (
                              <Check className="h-4 w-4 text-accent mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            row.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing FAQ</h2>
            <p className="mt-4 text-lg text-muted-foreground">Common questions about our pricing</p>
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
    </>
  )
}
