"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { signInSchema, signUpSchema, type SignInInput, type SignUpInput } from "@/lib/validators"
import { Loader2 } from "lucide-react"

interface AuthFormProps {
  type: "sign-in" | "sign-up"
}

export function AuthForm({ type }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { signIn } = useAuth()

  const isSignIn = type === "sign-in"
  const schema = isSignIn ? signInSchema : signUpSchema

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput | SignUpInput>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: SignInInput | SignUpInput) => {
    setIsLoading(true)
    setError(null)

    try {
      if (isSignIn) {
        const success = await signIn(data.email, data.password)

        if (!success) {
          setError("Invalid email or password")
        } else {
          router.push("/dashboard")
          router.refresh()
        }
      } else {
        // TODO: Implement sign-up logic
        // For now, just redirect to sign-in
        router.push("/auth/sign-in")
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{isSignIn ? "Welcome back" : "Create account"}</CardTitle>
        <CardDescription>
          {isSignIn ? "Sign in to your account to continue" : "Enter your details to create your account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {!isSignIn && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name" as keyof (SignInInput | SignUpInput))}
                disabled={isLoading}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" {...register("email")} disabled={isLoading} />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              disabled={isLoading}
            />
            {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
          </div>

          {!isSignIn && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword" as keyof (SignInInput | SignUpInput))}
                disabled={isLoading}
              />
              {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>}
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSignIn ? "Sign in" : "Create account"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="text-center text-sm text-muted-foreground w-full">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <Button variant="link" className="p-0 h-auto font-normal" asChild>
            <a href={isSignIn ? "/auth/sign-up" : "/auth/sign-in"}>{isSignIn ? "Sign up" : "Sign in"}</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
