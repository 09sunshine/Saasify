import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/shared/section"
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "@/components/shared/page-header"
import { BookOpen, Code, Palette, Shield, Zap, Users } from "lucide-react"

const docSections = [
  {
    title: "Getting Started",
    description: "Quick setup guide and installation instructions",
    icon: Zap,
    href: "/docs/getting-started",
    badge: "Start here",
  },
  {
    title: "Authentication",
    description: "Configure NextAuth.js and manage user sessions",
    icon: Shield,
    href: "/docs/authentication",
  },
  {
    title: "Theming",
    description: "Customize colors, fonts, and design tokens",
    icon: Palette,
    href: "/docs/theming",
  },
  {
    title: "Components",
    description: "Reusable UI components and patterns",
    icon: Code,
    href: "/docs/components",
  },
  {
    title: "Dashboard",
    description: "Build and customize dashboard pages",
    icon: Users,
    href: "/docs/dashboard",
  },
  {
    title: "API Reference",
    description: "Complete API documentation and examples",
    icon: BookOpen,
    href: "/docs/api",
  },
]

export default function DocsPage() {
  return (
    <>
      <PageHeader className="text-center">
        <PageHeaderHeading>Documentation</PageHeaderHeading>
        <PageHeaderDescription>Everything you need to know to get started with SaaSify</PageHeaderDescription>
      </PageHeader>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {docSections.map((section) => {
            const Icon = section.icon
            return (
              <Link key={section.href} href={section.href}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="h-8 w-8 text-primary" />
                      {section.badge && <Badge variant="secondary">{section.badge}</Badge>}
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need help?</h2>
          <p className="text-muted-foreground mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link href="/contact" className="text-primary hover:underline">
              Contact Support
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/community" className="text-primary hover:underline">
              Join Community
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
