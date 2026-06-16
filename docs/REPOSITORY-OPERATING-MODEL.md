# Repository Operating Model

This document defines how CyberPath Repaired should be operated as a controlled software product repository.

## Repository identity

| Field | Value |
| --- | --- |
| Product name | CyberPath Repaired |
| Current GitHub repository | `maleksal790-collab/cyberpath-web` |
| Active Vercel project | `cyberpath-repaired` |
| Runtime | React + Vite |
| Primary deployment target | Vercel |

## Ownership

The repository owner is accountable for:

- Product direction.
- Merge decisions.
- Deployment approval.
- Security posture.
- Documentation integrity.
- Release evidence.

## Branch policy

| Branch | Purpose | Merge rule |
| --- | --- | --- |
| `main` | Stable deployable branch | Protected by review and CI where possible |
| `feature/*` | Product or UI changes | Pull request required |
| `fix/*` | Defect fixes | Pull request required |
| `docs/*` | Documentation changes | Pull request preferred |
| `release/*` | Release stabilization | Pull request required |

## Review policy

A review should verify:

- The change solves a real problem.
- The implementation is understandable.
- The learner experience is not degraded.
- Security and privacy impact are considered.
- Deployment risk is acceptable.
- Documentation is updated when behavior changes.

## Change classification

| Class | Examples | Required controls |
| --- | --- | --- |
| Low risk | Copy updates, docs cleanup | Build not always required, but PR preferred |
| Medium risk | UI changes, learning flow updates | Typecheck, build, PR review |
| High risk | Routing, storage, auth, deployment config | Typecheck, build, PR review, deployment validation |
| Critical risk | Data handling, account/login, cloud sync | Architecture decision record before implementation |

## Release policy

A release should include:

- Commit or tag.
- Deployment ID.
- Deployment URL.
- Validation result.
- Known limitations.
- Rollback candidate.

## Evidence model

Keep evidence lightweight but real:

- Build logs.
- CI result.
- Screenshots.
- Vercel deployment link.
- Manual validation notes.
- Accessibility notes where UI changed.

## Non-negotiables

- Do not commit secrets.
- Do not fake test coverage.
- Do not claim certification authority unless it is real.
- Do not make the core learner workflow dependent on login or cloud sync without explicit architecture approval.
- Do not merge a production-impacting change without knowing how to roll it back.
