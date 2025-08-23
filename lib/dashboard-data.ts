export const dashboardStats = [
  {
    title: "Total Projects",
    value: "12",
    change: "+2 from last month",
    trend: "up" as const,
  },
  {
    title: "Active Users",
    value: "2,847",
    change: "+12% from last month",
    trend: "up" as const,
  },
  {
    title: "Revenue",
    value: "$8,429",
    change: "+8% from last month",
    trend: "up" as const,
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-0.4% from last month",
    trend: "down" as const,
  },
]

export const recentActivity = [
  {
    id: "1",
    type: "project",
    title: "New project created",
    description: "E-commerce Dashboard",
    timestamp: "2 hours ago",
    icon: "📁",
  },
  {
    id: "2",
    type: "user",
    title: "New user registered",
    description: "john.doe@example.com",
    timestamp: "4 hours ago",
    icon: "👤",
  },
  {
    id: "3",
    type: "payment",
    title: "Payment received",
    description: "$99.00 from Pro plan",
    timestamp: "6 hours ago",
    icon: "💳",
  },
  {
    id: "4",
    type: "deployment",
    title: "Project deployed",
    description: "Marketing Website v2.1",
    timestamp: "1 day ago",
    icon: "🚀",
  },
  {
    id: "5",
    type: "update",
    title: "Profile updated",
    description: "Changed notification preferences",
    timestamp: "2 days ago",
    icon: "⚙️",
  },
]

export const invoices = [
  {
    id: "INV-001",
    date: "2024-01-15",
    amount: 99.0,
    status: "paid" as const,
    plan: "Pro Plan",
    downloadUrl: "#",
  },
  {
    id: "INV-002",
    date: "2023-12-15",
    amount: 99.0,
    status: "paid" as const,
    plan: "Pro Plan",
    downloadUrl: "#",
  },
  {
    id: "INV-003",
    date: "2023-11-15",
    amount: 29.0,
    status: "paid" as const,
    plan: "Starter Plan",
    downloadUrl: "#",
  },
  {
    id: "INV-004",
    date: "2023-10-15",
    amount: 29.0,
    status: "overdue" as const,
    plan: "Starter Plan",
    downloadUrl: "#",
  },
]

export const currentPlan = {
  name: "Pro Plan",
  price: 99,
  billing: "monthly" as const,
  features: [
    "Unlimited projects",
    "Priority support",
    "Advanced analytics",
    "Custom integrations",
    "Team collaboration",
    "White-label options",
  ],
  usage: {
    projects: { current: 8, limit: "unlimited" },
    users: { current: 2847, limit: "unlimited" },
    storage: { current: 45, limit: 100 }, // GB
  },
}
