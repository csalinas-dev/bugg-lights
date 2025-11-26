# Repository Context

## Overview

This repository hosts a static website providing information about an event or business venue, serving visitors interested in planning visits, sponsorship opportunities, and related details.

Include:
- Primary purpose: Display static content for event/venue information including rules, courtesies, food donation options, sponsorships, and photo galleries.
- Primary consumers: Human visitors to the website.
- High-level domain terms: Venue booking, sponsorship, food donations, event planning.

---

## Architecture

This repository is a static web application built for deployment as a compiled site.

Describe:

- Main runtime types: Static web app served via hosting platforms (e.g., Vercel, Netlify).
- Primary layers or modules:
  - **Entrypoint layer**: Next.js app router in `src/app/` handles page routing and global layout.
  - **UI layer**: Reusable React components in `src/components/` handle presentation and user interaction.
  - No service/domain or data layers present; content is static.

Data flows from static files (JSX, CSS, images) through Next.js build process to generate HTML/CSS/JS bundles.

---

## Key Components

- **Splash** — Main landing component displaying introductory content.
- **PlanYourVisit** — Provides information and guidance for planning visits to the venue.
- **RulesCourtesies** — Displays venue rules and courtesies for visitors.
- **FoodDonationCallout** — Promotes food donation opportunities.
- **Sponsorship** — Details sponsorship options and benefits.
- **MiniGallery** — Showcases venue photos or event highlights.
- **Footer** — Site footer with general information.
- **Navigation** — Site navigation bar displayed on non-homepage pages.

Keep this high-level and stable over time.

---

## External Dependencies & Integrations

No non-trivial external dependencies or integrations; this is a standalone static site.

- No databases.
- No message queues or external APIs.
- Static assets served from `public/` directory.

---

## Environments & Configuration

- Available environments: Local development (Next.js dev server), production (static build).
- Configuration provided via `next.config.mjs` and package.json scripts.
- No environment-specific behavior or feature toggles.

---

## Interactions with Other Repositories

This repository does not interact with other repositories; it is self-contained.

---

## Known Constraints / Legacy Areas

No known legacy areas or constraints; codebase appears modern and straightforward with no technical debt noted.
