import { AuthForm } from "@/components/auth/auth-form"
import { OAuthButtons } from "@/components/auth/oauth-buttons"

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <AuthForm type="sign-in" />
      <OAuthButtons />
      <div className="text-center">
        <p className="text-sm text-muted-foreground">Demo credentials: demo@saasify.com / password</p>
      </div>
    </div>
  )
}
