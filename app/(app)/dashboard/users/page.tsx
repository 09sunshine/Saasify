'use client'

import { EmptyState } from "@/components/shared/empty-state"
import { Users } from "lucide-react"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">Manage your application users and permissions.</p>
      </div>

      <EmptyState
        icon={Users}
        title="User Management Coming Soon"
        description="We're building comprehensive user management features. Stay tuned!"
        action={{
          label: "Back to Dashboard",
          onClick: () => window.history.back(),
        }}
      />
    </div>
  )
}
