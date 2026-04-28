# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

This repo uses **pnpm** exclusively. Do not use npm or yarn — the `preinstall` script will reject them. Node.js 24 is required.

## Key Commands

```bash
# Full typecheck across all packages
pnpm run typecheck

# Typecheck + build all packages
pnpm run build

# Run API server in development (build + start with source maps)
pnpm --filter @workspace/api-server run dev

# Run frontend (orsa-guatape) in development
pnpm --filter @workspace/orsa-guatape run dev

# Build frontend for Cloudflare Pages deployment
pnpm --filter @workspace/orsa-guatape run build:cloudflare

# Regenerate API React hooks and Zod schemas from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen

# Push DB schema to database (dev only — requires DATABASE_URL)
pnpm --filter @workspace/db run push
```

## Architecture

This is a **pnpm monorepo** with two top-level directories:

### `artifacts/` — Deployable applications
- **`api-server`** — Express 5 REST API server. Built with esbuild into `dist/index.mjs`. Requires `PORT` and `DATABASE_URL` env vars. All routes are mounted under `/api`.
- **`orsa-guatape`** — React 19 frontend (Vite). Has two build configs: `vite.config.ts` (standard) and `vite.cloudflare.config.ts` (Cloudflare Pages — outputs to `dist/public`).
- **`mockup-sandbox`** — Standalone UI sandbox for component previewing.

### `lib/` — Shared internal packages
- **`api-spec`** — Single source of truth: `openapi.yaml` defines the API contract. Running `codegen` regenerates both `api-client-react` and `api-zod` from this file. The title **must remain `Api`** or import paths will break.
- **`api-client-react`** — Auto-generated TanStack Query hooks (via Orval). Uses a `custom-fetch.ts` mutator. Do not edit the `src/generated/` folder manually.
- **`api-zod`** — Auto-generated Zod v4 schemas (via Orval). Do not edit `src/generated/` manually.
- **`db`** — Drizzle ORM + PostgreSQL. Schema lives in `src/schema/`. Exports `db` (drizzle instance) and `pool` (pg Pool).

### Data flow
```
openapi.yaml (lib/api-spec)
    ↓ codegen (Orval)
lib/api-client-react  ←→  artifacts/orsa-guatape (frontend)
lib/api-zod           ←→  artifacts/api-server (request/response validation)
lib/db                ←→  artifacts/api-server (database access)
```

## TypeScript Setup

- `tsconfig.base.json` at root sets shared compiler options (strict null checks, `noImplicitAny`, target ES2022).
- `lib/*` packages use project references (composite builds) — `tsc --build` at the root builds them in dependency order.
- `artifacts/*` packages do not use project references; they rely on Vite/esbuild for bundling.
- `moduleResolution: "bundler"` and `customConditions: ["workspace"]` are set globally.

## API Development Workflow

1. Edit `lib/api-spec/openapi.yaml` to add/modify endpoints.
2. Run `pnpm --filter @workspace/api-spec run codegen` to regenerate client hooks and Zod schemas.
3. Implement the route handler in `artifacts/api-server/src/routes/`.
4. The frontend consumes the generated hooks from `@workspace/api-client-react`.

## Supply-Chain Security

`pnpm-workspace.yaml` enforces `minimumReleaseAge: 1440` (1 day) for all packages. Only `@replit/*` packages are excluded. Do not disable this setting.
