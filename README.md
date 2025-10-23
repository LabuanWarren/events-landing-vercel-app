# Typid Events Landing Page

A modern, responsive landing page for Typid Events built with React, TypeScript, and Tailwind CSS. Optimized for deployment on Vercel.

## Features

- ⚡️ Built with Vite for lightning-fast development
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🚀 Optimized for Vercel deployment
- 📄 Multiple pages with React Router

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Method 2: Using Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the settings
5. Click "Deploy"

## Project Structure

```
vercel-app/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── components/
│   │   └── ui/         # UI components
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel configuration
```

## Pages

- `/` - Home page with hero, features, and CTA sections
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `*` - 404 Not Found page

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Deployment**: Vercel

## License

© 2025 Typid Events by Night Latte

