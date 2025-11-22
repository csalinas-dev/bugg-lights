# Repository Exploration Notes

## Languages, Frameworks, and Libraries
- JavaScript (React, Next.js)
- Material-UI (MUI) for UI components
- Emotion for styling
- FontAwesome for icons
- ESLint for linting

## Major Folders, Modules, and Layer Responsibilities
- src/app/: Next.js app router pages (entry point, layout, globals.css)
- src/components/: Reusable UI components (Splash, FoodDonationCallout, etc.)
- UI layer: Components handle presentation and user interaction
- No backend or data layer; static site with exported build

## Integrations (APIs, Databases, etc.)
- None apparent; static website for event information
- Images served from public/ directory

## Common Naming Conventions, Folder Organization, and Patterns
- PascalCase for component names and files (e.g., Splash.js)
- camelCase for variables and functions
- kebab-case for CSS module files (e.g., page.module.css)
- Components in src/components/, pages in src/app/
- CSS modules co-located with components
- Import grouping: React, third-party, local

## Examples of Typical Code Structures
- Functional components with hooks (though no hooks used yet)
- Material-UI sx prop for inline styles
- Next.js Image for optimized images
- "use client" directive for client-side components