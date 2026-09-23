# Authentication Conventions

## Stack

- Authentication is handled **exclusively by Clerk** (`@clerk/nextjs`). Do not introduce any other auth method, library, or custom session/JWT handling — all sign-in, sign-up, and session state must go through Clerk.
- `proxy.ts` (Next.js 16's renamed `middleware.ts`) runs `clerkMiddleware()` and defines the route matcher that decides which requests Clerk should process. Keep the matcher's static-asset exclusions intact when editing it.
- `app/layout.tsx` wraps the app in `<ClerkProvider>` and renders `<SignInButton>` / `<SignUpButton>` / `<UserButton>` based on session state via `<Show when="signed-out">` / `<Show when="signed-in">`.

## Rules

- Do all auth-gating for pages/route handlers on the server: use Clerk's server helpers (e.g. `auth()`, `currentUser()`) inside Server Components, Route Handlers, or Server Actions to check the session before returning protected data.
- Never trust client-side auth state alone to protect data — the proxy/middleware and server-side checks are the actual security boundary.
- Keep `CLERK_SECRET_KEY` server-only. Only variables prefixed `NEXT_PUBLIC_` (e.g. `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`) may be referenced from Client Components.
- When adding new protected routes, update the `matcher` in `proxy.ts` rather than adding ad-hoc auth checks scattered across pages.

## Protected routes

- `/dashboard` (and any route nested under it) is a protected route: it requires a signed-in Clerk session. Enforce this with a server-side check — call `auth.protect()` (or check `auth()`'s `userId` and redirect) at the top of the route/layout, in addition to the `proxy.ts` matcher covering the path.

## Home page redirect

- If a signed-in user requests the home page (`/`), redirect them server-side to `/dashboard`. Check the session with Clerk's `auth()` in the `app/page.tsx` Server Component and call `redirect('/dashboard')` from `next/navigation` when a `userId` is present. Signed-out users see the normal home page. Also not sign in users who want to open /dashboard are redirected to / home page.

## Sign In / Sign Up UX

- `<SignInButton>` and `<SignUpButton>` must always use `mode="modal"` so authentication launches as a modal overlay instead of navigating to a separate Clerk-hosted page. Do not link to `/sign-in` or `/sign-up` routes.
