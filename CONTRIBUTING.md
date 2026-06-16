# Contributing to CyberPath Repaired

This repository follows a governed delivery model. Changes should be intentional, reviewable, and supported by evidence.

## Working model

1. Create a branch from `main`.
2. Keep changes small and scoped.
3. Run local verification before opening a pull request.
4. Use the pull request template.
5. Wait for CI and review before merging.
6. Record deployment evidence when the change reaches Vercel.

## Branch naming

Use clear branch names:

```text
feature/<short-description>
fix/<short-description>
docs/<short-description>
chore/<short-description>
release/<version>
```

Example:

```text
feature/learning-progress-dashboard
```

## Local verification

```bash
npm install
npm run typecheck
npm run build
npm run preview
```

## Engineering expectations

- Prefer simple, maintainable code over clever code.
- Keep learner data local unless a future architecture decision explicitly approves sync.
- Do not commit secrets, tokens, API keys, private data, or generated credentials.
- Do not introduce account requirements into the core learner workflow without approval.
- Document important behavior changes.
- Keep accessibility visible in every UI change.

## Content expectations

Cybersecurity learning content should be practical and evidence-oriented. When adding or changing content, capture:

- Topic owner or reviewer.
- Source/version when applicable.
- Last-reviewed date.
- Learner outcome.
- Practical exercise or scenario where possible.

## Pull request quality bar

A pull request should answer four questions:

1. What changed?
2. Why did it change?
3. How was it verified?
4. What could break?
