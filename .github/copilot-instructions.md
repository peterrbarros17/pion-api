# Copilot instructions

Read `.specify/memory/constitution.md` and the relevant source files before
planning or changing behavior. Treat the current implementation and README as
the source of truth for existing behavior; do not retroactively specify the
entire API when planning a bounded change.

For feature work, use the installed Spec Kit skills one at a time: specify,
clarify, plan, tasks, analyze, implement, and converge. Review each artifact
and keep the proposed work within the requested scope. Use the existing
TypeScript, Express, Mongoose, Vitest, and Supertest patterns; avoid adding
dependencies or changing deployment behavior unless the approved plan
requires it.

Preserve the documented REST paths and JSON behavior, including JWT
authorization on mutating routes. Add or update focused tests for changed
behavior and run `npm test` and `npm run build` when relevant.
