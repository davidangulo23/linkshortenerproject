# Agent Instructions

Instructions for AI coding agents working in this repository. This file is the entry point; detailed, topic-specific standards live in [`doc/`](./doc).

## Project summary

A URL shortener built on Next.js (App Router) with Clerk authentication and a Neon Postgres database accessed through Drizzle ORM. UI is built with Tailwind CSS v4 and shadcn/ui.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 + shadcn/ui (`base-nova` style) |
| Auth | Clerk (`@clerk/nextjs`), enforced via `proxy.ts` |
| Database | Neon Postgres + Drizzle ORM |
| Package manager | npm (`package-lock.json` is committed — do not introduce yarn/pnpm lockfiles) |

## Commands

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run production build
npm run lint    # eslint
```

There are no automated tests configured yet. If you add a testing setup, document the chosen framework and commands here.

## Core rules

- **MANDATORY: before generating or editing any code, read every relevant file under [`doc/`](./doc) for the area you're touching** (see the index below). This is not optional — do it even for small or seemingly obvious changes.
- Follow the detailed conventions in [`doc/`](./doc) — see the index below.
- Never commit secrets. `.env*` is gitignored; keep real credentials out of source, docs, and examples.
- Keep database access, secret env vars, and Clerk server calls on the server side only (Server Components, Route Handlers, Server Actions) — never in `'use client'` files.
- Run `npm run lint` after making changes and fix reported issues.
- Prefer editing/extending existing files and patterns over introducing new libraries or architectural styles.

## Detailed documentation

When adding a new cross-cutting convention, add a new file under `doc/` and link it from the table below rather than growing this file indefinitely.

> ⚠️ **ALWAYS read the relevant `.md` file(s) below BEFORE generating any code.** Skipping this step is a common source of convention violations — check every topic that applies to the change you're about to make, not just the most obvious one.

| Topic | File |
|---|---|
| Authentication (Clerk) | [doc/authentication.md](./doc/authentication.md) |
| Database (Neon + Drizzle) | [doc/database.md](./doc/database.md) |
| Environment variables | [doc/environment-variables.md](./doc/environment-variables.md) |
| Project structure | [doc/project-structure.md](./doc/project-structure.md) |
| Styling & UI (Tailwind + shadcn/ui) | [doc/styling-ui.md](./doc/styling-ui.md) |
| TypeScript & React conventions | [doc/typescript-react-conventions.md](./doc/typescript-react-conventions.md) |
