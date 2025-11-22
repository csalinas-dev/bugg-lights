# Repository Context

## Overview

Briefly describe what this repository does and who or what it serves.

Examples:
- “Customer-facing portal for viewing and managing mortgage loans.”
- “Internal admin API for managing contracts and investors.”
- “Background worker that processes financial events from a message queue.”

Include:
- Primary purpose.
- Primary consumers (humans, services, scheduled jobs).
- Any high-level domain terms that appear everywhere in the code.

---

## Architecture

Summarize the high-level architecture of this repo.

Describe:

- Main runtime types (web app, API, worker, CLI, etc.).
- Primary layers or modules, such as:
  - **Entrypoint layer** (routes, controllers, handlers, UI components).
  - **Service / domain layer** (business logic, rules, workflows).
  - **Data layer** (repositories, ORM/data models, external API clients).
  - **Integration layer** (messaging, third-party APIs, shared libraries).

Show how data generally flows between these layers.

---

## Key Components

List the most important modules/components and their responsibilities.

Examples:
- **LoanController** — handles user-facing endpoints for loan data.
- **PaymentService** — encapsulates payment rules and calculations.
- **ReportingRepository** — reads reporting data from the analytics store.
- **NotificationService** — sends emails or other notifications.

Keep this high-level and stable over time.

---

## External Dependencies & Integrations

Describe non-trivial dependencies:

- Databases (name and role, not credentials).
- Message queues / event buses.
- External APIs / services.
- Shared internal libraries.

Clarify what the repo reads/writes, and where.

---

## Environments & Configuration

Summarize:

- Available environments (local, dev, staging, production, etc.).
- How configuration is usually provided (environment variables, JSON/YAML, secret manager).
- Any important environment-specific behavior or flags (feature toggles, modes).

---

## Interactions with Other Repositories

If this repo is part of a larger system:

- List the other repos it interacts with.
- Describe:
  - Interaction type (HTTP, queue, shared DB, shared library).
  - Direction (who calls whom).
  - High-level data exchanged.

---

## Known Constraints / Legacy Areas

Call out:

- Modules or flows considered “legacy” or fragile.
- Performance-sensitive paths or areas that must be optimized.
- Known technical debt that future changes should keep in mind.

This helps onboard new developers and keeps Roo honest about where it’s operating.
