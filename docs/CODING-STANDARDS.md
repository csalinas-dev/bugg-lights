# Coding Standards

This document defines how code in this repository should be written, organized, and maintained.  
It serves as a living reference for both human developers and AI coding assistants.

---

## Technologies

List the primary stack used in this repository.

Examples:
- Languages: TypeScript, C#, Python, etc.
- Frameworks: ASP.NET Core, Next.js, Django, etc.
- Data Access: ORM, query builders, or raw SQL.
- Testing Frameworks and Tools: Jest, xUnit, PyTest, etc.

This section should accurately reflect what is used in the codebase.

---

## General Principles

- Prefer clarity over cleverness.
- Keep functions, methods, and modules focused on a single purpose.
- Follow established naming and structural patterns throughout the repo.
- Favor composition over inheritance.
- Reuse existing abstractions when possible.
- Avoid magic numbers, duplicated logic, and implicit side effects.

---

## Project Structure

Describe how this repository is organized and where new code should go.

Examples:
- Code lives in `src/`.
- Features are grouped by domain under `src/features/`.
- Shared utilities and infrastructure live under `src/lib/` or `src/common/`.
- Tests mirror the folder structure of implementation files.

Define clear locations for:
- New endpoints, routes, or handlers.
- New business logic or service layers.
- New data access modules or repositories.
- Shared types, utilities, and constants.

---

## Style & Formatting

- Follow the `.editorconfig`, linting, or formatting tools already configured.
- Match existing naming conventions and indentation style.
- Keep line lengths reasonable (e.g., ≤120 characters).
- Maintain consistent import ordering and file organization.
- Favor readability and simplicity over line-count reduction.

If the repo has no enforced style rules, follow the dominant style of nearby code.

---

## Error Handling & Logging

- Follow existing error-handling patterns within the repo.
- Avoid swallowing exceptions silently; handle them intentionally.
- Use centralized or consistent logging mechanisms.
- Log meaningful context but never secrets, credentials, or personal data.
- Avoid over-logging in tight loops or performance-critical sections.

---

## Security & Privacy

- Never commit secrets or credentials.
- Sanitize and validate all user input.
- Escape or encode all output in rendered templates or responses.
- Use least-privilege access for any external systems.
- Store sensitive information securely (environment variables, secret manager, etc.).

---

## Commenting Guidelines

Comments are valuable when they add context — not when they restate the obvious.

**DO:**
- Add comments above functions, classes, or major logical blocks explaining their purpose.
- Explain *why* something is implemented a certain way when it’s not immediately obvious.
- Note assumptions, dependencies, side effects, or historical context that might surprise future readers.

**DO NOT:**
- Comment every line or small step in a function.
- Write comments that describe what the code already makes clear.
- Add noise like:
  ```js
  // Print the letter 'a'
  console.log('a');
````

**Rule of thumb:**
If the code is self-explanatory, don’t narrate it.
If the reasoning, context, or side effect isn’t obvious, document it clearly.

---

## Updating Standards

When a new pattern, dependency, or framework change is introduced:

1. Update this file to reflect the new standard.
2. Include concise examples of correct usage.
3. Mark any outdated or deprecated conventions as “Legacy”.

This document should always reflect the reality of the codebase — not an aspiration.
