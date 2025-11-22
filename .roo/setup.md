Perform a one-time setup to establish context for this workspace.

Follow these steps in order, completing each one before moving to the next.  
Work methodically — avoid trying to process the entire repo in a single step.

---

### Step 1 — Create a temporary notes file

1. Create a file called `docs/temp.md`.  
2. As you explore the repository, use this file to jot down structured notes.  
   - List detected **languages**, **frameworks**, and **libraries**.
   - Summarize **major folders**, **modules**, and **layer responsibilities** (controllers, services, UI, data, etc.).
   - Identify any **integrations** (APIs, databases, shared libraries, third-party systems).
   - Note **common naming conventions**, **folder organization**, and **patterns** you observe.
   - Include examples of typical code structures (e.g., service class, API route, UI component).
3. Keep the notes clean and structured — these will feed into the final documentation.

---

### Step 2 — Draft documentation from your notes

Using the notes in `docs/temp.md` as your reference:

1. **Fully rewrite and replace** the following documentation files:

   - `docs/CONTEXT.md` — a concise, high-level architectural overview describing:
     - What this repository does.
     - The main components and their responsibilities.
     - How data and control flow between layers.
     - External systems or repos it interacts with.
     - Significant technologies, frameworks, or runtime environments.

   - `docs/CODING-STANDARDS.md` — a summary of this repository’s coding conventions, including:
     - Languages and frameworks used.
     - Common structural patterns (services, components, repositories, etc.).
     - Naming conventions and formatting norms.
     - Error handling, logging, and configuration approaches.
     - Testing or deployment conventions if present.
     - **Commenting guidelines** — clearly include the following rule:
       - Do *not* comment trivial or self-explanatory code.
       - Comments are for high-level explanations (functions, classes, or complex processes).
       - Only add inline comments when clarifying *why* something is done, not *what* the code does.
       - Include comments for background assumptions, side effects, or non-obvious design decisions.
       - Example of what *not* to do:
         ```js
         // Print the letter 'a'
         console.log('a');
         ```

2. Treat the existing files as **rubrics** defining structure and tone, not content.
   - Preserve their layout, headings, and writing style.
   - Replace all content with information inferred from the codebase and your notes.

---

### Step 3 — Clean up

1. After `CONTEXT.md` and `CODING-STANDARDS.md` have been updated successfully:
   - Delete `docs/temp.md`.
   - Ensure only the two final docs remain.

2. Summarize your findings in your final reply:
   - Briefly describe the overall architecture you inferred.
   - Mention the frameworks or major patterns detected.
   - Note any standout conventions or deviations.

---

**Important:**  
Take your time. If the repo is large, explore it incrementally and build `temp.md` section by section before generating the final docs.  
This reduces API load and prevents incomplete output.

Begin setup now.
