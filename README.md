# Bun Boilerplate

Minimal boilerplate for building React applications with Bun 1.3.1.

## Quick Start

```bash
# Clone this repository
git clone <your-repo-url>
cd bun-boilerplate

# Install dependencies
bun install

# Start development server
bun run dev
```

Visit http://localhost:3000 to see your app!

## What's Included

- ⚡️ **Bun 1.3.1** - Lightning-fast JavaScript runtime and bundler
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **TypeScript** - Type-safe development
- 🔥 **Hot Reload** - Changes reflect instantly during development
- 📦 **Code Splitting** - Optimized production builds

## Project Structure

```
bun-boilerplate/
├── src/
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── server.ts                # Bun dev server with hot reload
├── build.ts                 # Production build script
├── index.html               # HTML template
├── package.json             # Dependencies (Bun 1.3.1 required)
└── tsconfig.json            # TypeScript configuration
```

## Development

```bash
# Install dependencies
bun install

# Start dev server (port 3000)
bun run dev

# Run linter
bun run lint
```

The dev server features:
- Hot reload on file changes
- On-demand bundling with Bun.build
- Serves on 0.0.0.0 for tunnel access

## Production Build

```bash
# Build for production
bun run build

# Output directory: dist/
```

The production build:
- Minifies all code
- Splits code for optimal loading
- Optimizes for performance

## Deployment

### Static Hosting (Vercel, Netlify, Cloudflare Pages)

1. Build command: `bun run build`
2. Output directory: `dist`
3. Deploy the `dist/` folder

### Docker

```dockerfile
FROM oven/bun:1.3.1

WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

CMD ["bun", "run", "server.ts", "--production"]
```

## Requirements

- **Bun 1.3.1 or higher** - [Install Bun](https://bun.sh)

## How to Use This Boilerplate

This boilerplate is designed to be cloned or forked as a starting point for new projects:

1. **Clone/Fork**: Start by cloning this repository or using it as a template on GitHub
2. **Customize**: Modify `src/App.tsx` or create new components
3. **Build**: Develop your application using React 18 and TypeScript
4. **Deploy**: Build and deploy to any static hosting platform

## Features

### Fast Development
- Bun's bundler is 10x faster than Webpack
- Hot module replacement for instant updates
- TypeScript compilation happens automatically

### Modern React
- React 18 with Concurrent Features
- Hooks-based development
- Strict mode enabled by default

### Type Safety
- Full TypeScript support with strict mode
- Type checking for React components
- IntelliSense in your editor

## Resources

- [Bun Documentation](https://bun.sh/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

MIT - feel free to use this template for any project!
