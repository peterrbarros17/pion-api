# Pion API Constitution

## Core Principles

### I. Preserve the API Contract
Changes to routes, request or response shapes, status codes, and authentication
behavior MUST be intentional and documented in the feature specification.
Existing clients depend on this API, so backward compatibility is the default.

### II. Follow the Existing Architecture
Implementations MUST use the established TypeScript, Express, Mongoose, and
MongoDB patterns unless an approved plan justifies a change. Keep route
handling, controllers, models, middleware, and database access in their
existing project areas.

### III. Protect Data and Mutating Operations
Mutating routes MUST retain the established JWT authorization requirements.
New inputs MUST be validated before persistence, and sensitive values such as
passwords or token secrets MUST NOT be returned in API responses or committed
to the repository.

### IV. Verify Behavior with Tests
Behavior changes MUST include focused tests using the repository's Vitest and
Supertest conventions. Run the relevant tests and TypeScript build before
considering implementation complete.

### V. Keep Changes Small and Operationally Compatible
Prefer the smallest change that satisfies the approved specification. New
dependencies, data migrations, and changes to Vercel deployment behavior MUST
be justified in the plan rather than introduced incidentally.

## Development Workflow

Use the repository's existing npm scripts: `npm test` for tests and
`npm run build` for TypeScript compilation. Keep local configuration and
credentials in environment variables; never commit `.env` files.

## Governance

These principles guide Spec Kit specifications, plans, implementation, and
review. Amend this document only when project conventions or explicitly
approved requirements change. Increment the version using semantic versioning:
major for incompatible governance changes, minor for new or materially
expanded principles, and patch for clarifications. Review proposed work for
compatibility with these principles and explain any necessary exception in its
plan.

**Version**: 1.0.0 | **Ratified**: 2026-11-21 | **Last Amended**: 2026-11-21
