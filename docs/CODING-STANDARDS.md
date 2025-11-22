# Coding Standards

## Languages & Frameworks

- **Languages**: JavaScript (ES6+).
- **Frameworks**: Next.js for static site generation and routing, React for component-based UI.
- **Libraries**: Material-UI (MUI) for UI components, Emotion for styling, FontAwesome for icons, ESLint for code linting.

---

## Structural Patterns

- **Components**: Functional React components, primarily stateless, handling presentation and user interaction.
- No services, repositories, or domain layers; components are the primary structural unit.
- CSS modules co-located with components for scoped styling.
- Use Next.js app router for page-level structure.

---

## Naming Conventions

- **Files**: PascalCase for component files (e.g., `Splash.js`), camelCase for other files.
- **Variables and Functions**: camelCase (e.g., `userName`, `handleClick`).
- **Components**: PascalCase (e.g., `Splash`, `FoodDonationCallout`).
- **CSS Modules**: kebab-case (e.g., `page.module.css`).

---

## Formatting & Style

- Code formatted with ESLint configuration (`eslint.config.mjs`).
- Follows standard JavaScript/React conventions.
- Import grouping: React imports first, third-party libraries, then local imports.

---

## Error Handling & Logging

- Standard JavaScript error handling with try/catch where necessary.
- No specialized logging framework; minimal logging as it's a static site.
- Errors handled at component level or propagated as needed.

---

## Configuration & Environment

- Configuration managed via `next.config.mjs` for build settings.
- No environment variables or complex configuration; static build.

---

## Testing

- No testing framework or conventions established in the codebase.

---

## Deployment & CI/CD

- Deployed as static build via Next.js export or hosting platforms (e.g., Vercel).
- No CI/CD pipeline specified.

---

## Commenting

Do not comment trivial or self-explanatory code.
Comments are for high-level explanations (functions, classes, or complex processes).
Only add inline comments when clarifying why something is done, not what the code does.
Include comments for background assumptions, side effects, or non-obvious design decisions.

Example of what not to do:
```js
// Print the letter 'a'
console.log('a');
```

---

## Other Conventions

- Use "use client" directive for client-side components in Next.js.
- Inline styles with Material-UI sx prop.
- Optimized images with Next.js Image component.
