import { EmptyState } from "@/components/shared/empty-state"
import { BarChart3 } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">Detailed insights into your application performance.</p>
      </div>

      <EmptyState
        icon={BarChart3}
        title="Analytics Coming Soon"
        description="We're working on bringing you detailed analytics and insights. Check back soon!"
        action={{
          label: "Back to Dashboard",
          onClick: () => window.history.back(),
        }}
      />
    </div>
  )
}
