# SaaSify - Production-Ready SaaS Starter Template

A beautiful, modern SaaS starter template built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui. Get your SaaS up and running in minutes, not weeks.

## ✨ Features

- **🚀 Next.js 14+** - App Router, Server Components, TypeScript
- **🎨 Beautiful UI** - shadcn/ui components, Tailwind CSS, Dark/Light mode
- **🔐 Authentication** - NextAuth.js with credentials and OAuth providers
- **📊 Dashboard** - Analytics, user management, billing, settings
- **💳 Billing Ready** - Subscription management, invoices, payment methods
- **📱 Responsive** - Mobile-first design, works on all devices
- **♿ Accessible** - WCAG compliant, keyboard navigation, screen reader support
- **🎭 Animations** - Smooth transitions and micro-interactions
- **📝 TypeScript** - Fully typed for better developer experience
- **🧪 Production Ready** - Error handling, loading states, SEO optimized

## 🏗️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** NextAuth.js
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Theme:** next-themes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/saasify.git
   cd saasify
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Fill in your environment variables:
   \`\`\`env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   
   # OAuth Providers (optional)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (app)/             # Protected dashboard pages
│   ├── (marketing)/       # Public marketing pages
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard-specific components
│   └── shared/           # Shared components
├── lib/                  # Utility functions and configurations
├── hooks/                # Custom React hooks
└── public/               # Static assets
\`\`\`

## 🔐 Authentication

The template includes a complete authentication system with:

- **Email/Password** authentication
- **OAuth providers** (Google, GitHub)
- **Protected routes** with middleware
- **Session management**
- **User profile management**

### Demo Credentials
- Email: `demo@saasify.com`
- Password: `password`

## 🎨 Customization

### Colors & Theming

The template uses CSS variables for theming. Customize colors in `app/globals.css`:

\`\`\`css
:root {
  --primary: oklch(0.65 0.15 250);    /* #5B8DEF */
  --accent: oklch(0.7 0.2 145);       /* #22C55E */
  /* ... other colors */
}
\`\`\`

### Components

All UI components are built with shadcn/ui and can be customized:

\`\`\`bash
npx shadcn@latest add button
npx shadcn@latest add card
# ... add more components as needed
\`\`\`

## 📊 Dashboard Features

- **Analytics Overview** - Charts and metrics
- **User Management** - User profiles and permissions  
- **Billing & Subscriptions** - Plan management, invoices
- **Settings** - Profile, preferences, notifications
- **Responsive Sidebar** - Mobile-friendly navigation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The template works with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🛠️ Development

### Available Scripts

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
\`\`\`

### Adding New Pages

1. Create page in appropriate directory (`app/(marketing)`, `app/(app)`, etc.)
2. Add navigation links in `lib/site.ts`
3. Update sidebar navigation in `components/dashboard/sidebar-nav.tsx`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

- 📧 Email: support@saasify.com
- 💬 Discord: [Join our community](https://discord.gg/saasify)
- 📖 Documentation: [docs.saasify.com](https://docs.saasify.com)

---

Built with ❤️ by the SaaSify team
