# Styling & UI Conventions

## Tailwind CSS

- Tailwind CSS v4 is the only styling mechanism — no CSS Modules, styled-components, or inline `style` objects (except for truly dynamic values Tailwind can't express).
- Global styles/theme tokens live in `app/globals.css`. Add new design tokens there as CSS variables rather than hardcoding colors in components.
- Support dark mode using the `dark:` variant, matching the pattern already used in `app/page.tsx` (e.g. `bg-white dark:bg-black`).

## shadcn/ui

- All UI elements in this project must use shadcn/ui. Never build a custom component from scratch for something shadcn/ui already offers (buttons, inputs, dialogs, forms, dropdowns, tables, cards, toasts, etc.).
- UI primitives live in `components/ui/` and are generated via the shadcn CLI (`npx shadcn add <component>`), configured in `components.json` (style: `base-nova`, base color: `neutral`, icon library: `lucide`).
- If a needed primitive isn't installed yet, add it via the CLI (`npx shadcn add <component>`) rather than hand-rolling it.
- Compose and customize shadcn/ui primitives (via props, variants, and `className`) instead of writing raw HTML elements with manual Tailwind classes for things shadcn/ui already provides.
- Follow the existing primitive pattern (see `components/ui/button.tsx`):
  - Build variants with `class-variance-authority` (`cva`).
  - Accept `className` and merge it last via `cn()` so callers can override styles.
  - Use `data-slot="<name>"` attributes for styling hooks.
  - Base primitives come from `@base-ui/react/*`.

## Class name merging

- Always use `cn()` (imported from `@/lib/utils`, which re-exports the `cn` package) to conditionally join/merge Tailwind classes. Never concatenate class strings manually with template literals when conditions are involved.

## Icons

- Use `lucide-react` for all icons. Do not introduce a second icon library.
