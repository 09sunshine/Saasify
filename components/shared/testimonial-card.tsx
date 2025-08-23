import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar: string
}

export function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4">"{content}"</p>
        <div className="flex items-center space-x-3">
          <Image src={avatar || "/placeholder.svg"} alt={name} width={40} height={40} className="rounded-full" />
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
