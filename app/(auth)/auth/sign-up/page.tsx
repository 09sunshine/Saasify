import { AuthForm } from "@/components/auth/auth-form"
import { OAuthButtons } from "@/components/auth/oauth-buttons"

export default function SignUpPage() {
  return (
    <div className="space-y-6">
      <AuthForm type="sign-up" />
      <OAuthButtons />
    </div>
  )
}
