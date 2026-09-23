# Project Structure

## Directory layout

| Path | Purpose |
|---|---|
| `app/` | Next.js App Router routes, layouts, and pages. Server Components by default. |
| `components/ui/` | shadcn/ui generated primitives (Button, etc.). Generated via the shadcn CLI — do not hand-write duplicate primitives here. |
| `components/` (outside `ui/`) | App-specific composed components built on top of `components/ui`. |
| `db/schema.ts` | Drizzle ORM table/schema definitions. |
| `db/index.ts` | Drizzle client singleton (`db`), created from `DATABASE_URL` via `drizzle-orm/neon-http`. |
| `lib/` | Shared utilities (e.g. `cn()` helper). |
| `public/` | Static assets served as-is. |
| `proxy.ts` | Next.js 16 proxy (the renamed successor to `middleware.ts`). Currently runs `clerkMiddleware()`. |

## Import conventions

- Always import via the `@/*` path alias (maps to the repo root), e.g. `@/lib/utils`, `@/db`, `@/components/ui/button`. Do not use deep relative imports like `../../../lib/utils`.
- Keep new top-level folders consistent with the existing lowercase convention (`app`, `components`, `db`, `lib`).

## Known issue to be aware of

`drizzle.config.ts` currently points `schema` at `./src/db/schema.ts`, but the schema actually lives at `db/schema.ts` (there is no `src/` directory in this project). Fix this path before relying on `drizzle-kit generate`/`push` commands.
