# TypeScript & React Conventions

## TypeScript

- `strict` mode is enabled (`tsconfig.json`) — keep it that way. Never disable strict checks to silence an error.
- Never use `any`. Prefer precise types, `unknown` + narrowing, or generics.
- Export explicit types/interfaces for function props and public module boundaries; let inference handle local variables.
- Use ES modules exclusively (`import`/`export`); this project has no CommonJS (`require`).

## React / Next.js (App Router)

- This project uses the Next.js **App Router** (`app/`). Components are **Server Components by default** — only add `'use client'` at the top of a file when the component needs interactivity, state, effects, or browser-only APIs.
- Push `'use client'` boundaries as far down the tree as possible (wrap only the interactive leaf, not the whole page).
- Prefer `function ComponentName()` declarations (as in `app/page.tsx`, `components/ui/button.tsx`) over arrow-function component assignments.
- Fetch data and read environment/server secrets only in Server Components, Route Handlers, or Server Actions — never in Client Components.
- Use `async`/`await` for asynchronous code; avoid raw `.then()` chains.
- Co-locate route-specific components under the relevant `app/**` segment; put cross-route shared components under `components/`.

## Naming

- Component files: `PascalCase` export name, file name matches the component's purpose (kebab-case is fine for the filename, matching existing `components/ui/button.tsx`).
- Booleans read as predicates (`isLoading`, `hasError`), handlers prefixed with `handle`/`on` (`handleSubmit`, `onClick`).

## Linting

- Run `npm run lint` before considering a change complete. Fix reported issues rather than adding eslint-disable comments, unless there is a documented reason.
