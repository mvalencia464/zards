# AGENTS.md

## Build/Test/Lint Commands

- **Dev**: `npm run dev` - Start Next.js dev server (localhost:3000)
- **Build**: `npm run build` - Build for production
- **Start**: `npm start` - Start production server
- **Lint**: `npm run lint` - Run ESLint (no tests configured)

## Codebase Structure

**Next.js 16** app-router project with multiple page routes under `/app`:
- `/app` - Main app directory with layout.tsx and page.tsx (home)
- `/app/components` - Reusable React components
- `/app/[route]/page.tsx` - Page routes (landing, workshop, speaker, program, etc.)
- `/public` - Static assets
- **No database** - Frontend-only; no backend/API routes

Key dependencies: React 19, Tailwind CSS 4, Framer Motion (animations), Lucide React (icons), clsx, tailwind-merge.

## Code Style Guidelines

- **Language**: TypeScript with strict mode enabled
- **Imports**: Use ESNext modules; path aliases with `@/*` for root access
- **Components**: Functional components with explicit React.ReactNode or JSX.Element types
- **Styling**: Tailwind CSS classes; use clsx/tailwind-merge for conditional/merged classes
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Formatting**: ESLint enforced with Next.js core-web-vitals and TypeScript rules
- **JSX**: React 19 JSX transform (imports not required per-file)
- **No error handling**: Use standard try-catch; no custom error boundaries yet
