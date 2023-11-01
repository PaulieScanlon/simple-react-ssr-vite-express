# Simple React SSR with Vite and Express

A simple example of how to use React with Vite [Server-Side Rendering](https://vitejs.dev/guide/ssr.html) and Express.

## Getting Started

```
npm install
```

## Development

Runs the Development Server: `server-dev.js`.
Dev site available on: `http://localhost:4173`

```
npm run dev
```

## Production - Build

Runs x2 scripts from `package.json`

1. "build:client"
2. "build:server"

```
npm run build
```

## Production - Serve

Runs the Production Server: `server-prod.js`. Production site available on: `http://localhost:5173`. _Disable JavaScript in your Browser and the page will still render._

```
npm run serve
```
