import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { clerkMiddleware } from '@clerk/nextjs/server';

export function middleware(request: NextRequest) {
  // Check if user is trying to access protected dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const token = request.cookies.get("auth-token")

    if (!token) {
      const signInUrl = new URL("/auth/sign-in", request.url)
      signInUrl.searchParams.set("callbackUrl", request.url)
      return NextResponse.redirect(signInUrl)
    }
  }

  return NextResponse.next()
}

export default clerkMiddleware();

export const config = {
  matcher: [
    "/dashboard/:path*",
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};