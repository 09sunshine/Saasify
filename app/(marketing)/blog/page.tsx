import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/shared/section"
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from "@/components/shared/page-header"
import { Calendar, Clock, User } from "lucide-react"

const blogPosts = [
  {
    title: "Building a Modern SaaS with Next.js 14",
    description:
      "Learn how to build a production-ready SaaS application using the latest Next.js features and best practices.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Tutorial",
    image: "/nextjs-development.png",
    slug: "building-modern-saas-nextjs-14",
  },
  {
    title: "Authentication Best Practices for SaaS",
    description: "Comprehensive guide to implementing secure authentication in your SaaS application with NextAuth.js.",
    author: "Marcus Rodriguez",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Security",
    image: "/authentication-security.png",
    slug: "authentication-best-practices-saas",
  },
  {
    title: "Designing Beautiful Dark Mode Interfaces",
    description: "Tips and techniques for creating stunning dark mode experiences that users will love.",
    author: "Emily Watson",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Design",
    image: "/dark-mode-interface.png",
    slug: "designing-beautiful-dark-mode-interfaces",
  },
  {
    title: "Optimizing Performance in React Applications",
    description:
      "Advanced techniques for improving the performance of your React applications and reducing bundle size.",
    author: "David Kim",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Performance",
    image: "/react-performance-optimization.png",
    slug: "optimizing-performance-react-applications",
  },
  {
    title: "Building Scalable APIs with Next.js",
    description: "Learn how to design and implement scalable API routes in Next.js for your growing SaaS application.",
    author: "Lisa Park",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Backend",
    image: "/placeholder-1pn2p.png",
    slug: "building-scalable-apis-nextjs",
  },
  {
    title: "The Complete Guide to TypeScript in 2024",
    description: "Everything you need to know about TypeScript, from basics to advanced patterns and best practices.",
    author: "Alex Johnson",
    date: "2023-12-15",
    readTime: "15 min read",
    category: "TypeScript",
    image: "/typescript-programming-guide.png",
    slug: "complete-guide-typescript-2024",
  },
]

const categories = ["All", "Tutorial", "Security", "Design", "Performance", "Backend", "TypeScript"]

export default function BlogPage() {
  return (
    <>
      <PageHeader className="text-center">
        <PageHeaderHeading>Blog</PageHeaderHeading>
        <PageHeaderDescription>
          Insights, tutorials, and best practices for building modern SaaS applications
        </PageHeaderDescription>
      </PageHeader>

      <Section>
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
