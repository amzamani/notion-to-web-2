# Recent UI Changes

This document summarizes the recent modifications made to the user interface and site configuration for the **notion-to-web-2** project.

## Branding & Identity
- **Manifest Updates**: Updated `public/manifest.json` with the new site name: "Abu Musaddiq Zamani - Znap Labs" and short name: "Abu Musaddiq Zamani".
- **Icon Cleanup**: Removed the default starter kit icons from the web manifest to allow for customization.
- **Site Configuration**: Updated the site author to "Zamani Tech Ventures Pvt Ltd" and site name to "Znap Labs" in `site.config.ts`.
- **Search Disabled**: Site-wide search has been disabled in the configuration.

## Component Modifications
- **Header (`NotionPageHeader.tsx`)**:
    - Removed the `ToggleThemeButton` (Dark Mode toggle) from the navigation bar.
    - Simplified the header structure by removing unused thematic components.
- **Footer (`Footer.tsx`)**:
    - Removed the Dark Mode toggle from the footer settings.
    - Cleaned up unused icons (`IoMoonSharp`, `IoSunnyOutline`) and logic (`isDarkMode`, `toggleDarkMode`).
- **Notion Page (`NotionPage.tsx`)**:
    - Removed references to `GitHubShareButton`.
    - Implemented a local `PageBlock` type to resolve TypeScript module resolution errors with `notion-types`.

## Performance & Stability
- **Build Optimization**: Fixed several linting errors (unused variables and imports) that were causing the production build to fail.
- **TypeScript Fixes**: Resolved dependency issues related to transitive types in the notion-utils/react-notion-x stack.

---
*Last updated: 2026-02-15*
