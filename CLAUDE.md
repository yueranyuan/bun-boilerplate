# Claude Instructions for bun-boilerplate

## Project Overview

This is a **true Bun 1.3.1 boilerplate** - NOT a Vite/Node.js project that uses Bun as a package manager.

**Key Requirements:**
- Uses **Bun's native dev server** (`Bun.serve()`)
- Uses **Bun's native bundler** (`Bun.build()`)
- Implements **`console: true`** feature (frontend logs to backend terminal)
- NO Vite, NO Webpack, NO Node.js dev tools

## Architecture

### Server (`server.ts`)
- Bun HTTP server with `Bun.serve()`
- **CRITICAL:** `development: { console: true }` must be enabled
- File watcher rebuilds on changes in `src/`
- Serves `public/index.html` and `public/bundle.js`

### Build Process
- Uses `Bun.build()` API (NOT Vite, NOT Webpack)
- Entry: `src/index.tsx`
- Output: `public/bundle.js`
- Source maps enabled for development

### Frontend
- React 19 with TypeScript
- Single-file bundle served by Bun
- Console logs are proxied to backend terminal (this is the magic!)

## Important Rules

### ✅ DO:
- Use `Bun.serve()` for the dev server
- Use `Bun.build()` for bundling
- Keep `development: { console: true }` in server config
- Use native Bun APIs whenever possible

### ❌ DON'T:
- Add Vite as a dependency
- Add Webpack, Parcel, or other bundlers
- Remove the `console: true` feature
- Replace Bun server with Express/Hono/etc. unless requested

## Testing the `console: true` Feature

To verify this feature works:
1. Run `bun run dev`
2. Open browser to `http://localhost:3000`
3. Click the counter buttons
4. **Check the terminal** - you should see console logs from the React app

Example expected output:
```
App rendered with count: 0
Incrementing count from 0 to 1
App rendered with count: 1
```

## Common Changes

### Adding new dependencies
```bash
bun add package-name
```

### Adding new pages/routes
- This is a minimal boilerplate - add React Router if routing is needed
- Keep using the same `Bun.serve()` + `Bun.build()` pattern

### Production deployment
- Build with `bun run build` (minified)
- Run with `NODE_ENV=production bun run start`
- Consider adding process manager (PM2, etc.)

## Philosophy

This boilerplate showcases **what makes Bun unique**:
- Native dev server (no middleware stack)
- Native bundler (no complex config)
- `console: true` (impossible with Vite/Webpack)

Keep it minimal, keep it Bun-native, keep it fast.
