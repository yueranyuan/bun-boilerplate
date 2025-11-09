# Claude Instructions for bun-boilerplate

## What This Is

A **true Bun 1.3.1 boilerplate** using Bun's native dev server and bundler - NOT a Vite project.

**Critical Feature: `console: true`**
- All `console.log()` calls from frontend React code appear in the backend terminal
- This is THE defining feature - impossible with Vite/Webpack
- Server runs on port 8080 (configurable in `server.ts`)

## Architecture

**server.ts** - Bun HTTP server
```typescript
Bun.serve({
  port: 8080,
  development: { console: true }, // ← Frontend logs to terminal!
  fetch(req) { /* serves bundle & HTML */ }
})
```

**Build Process**
- `Bun.build()` compiles `src/index.tsx` → `public/bundle.js`
- File watcher auto-rebuilds on changes in `src/`
- Source maps enabled for debugging

**Frontend**
- React 19 + TypeScript
- All console.log() calls proxy to backend terminal
- Inline styles (no CSS files for simplicity)

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

## Verifying `console: true` Works

1. Start server: `bun run dev`
2. Open `http://localhost:8080` in browser
3. Click the +/- buttons in the React app
4. **Watch the terminal** - frontend console.log() appears there!

Expected terminal output:
```
App rendered with count: 0
Incrementing count from 0 to 1
App rendered with count: 1
```

If you DON'T see frontend logs in terminal → `console: true` is broken or removed.

## Commands

```bash
bun run dev      # Start dev server with hot reload + console: true
bun run build    # Production build (minified)
bun run start    # Production server
bun run deploy   # Deploy to Subscribe.dev (requires API key)
```

## Deployment

The boilerplate includes a deployment script (`deploy.ts`) that uses ZIP upload via S3 to deploy to Subscribe.dev.

**Environment Variables:**
- `SUBSCRIBE_DEV_PLATFORM_API_KEY` - Required for deployment
- Get this from process.env or ask the user if not available

**How to Deploy:**
```bash
# Get API key from environment
SUBSCRIBE_DEV_PLATFORM_API_KEY=$SUBSCRIBE_DEV_PLATFORM_API_KEY bun run deploy

# Or if user needs to provide it
SUBSCRIBE_DEV_PLATFORM_API_KEY=sdp_xxx bun run deploy
```

**What the deployment does:**
1. Reads project name from `package.json`
2. Creates ZIP from `public/` folder (index.html + bundle.js)
3. Uploads to S3 via presigned URLs
4. Deploys to Subscribe.dev with deterministic URL
5. Returns live URL: `https://projectid.apps.subscribe.dev`

**Important:** The deployment script uses the proper S3 upload flow (same as the dashboard), NOT the SDK's `upload()` method which only works for HTML. This ensures ZIP files are properly extracted and served.

## Rules

**✅ MUST:**
- Keep `development: { console: true }` in `Bun.serve()` config
- Use `Bun.build()` for bundling (NOT Vite/Webpack)
- Test that frontend logs appear in terminal after changes

**❌ NEVER:**
- Add Vite, Webpack, or other Node.js bundlers
- Remove the `console: true` setting
- Replace Bun.serve() with Express/Hono unless explicitly requested

## Philosophy

This showcases Bun's unique features:
- **console: true** - Frontend logs in backend (impossible elsewhere)
- Native dev server - No middleware bloat
- Native bundler - No complex webpack configs

Keep it minimal, Bun-native, and fast.
