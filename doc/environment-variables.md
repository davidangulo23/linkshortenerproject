# Environment Variables

## Current variables (`.env`, gitignored via `.env*`)

| Variable | Used by | Client-exposed? |
|---|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk (`ClerkProvider`) | Yes — `NEXT_PUBLIC_` prefix ships to the browser |
| `CLERK_SECRET_KEY` | Clerk server SDK / `clerkMiddleware()` | No — server-only |
| `DATABASE_URL` | Drizzle/Neon client (`db/index.ts`), `drizzle.config.ts` | No — server-only |

## Rules

- Never commit real secrets. `.env*` is gitignored; keep it that way.
- Only prefix a variable with `NEXT_PUBLIC_` if it is genuinely safe to expose to the browser. Never rename a secret (e.g. `CLERK_SECRET_KEY`, `DATABASE_URL`) to add that prefix.
- Access env vars via `process.env.<NAME>` in server-only code. Do not read `process.env` for secret values inside `'use client'` files.
- When adding a new required variable, document it in this table and add a corresponding placeholder to any `.env.example` file (create one if it doesn't exist yet) — do not put real values in example files.
- Never log environment variable values.
