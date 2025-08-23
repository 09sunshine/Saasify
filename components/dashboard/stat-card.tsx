import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { AnimatedCounter } from "@/components/shared/animated-counter"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down"
}

export function StatCard({ title, value, change, trend }: StatCardProps) {
  // Extract numeric value for animation
  const numericValue = Number.parseInt(value.replace(/[^0-9]/g, "")) || 0
  const prefix = value.match(/^[^0-9]*/)?.[0] || ""
  const suffix = value.match(/[^0-9]*$/)?.[0] || ""

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {trend === "up" ? (
          <TrendingUp className="h-4 w-4 text-accent" />
        ) : (
          <TrendingDown className="h-4 w-4 text-destructive" />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {numericValue > 0 ? <AnimatedCounter value={numericValue} prefix={prefix} suffix={suffix} /> : value}
        </div>
        <p className={cn("text-xs", trend === "up" ? "text-accent" : "text-destructive")}>{change}</p>
      </CardContent>
    </Card>
  )
}
