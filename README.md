# Tiny Library

Tiny Library is a small Next.js app that demonstrates a searchable collection of books with categories and simple UI components.

## Features

- Browse books by category
- Search books by name, author, or category
- Simple, component-driven UI using the `components/` folder
- Static JSON data stored in `app/data/`

## Tech Stack

- Next.js 16.3.0 (App Router)
- React 19.2.8
- TypeScript (>=5)
- Tailwind CSS (v4+)
- `clsx` and `tailwind-merge` for composing utility classes
- Misc UI libraries: `lucide-react`, `react-icons`, `shadcn`

## Key Features (detailed)

- Client-side search: lightweight, debounce-free search across name, author, and category. See [lib/utils.ts](lib/utils.ts).
- Category routes: dynamic routing for category and book detail pages (under [app/](app)).
- Reusable components: `BookCard`, `BooksGrid`, `SearchBar`, etc., found in [components/](components) for quick customization.
- Static JSON-backed data: data is stored locally in [app/data/books.json](app/data/books.json) and [app/data/categories.json](app/data/categories.json) for simplicity and portability.
- Minimal footprint: no server-side DB required — ideal for demos and tutorials.

## Project Structure (key files)

- [app/](app) — application routes and pages (page.tsx files use the App Router)
- [components/](components) — shared React components (`BookCard.tsx`, `BooksGrid.tsx`, `Navbar.tsx`)
- [lib/utils.ts](lib/utils.ts) — helpers for filtering, finding books and categories
- [app/data/books.json](app/data/books.json) — primary book data
- [app/data/categories.json](app/data/categories.json) — category metadata (optional)
- [public/](public) — static assets and favicons

## Getting Started (development)

Prerequisites

- Node.js (recommended v18+)
- npm (bundled with Node) — or use pnpm/yarn if preferred

Install dependencies and run locally:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Available scripts (from `package.json`)

- `npm run dev` — starts Next.js in development mode
- `npm run build` — builds the app for production
- `npm run start` — starts the production server after build
- `npm run lint` — run ESLint

Build for production:

```bash
npm run build
npm run start
```

## Data & Content

To add or edit books, update `app/data/books.json`. Categories are derived automatically from book entries by `getAllCategories()` in [lib/utils.ts](lib/utils.ts).

When adding books, ensure each item includes required fields such as `id`, `name`, `author`, `category`, and `cover` (if used by UI components).

## Development Notes

- Search and filtering logic: [lib/utils.ts](lib/utils.ts)
- UI components: [components/](components)
- Tailwind configuration: `postcss.config.mjs` and `tailwind.config` (if present)
- ESLint is configured via `eslint.config.mjs`







