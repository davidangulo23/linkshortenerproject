# Database Conventions

## Stack

- **ORM**: Drizzle ORM (`drizzle-orm`), targeting PostgreSQL.
- **Driver**: Neon serverless Postgres via `@neondatabase/serverless` + `drizzle-orm/neon-http`.
- **Migrations**: `drizzle-kit`, configured in `drizzle.config.ts`.

## Client usage

- Import the shared client from `@/db` (`db/index.ts`) — never instantiate a second `drizzle()` client elsewhere.
- All schema/table definitions belong in `db/schema.ts`, using `drizzle-orm/pg-core` builders (`pgTable`, column types, etc.).
- Export every table and its inferred types (`typeof table.$inferSelect` / `$inferInsert`) from `db/schema.ts` so the rest of the app can import types instead of redefining shapes.

## Queries

- Use Drizzle's query builder / relational query API — never construct raw SQL strings by concatenating user input. If raw SQL is unavoidable, use Drizzle's tagged `sql` template so values are parameterized.
- Perform database access only on the server (Server Components, Route Handlers, Server Actions) — never import `@/db` into a `'use client'` file.

## Migrations

- After changing `db/schema.ts`, generate a migration with drizzle-kit before merging schema changes (`drizzle-kit generate`), then apply it (`drizzle-kit migrate` or `push` for prototyping).
- Fix the `schema` path in `drizzle.config.ts` (currently `./src/db/schema.ts`) to point at `./db/schema.ts` before running drizzle-kit commands — see [project-structure.md](./project-structure.md).

## Secrets

- The database connection string (`DATABASE_URL`) is read from the environment only — never hardcode credentials in `db/index.ts`, `drizzle.config.ts`, or anywhere else. See [environment-variables.md](./environment-variables.md).
