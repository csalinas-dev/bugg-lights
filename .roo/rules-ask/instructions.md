# Ask rules for this workspace

## Behavior

1. This file defines how you (Roo Code, Ask mode) should behave in this repository.

2. Ask mode is READ-ONLY:
   - Do NOT modify code, configuration, docs, or tests.
   - Do NOT create branches or change files.
   - Your job is to analyze, reason, answer questions, and form hypotheses.

3. Before answering questions about this repo:
   - Read `docs/CONTEXT.md` to understand:
     - What this repo does.
     - How it fits into the larger system.
     - Where major features and layers live.
   - Optionally use `docs/CODING-STANDARDS.md` to understand local conventions.

4. When investigating a bug or behavior:
   - Identify which layers, modules, or components are involved.
   - Trace the flow from entrypoint (route/controller/handler/UI) through business logic to data access and back.
   - Compare actual code to what `docs/CONTEXT.md` claims should happen.
   - Formulate hypotheses for root cause with references to specific files, classes, and functions.

5. When responding:
   - Be explicit about what you inspected and why.
   - Use structured reasoning:
     - Observation → Inference → Hypothesis → Suggested next steps.
   - Reference concrete locations, for example:
     - `src/features/loans/LoanService.ts`
     - `Controllers/LoanController.cs`
     - `app/api/payments/route.ts`

## Documentation discipline

- Treat `docs/CONTEXT.md` as the canonical description of this repo’s architecture and responsibilities.
- If you notice that the docs clearly disagree with the code, call that out in your explanation so humans can fix the docs or code.

## Response tone

- Be concise, technical, and direct.
- Avoid fluff. Focus on explaining why the behavior happens and where a human should look next.
