# Code rules for this workspace

## General Behavior

1. This file defines how you (Roo Code, Code mode) should behave in this repository.

2. You are allowed to:
   - Modify source code.
   - Modify tests (if present).
   - Modify documentation in `docs/`.
   - Modify configuration or build files when relevant to the requested change.

3. Before making non-trivial changes:
   - Read `docs/CONTEXT.md` to understand:
     - What this repo is responsible for.
     - How it is architected.
     - Where different responsibilities live.
   - Read `docs/CODING-STANDARDS.md` to understand this repo’s style and structural conventions.

4. Consistency first:
   - Prefer existing patterns over inventing new ones.
   - Match naming, structure, and idioms used in nearby code.
   - If documented standards conflict with undocumented code, bias toward the documented standards and optionally note the conflict in comments or a brief doc change.

---

## Architecture & Layering

1. Keep layers clearly separated:
   - Entrypoints (routes/controllers/handlers/UI components) should be thin and delegate to services or domain logic.
   - Business/domain logic should not depend directly on delivery mechanisms (web frameworks, UI frameworks) where avoidable.
   - Data access should be encapsulated in dedicated modules (repositories, data services, etc.).

2. When adding new behavior:
   - Put new code next to existing patterns for similar features.
   - Reuse existing abstractions instead of introducing slightly different ones.
   - Avoid unnecessary complexity, deep inheritance, or hyper-generic abstractions.

---

## Code Style & Naming

1. Follow the project’s existing style:
   - Respect any `.editorconfig`, lint rules, or formatters already in use.
   - If unsure, mirror the style of the most similar file.

2. Naming:
   - Favor descriptive, unambiguous names.
   - Keep file and folder naming consistent with the rest of the repo.
   - Mirror test file structure to the structure of the implementation files.

---

## Error Handling & Logging

1. Follow existing error-handling patterns in this repo.
2. Preserve existing logging; when changing behavior, extend logging rather than removing it.
3. Avoid logging secrets or sensitive data.

---

## Documentation Sync (Mandatory)

Whenever you change the code in a way that affects how the system behaves or is structured, you must keep `docs/` in sync.

### Changes that require a docs update:

- New features or major flows.
- New modules, services, or cross-cutting concerns.
- Changes to:
  - Public APIs, routes, or contracts.
  - Data models or core persistence behavior.
  - Integrations with other systems or services.
  - Startup/bootstrapping or environment configuration.

### Rules:

1. If the change affects architecture or behavior described in `docs/CONTEXT.md`:
   - Update `docs/CONTEXT.md` in the same change to reflect the new behavior and structure.
   - Keep descriptions high-level and implementation-agnostic.

2. If the change adds or modifies conventions or patterns:
   - Update `docs/CODING-STANDARDS.md` to describe the new expectations.
   - Add short examples where helpful.

3. Do not create new documentation directories or files outside `docs/` unless explicitly requested.

---

## Safety Rails

1. Do not:
   - Introduce new external dependencies or services unless the user explicitly asks for them.
   - Perform destructive data operations (schema drops, irreversible migrations, data wipes) unless explicitly requested.

2. When in doubt:
   - Prefer minimal, targeted changes that clearly satisfy the request.
   - Preserve backward compatibility unless the user specifically wants a breaking change.

3. Always:
   - Keep changes logically cohesive.
   - Ensure tests and build scripts are conceptually kept in a working state according to this repo’s standards.

---

Other than the rules and guidlines written here, continue working on the request as you would originally.