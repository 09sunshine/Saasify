"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  name: string
  price: { monthly: number | string; yearly: number | string }
  description: string
  features: string[]
  cta: string
  popular?: boolean
  isYearly?: boolean
}

export function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  popular = false,
  isYearly = false,
}: PricingCardProps) {
  const currentPrice = isYearly ? price.yearly : price.monthly
  const savings =
    typeof price.monthly === "number" && typeof price.yearly === "number"
      ? Math.round(((price.monthly * 12 - price.yearly) / (price.monthly * 12)) * 100)
      : 0

  return (
    <Card className={cn("relative", popular && "border-primary shadow-lg")}>
      {popular && (
        <Badge className="absolute -top-2 left-1/2 -translate-x-1/2" variant="default">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold">
            {typeof currentPrice === "number" ? `$${currentPrice}` : currentPrice}
          </span>
          {typeof currentPrice === "number" && (
            <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
          )}
        </div>
        {isYearly && savings > 0 && <p className="text-sm text-accent font-medium">Save {savings}% annually</p>}
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-accent" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={popular ? "default" : "outline"}>
          {cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
