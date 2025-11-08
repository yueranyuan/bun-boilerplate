# Bun Boilerplate - Claude Instructions

## What this is

This is a minimal boilerplate for building React applications using Bun 1.3.1 as the runtime and bundler. It provides a fast development experience with hot reload and production-ready builds.

## Stack

- **Runtime**: Bun 1.3.1
- **Frontend**: React 18 + TypeScript
- **Dev Server**: Custom Bun server with hot reload
- **Build Tool**: Bun bundler with code splitting

## Project Structure

```
bun-boilerplate/
├── src/
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── server.ts                   # Bun dev server
├── build.ts                    # Production build script
├── index.html                  # HTML template
├── package.json                # Dependencies (Bun 1.3.1 required)
└── tsconfig.json               # TypeScript configuration
```

## Development Workflow

### Starting Development Server

```bash
bun install
bun run dev  # Starts on port 3000
```

The dev server:
- Bundles TypeScript/TSX files on-demand with Bun.build
- Serves static assets from `public/`
- Watches for file changes and clears bundle cache
- Runs on `0.0.0.0` to support tunnel access

### Building for Production

```bash
bun run build  # Output: dist/
```

The build script:
- Uses Bun.build with code splitting and minification
- Outputs optimized bundles to `dist/`

## Bun-Specific Features

### Why Bun 1.3.1?

- Fast bundling (10x faster than Webpack)
- Built-in TypeScript support (no separate transpiler)
- Native JSX support
- Fast package installation
- Single runtime for dev and build

### Bun.build Features Used

- On-demand bundling in dev server
- Code splitting in production
- Minification
- ESM output format

## Common Tasks

### Adding a New Component

1. Create file in `src/components/`
2. Import and use in `App.tsx`
3. Component will auto-reload when saved

### Modifying Styles

- Global styles: Edit `src/index.css`
- Component styles: Use inline styles or CSS modules

### Adding Static Assets

- Place files in `public/` directory
- Reference as `/public/filename.ext` in code

## Rules for Claude

1. **Never modify** `server.ts` or `build.ts` without understanding the bundle caching logic
2. **Always test** with `bun run dev` after making changes
3. **Use React 18 patterns**: Hooks, functional components, StrictMode
4. **Type safety**: Use TypeScript properly, avoid `any`
5. **Hot reload**: Changes should work without restarting the server

## Deployment

**Build command**: `bun run build`
**Output directory**: `dist/`

Deploy `dist/` folder to any static hosting platform:
- Vercel/Netlify/Cloudflare Pages
- S3 + CloudFront
- GitHub Pages
- Any static file server

## Common Issues

**Q: Dev server won't start**
A: Make sure you have Bun 1.3.1+ installed. Run `bun --version` to check.

**Q: TypeScript errors**
A: Run `bun run lint` to check for issues. Make sure tsconfig is correct.

**Q: Hot reload not working**
A: Check that files are in `src/` directory and have proper extensions (.tsx, .ts, .css)

## Resources

- [Bun Documentation](https://bun.sh/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
