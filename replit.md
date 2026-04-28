# Workspace

## Overview

pnpm workspace monorepo using TypeScript. ORSA Guatapé luxury water experience website (Guatapé, Colombia).

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + Tailwind CSS + Wouter routing

## Artifacts

- **artifacts/orsa-guatape** — Main website (previewPath: `/`). Luxury boat experience site with bilingual support (ES/EN), multiple experience pages (Horizon, Adrenaline, Signature), reservation flow, ambient music, WhatsApp contact.
- **artifacts/api-server** — Backend Express API server (previewPath: `/api`).

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Theme

- Deep Navy: `#0A1A3D` (hsl 221, 72%, 14%)
- Gold: `#C9A84C` (hsl 44, 55%, 54%)
- Font: Cormorant Garamond (headings) + Inter (body)

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
