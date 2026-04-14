# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the built app
- `npm run lint` — ESLint over `src` (`.js`/`.jsx`), fails on any warning (`--max-warnings 0`)

No test runner is configured.

## Environment

- `VITE_YT_API_KEY` — YouTube API key, injected as the `key` query param on every axios request (see [src/api/api.js](src/api/api.js)).
- Backend base URL is hardcoded to `https://api.coachingzona.uz/api/v1/` in [src/api/api.js](src/api/api.js). Change it there, not via env.
- Auth token is read from `localStorage.getItem("token")` **once at module load** when `FT_API` is created. This means after login/logout the axios instance still holds the old header until a full page reload — keep this in mind when debugging auth issues or adding new endpoints.

## Architecture

Single-page React 18 + Vite app (JSX, no TypeScript). Ant Design 5 for UI primitives, SCSS modules for custom styling, Swiper for carousels, `react-player`/`react-youtube` for video content.

### Routing ([src/App.jsx](src/App.jsx))
Two-tier `<Routes>`: `/login` and `/register` render bare; everything else is wrapped in a parent route that renders `<Header />` plus a nested `<Routes>`. When adding a new authenticated page, add it inside the nested `Routes`, not the outer one, so it inherits the header layout.

### State — Redux Toolkit ([src/store/config-store.js](src/store/config-store.js))
Slices are organized by domain folder rather than by feature:
- `trening/` — training categories + subcategories
- `individualTraining/` — individual training categories + videos
- `competion/` — competition categories
- `books/`, `copy/` — listings + "random" variants for homepage sections
- `masterclass/` — masterclass categories
- `slice/lang.js` — UI language

Each slice typically pairs a list thunk with a "random"/featured thunk used on the home page. When adding a new content type, follow this list-plus-random pattern and register the reducer in `config-store.js`.

### Pages & components
- [src/pages/](src/pages/) — one folder per route, each exports a page component of the same name. Pattern: list page (e.g. `TrainingPage`) + single/video page (e.g. `TraningVideoPage`). Note misspellings like `trening`, `Traning`, `competion`, `individualTreningVideoPage` are load-bearing — match them when importing.
- [src/components/](src/components/) — shared UI; `components/ui/Header/Header` is mounted globally by `App.jsx`.
- [src/content/](src/content/), [src/hook/](src/hook/), [src/assets/](src/assets/) — static content, custom hooks, images/svgs. `vite-plugin-svgr` lets SVGs be imported as React components.

### Deployment
`Dockerfile` + `nginx.conf` + `docker-compose.yml` build the Vite app and serve `dist/` via nginx. SPA fallback should be handled in `nginx.conf` — verify there when adding new routes that must survive a hard refresh.
