# Bun Boilerplate - Claude Instructions

## What this is

A minimal boilerplate for building React applications using Bun 1.3.1 + Vite.

## Stack

- **Runtime**: Bun 1.3.1
- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Linting**: ESLint

## Commands

```bash
bun install          # Install dependencies
bun dev              # Start dev server (port 5173)
bun run build        # Build for production
bun preview          # Preview production build
bun run lint         # Lint code
```

## How This Boilerplate Is Used

This is meant to be **cloned or forked** as a starting point for new projects:

1. Clone/fork this repository
2. Run `bun install`
3. Start developing with `bun dev`
4. Customize components in `src/`
5. Build with `bun run build`
6. Deploy `dist/` folder

## Rules for Claude

1. **Always use Bun CLI** (`bun add`, not `npm install`)
2. **Use Vite conventions** (`import.meta.env` for env vars)
3. **Test with `bun dev`** after changes
4. **Follow React 19 patterns** - functional components only
5. **Respect ESLint rules**
