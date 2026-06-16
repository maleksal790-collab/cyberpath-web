# CyberPath Repaired Delivery Pipeline

This document defines the controlled path from idea to production for CyberPath Repaired.

## Pipeline overview

```text
Idea / Requirement
  -> Scope and acceptance criteria
  -> Feature branch
  -> Local verification
  -> Pull request
  -> CI verification
  -> Review and approval
  -> Merge to main
  -> Vercel deployment
  -> Production validation
  -> Release evidence
```

## Stage 1: Intake

Every change starts with a clear intent:

- Problem statement.
- User or learner benefit.
- Scope boundary.
- Acceptance criteria.
- Risk level.

Avoid vague changes such as "improve app". That is not a requirement; that is a fog machine.

## Stage 2: Branching

Create a branch from `main` using one of these patterns:

```text
feature/<name>
fix/<name>
docs/<name>
chore/<name>
release/<version>
```

## Stage 3: Local verification

Before opening a pull request, run:

```bash
npm run typecheck
npm run build
```

For UI changes, also run:

```bash
npm run dev
```

and manually review the affected workflow.

## Stage 4: Pull request

The PR must include:

- Summary.
- Change type.
- Verification evidence.
- Governance checks.
- Screenshots or deployment evidence when applicable.
- Risk notes.

## Stage 5: CI gate

GitHub Actions performs:

- Dependency installation through `npm ci`.
- TypeScript verification.
- Production build.
- Build artifact upload.

A failing CI run blocks merge until resolved.

## Stage 6: Review gate

The reviewer checks:

- Code clarity.
- User experience impact.
- Security/privacy impact.
- Accessibility impact.
- Deployment impact.
- Whether the change violates the local-first principle.

## Stage 7: Production deployment

Vercel deployment should be traceable to:

- Pull request.
- Commit SHA.
- Deployment ID.
- Deployment URL.
- Production validation result.

## Stage 8: Release evidence

For important releases, record:

- Release date.
- Version or tag.
- Main changes.
- Known limitations.
- Rollback candidate.
- Validation outcome.

## Minimum control standard

No production change should be considered complete unless:

- Build passes.
- Typecheck passes.
- Risk is documented.
- Deployment status is known.
- Rollback is possible.
