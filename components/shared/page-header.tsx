import type React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  children: React.ReactNode
  className?: string
}

export function PageHeader({ children, className }: PageHeaderProps) {
  return <div className={cn("flex flex-col space-y-4 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32", className)}>{children}</div>
}

interface PageHeaderHeadingProps {
  children: React.ReactNode
  className?: string
}

export function PageHeaderHeading({ children, className }: PageHeaderHeadingProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]",
        className,
      )}
    >
      {children}
    </h1>
  )
}

interface PageHeaderDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function PageHeaderDescription({ children, className }: PageHeaderDescriptionProps) {
  return <p className={cn("max-w-2xl text-lg text-muted-foreground sm:text-xl", className)}>{children}</p>
}
