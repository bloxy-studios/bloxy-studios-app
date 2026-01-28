# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev                  # Start Next.js development server (http://localhost:3000)
bun build                # Production build (static export to /out)
bun start                # Run production server
bun lint                 # Run Biome linter (biome check)
bun format               # Format code with Biome (biome format --write)

# Electron
bun electron:dev         # Run Electron + Next.js in development mode
bun electron:build       # Build for current platform
bun electron:build:mac   # Build macOS .dmg
bun electron:build:win   # Build Windows .exe (NSIS installer)
bun electron:build:linux # Build Linux AppImage
bun electron:build:dev   # Build unpacked .app for testing (macOS)
```

## Tech Stack

- **Next.js 16** with App Router (static export for Electron)
- **React 19** with React Compiler enabled
- **Electron 40** for desktop app packaging
- **TypeScript** with strict mode
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Biome** for linting and formatting
- **Bun** as the package manager

## Project Structure

```
app/               # Next.js App Router pages and layouts
  layout.tsx       # Root layout with Geist fonts
  page.tsx         # Home page
  globals.css      # Global styles and Tailwind imports
electron/          # Electron main process
  main.js          # Main process entry point
  preload.js       # Preload script with contextBridge
public/            # Static assets
out/               # Static export output (generated)
dist/              # Electron build output (generated)
```

## Electron Architecture

- **Main process** (`electron/main.js`): Creates BrowserWindow, handles app lifecycle
- **Preload script** (`electron/preload.js`): Exposes safe APIs via `contextBridge`
- **Renderer**: The Next.js app running in the browser window

Security settings enabled:
- `contextIsolation: true`
- `nodeIntegration: false`
- `sandbox: true`

Access Electron APIs in React via `window.electronAPI` (typed in `electron.d.ts`).

## Code Style

- Biome enforces 2-space indentation
- Import organization is handled automatically by Biome
- Uses `@/*` path alias for imports from project root
